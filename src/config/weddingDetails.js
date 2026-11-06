/**
 * WEDDING DETAILS CONFIGURATION
 * 
 * Sinchana K.P. & Vinay H.J.
 * All wedding details, names, dates, venues, contact numbers, and backend configurations.
 * Editable in this single file.
 */

export const weddingDetails = {
  // Couple Information
  couple: {
    bride: {
      name: "Sinchana",
      fullName: "Sinchana K.P.",
      kannadaName: "ಸಿಂಚನ",
      kannadaFullName: "ಸಿಂಚನ ಕೆ.ಪಿ.",
      parents: "D/o Smt. & Sri. K.P.",
      kannadaParents: "ಶ್ರೀಮತಿ ಮತ್ತು ಶ್ರೀ ಕೆ.ಪಿ. ರವರ ಸುಪುತ್ರಿ",
      bio: "An artistic soul who loves classical literature, nature trails, and traditional arts.",
      kannadaBio: "ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯ ಪ್ರಿಯೆ, ಪರಿಸರ ಪ್ರೇಮಿ.",
    },
    groom: {
      name: "Vinay",
      fullName: "Vinay H.J.",
      kannadaName: "ವಿನಯ್",
      kannadaFullName: "ವಿನಯ್ ಹೆಚ್.ಜೆ.",
      parents: "S/o Smt. & Sri. H.J.",
      kannadaParents: "ಶ್ರೀಮತಿ ಮತ್ತು ಶ್ರೀ ಹೆಚ್.ಜೆ. ರವರ ಸುಪುತ್ರ",
      bio: "An enthusiastic mind passionate about design, technology, and travel.",
      kannadaBio: "ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಪ್ರಯಾಣ ಪ್ರೇಮಿ.",
    },
    initials: "S & V",
    kannadaInitials: "ಸಿ & ವಿ",
    monogram: "SV",
    hashtag: "#SinchanaWedsVinay",
    // Official couple portrait for hero background and intro
    heroPhoto: "/images/couple-hero.jpg",
  },

  // Main Wedding Date & Muhurtham
  weddingDateTime: {
    // ISO format for countdown timer: YYYY-MM-DDTHH:MM:SS
    targetDate: "2026-11-22T09:30:00",
    displayDate: {
      en: "Sunday, 22 November 2026",
      kn: "ಭಾನುವಾರ, 22 ನವೆಂಬರ್ 2026",
    },
    displayTime: {
      en: "Muhurtham: 9:30 AM – 10:15 AM",
      kn: "ಧನುರ್ ಲಗ್ನ ಸುಮುಹೂರ್ತ: ಬೆಳಿಗ್ಗೆ 9:30 ರಿಂದ 10:15 ರವರೆಗೆ",
    },
    calendarDate: {
      day: "22",
      month: "NOV",
      year: "2026",
      kannadaMonth: "ನವೆಂಬರ್",
      dayName: {
        en: "Sunday",
        kn: "ಭಾನುವಾರ",
      }
    }
  },

  // Contact Numbers
  contacts: [
    {
      label: { en: "Primary Contact", kn: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ" },
      phone: "9972145509",
      href: "tel:9972145509",
    },
    {
      label: { en: "Alternate Contact", kn: "ಹೆಚ್ಚುವರಿ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ" },
      phone: "8867052409",
      href: "tel:8867052409",
    },
  ],

  // Venue & Address (Editable)
  venue: {
    name: {
      en: "Sri Venkateshwara Kalyana Mantapa & Convention Hall",
      kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಕಲ್ಯಾಣ ಮಂಟಪ ಮತ್ತು ಕನ್ವೆನ್ಷನ್ ಹಾಲ್",
    },
    hall: {
      en: "Main Kalyana Mantapa & Dining Courtyard",
      kn: "ಪ್ರಧಾನ ಕಲ್ಯಾಣ ಮಂಟಪ ಮತ್ತು ಭೋಜನ ಶಾಲಾ ಪ್ರಾಂಗಣ",
    },
    address: {
      en: "Bangalore – Mysore Highway, Near Kengeri Satellite Town, Bengaluru, Karnataka 560060",
      kn: "ಬೆಂಗಳೂರು – ಮೈಸೂರು ಹೆದ್ದಾರಿ, ಕೆಂಗೇರಿ ಉಪನಗರದ ಹತ್ತಿರ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560060",
    },
    city: "Bengaluru, Karnataka",
    googleMapsUrl: "https://maps.google.com/?q=Sri+Venkateshwara+Kalyana+Mantapa+Bangalore",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.751167484439!2d77.47895397593717!3d12.92372481593856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f7ec9d8f8a1%3A0xc3b53f65cf1f391a!2sKengeri%20Satellite%20Town%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // Wedding Events (Pre-Wedding & Wedding Ceremony)
  events: [
    {
      id: "pre-wedding",
      title: {
        en: "Pre-Wedding Function & Reception",
        kn: "ಆತಿಥ್ಯ ಸಮಾರಂಭ ಮತ್ತು ವರಪೂಜೆ",
      },
      subtitle: {
        en: "An auspicious evening of traditional welcomes, music, blessings, and fellowship dinner",
        kn: "ಆತ್ಮೀಯ ಸ್ವಾಗತ, ಹಾರ್ದಿಕ ಸತ್ಕಾರ ಮತ್ತು ಭೋಜನ ಕೂಟದ ಸುಂದರ ಸಂಜೆ",
      },
      date: {
        en: "Saturday, 21 November 2026",
        kn: "ಶನಿವಾರ, 21 ನವೆಂಬರ್ 2026",
      },
      day: {
        en: "Saturday",
        kn: "ಶನಿವಾರ",
      },
      time: {
        en: "6:30 PM onwards",
        kn: "ಸಂಜೆ 6:30 ರಿಂದ",
      },
      venue: {
        en: "Sri Venkateshwara Kalyana Mantapa",
        kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಕಲ್ಯಾಣ ಮಂಟಪ",
      },
      attire: {
        en: "Festive Traditional / Contemporary Silk",
        kn: "ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು / ಆಧುನಿಕ ರೇಷ್ಮೆ",
      },
      icon: "Music",
    },
    {
      id: "wedding-ceremony",
      title: {
        en: "Wedding Ceremony (Dhare Muhurtham)",
        kn: "ವಿವಾಹ ಮಹೋತ್ಸವ (ಧಾರೆ ಮುಹೂರ್ತ)",
      },
      subtitle: {
        en: "The sacred traditional wedding vows, mangalasutra dharana, and sapthapadi in auspicious lagna",
        kn: "ಮಾಂಗಲ್ಯ ಧಾರಣೆ ಮತ್ತು ಸಪ್ತಪದಿ ತುಳಿಯುವ ಪವಿತ್ರ ಶುಭ ಮುಹೂರ್ತ",
      },
      date: {
        en: "Sunday, 22 November 2026",
        kn: "ಭಾನುವಾರ, 22 ನವೆಂಬರ್ 2026",
      },
      day: {
        en: "Sunday",
        kn: "ಭಾನುವಾರ",
      },
      time: {
        en: "Muhurtham: 9:30 AM – 10:15 AM",
        kn: "ಧನುರ್ ಲಗ್ನ ಸುಮುಹೂರ್ತ: ಬೆಳಿಗ್ಗೆ 9:30 ರಿಂದ 10:15",
      },
      venue: {
        en: "Sri Venkateshwara Kalyana Mantapa",
        kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಕಲ್ಯಾಣ ಮಂಟಪ",
      },
      attire: {
        en: "Traditional South Indian Silk (Pattu Saree / Dhoti)",
        kn: "ಸಾಂಪ್ರದಾಯಿಕ ರೇಷ್ಮೆ ಸೀರೆ / ಪಂಚೆ",
      },
      icon: "Heart",
    },
  ],

  // Photo Gallery
  gallery: [
    {
      id: 1,
      title: { en: "Forever in Your Arms", kn: "ಪ್ರೀತಿಯ ಅಪ್ಪುಗೆ" },
      subtitle: { en: "Sinchana & Vinay — A timeless embrace in the woodlands", kn: "ಸಿಂಚನ ಮತ್ತು ವಿನಯ್ — ಪ್ರಕೃತಿಯ ಮಡಿಲಲ್ಲಿ" },
      url: "/images/couple-hero.jpg",
      aspect: "portrait",
      isFeatured: true,
    },
    {
      id: 2,
      title: { en: "Under Golden Lights", kn: "ಬಂಗಾರದ ದೀಪಗಳ ಸಾಲಿನಲ್ಲಿ" },
      subtitle: { en: "Engagement day rituals and family blessings", kn: "ನಿಶ್ಚಿತಾರ್ಥದ ಪವಿತ್ರ ಕ್ಷಣಗಳು" },
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: 3,
      title: { en: "The Eternal Bond", kn: "ಪವಿತ್ರ ಬಂಧನ" },
      subtitle: { en: "Two families united with love and tradition", kn: "ಎರಡು ಕುಟುಂಬಗಳ ಸಮ್ಮಿಲನ" },
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
    },
    {
      id: 4,
      title: { en: "A Shared Horizon", kn: "ಹೊಸ ಪಯಣದ ನಸುಕು" },
      subtitle: { en: "Walking into tomorrow hand in hand", kn: "ಜೊತೆಯಾಗಿ ಸಾಗುವ ಹೆಜ್ಜೆ" },
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
    },
    {
      id: 5,
      title: { en: "Terracotta Twilight", kn: "ಸಂಜೆ ಹೊತ್ತಿನ ರಂಗು" },
      subtitle: { en: "Warm hues and traditional celebratory attire", kn: "ಬೆಚ್ಚನೆಯ ಸಂಜೆಯ ಬೆಳಕು" },
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: 6,
      title: { en: "Heartfelt Blessings", kn: "ಹಿರಿಯರ ಆಶೀರ್ವಾದ" },
      subtitle: { en: "A quiet moment of gratitude", kn: "ಕೃತಜ್ಞತೆಯ ಮಧುರ ಕ್ಷಣ" },
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
    },
  ],

  // Background Audio Configuration
  audio: {
    title: "Traditional South Indian Wedding Shenai & Melam — KM Creative Works",
    url: "/audio/wedding-song.m4a",
  },

  // Color Palette Theme
  theme: {
    warmIvory: "#F7F2EC",
    champagneBeige: "#E9DDD1",
    terracotta: "#986B58",
    dustyBrown: "#795345",
    chocolateBrown: "#49362E",
    mutedGold: "#C5A58F",
    antiqueGold: "#C5A059",
  },
};

export default weddingDetails;
