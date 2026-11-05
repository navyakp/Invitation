import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const MusicPlayer = ({ audioUrl, autoPlayRequested, lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);
  const synthAudioRef = useRef(null);

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.55;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onError = () => {
      // If external CDN MP3 is blocked or offline, fallback to gentle Web Audio synthesizer
      console.log('Audio file failed to load, preparing graceful synth fallback');
      setHasError(true);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('error', onError);

    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('error', onError);
      if (synthAudioRef.current) {
        try {
          synthAudioRef.current.close();
        } catch (e) {}
      }
    };
  }, [audioUrl]);

  // When user interacted and triggered opening
  useEffect(() => {
    if (autoPlayRequested && audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('User interaction required for audio playback:', err);
          });
      }
    }
  }, [autoPlayRequested]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = isMuted;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Playback error:', err);
            // Fallback soft synth chime
            startSoftSynth();
            setIsPlaying(true);
          });
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  // Simple, lovely ambient harmonic chime generator using Web Audio API in case mp3 is unreachable
  const startSoftSynth = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      synthAudioRef.current = ctx;

      const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C chord arpeggio
      let index = 0;

      const playChord = () => {
        if (ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[index % notes.length], ctx.currentTime);
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 2.6);
        index++;
      };

      const interval = setInterval(playChord, 1800);
      playChord();
      return () => clearInterval(interval);
    } catch (e) {}
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#FAF6F0]/90 backdrop-blur-md border border-[#C5A58F]/50 shadow-stationery transition-all hover:shadow-lg">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-serif tracking-wider transition-all duration-300 ${
            isPlaying
              ? 'bg-[#986B58] text-[#F7F2EC] shadow-sm'
              : 'bg-white/80 text-[#795345] hover:bg-[#E9DDD1]'
          }`}
          title={isPlaying ? 'Pause Instrumental Music' : 'Play Instrumental Music'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 animate-pulse text-[#E9DDD1]" />
              <span className="hidden sm:inline-block">
                {lang === 'kn' ? 'ವಿರಾಮ' : 'Pause'}
              </span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#986B58] fill-current" />
              <span className="hidden sm:inline-block">
                {lang === 'kn' ? 'ಸಂಗೀತ' : 'Music'}
              </span>
            </>
          )}

          {/* Sound wave icon animation */}
          <div className="flex items-end gap-0.5 h-3.5">
            <span
              className={`w-0.5 bg-current rounded-full transition-all ${
                isPlaying ? 'h-3 animate-bounce' : 'h-1.5 opacity-50'
              }`}
              style={{ animationDelay: '0ms' }}
            />
            <span
              className={`w-0.5 bg-current rounded-full transition-all ${
                isPlaying ? 'h-4 animate-bounce' : 'h-2.5 opacity-50'
              }`}
              style={{ animationDelay: '150ms' }}
            />
            <span
              className={`w-0.5 bg-current rounded-full transition-all ${
                isPlaying ? 'h-2.5 animate-bounce' : 'h-1 opacity-50'
              }`}
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </button>

        {/* Mute/Unmute Toggle */}
        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-2 rounded-full text-[#795345] hover:text-[#49362E] hover:bg-white/80 transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-red-700/80" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#986B58]" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

