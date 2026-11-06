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
      en: "Gayathri Kalyana Mantapa",
      kn: "ಗಾಯತ್ರಿ ಕಲ್ಯಾಣ ಮಂಟಪ",
    },
    hall: {
      en: "Main Kalyana Mantapa & Dining Courtyard",
      kn: "ಪ್ರಧಾನ ಕಲ್ಯಾಣ ಮಂಟಪ ಮತ್ತು ಭೋಜನ ಶಾಲಾ ಪ್ರಾಂಗಣ",
    },
    address: {
      en: "Thyagarajanagar, Challakere, Chitradurga, Karnataka 577522",
      kn: "ತ್ಯಾಗರಾಜನಗರ, ಚಳ್ಳಕೆರೆ, ಚಿತ್ರದುರ್ಗ, ಕರ್ನಾಟಕ 577522",
    },
    city: "Challakere, Chitradurga",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gayatri+Kalyana+Mantapa+Thyagarajanagar+Challakere+Chitradurga",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.831557997843!2d76.64822537596003!3d14.313438914614686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0b1a03975a593%3A0x6b1f24d3e33f3883!2sChallakere%2C%20Karnataka%20577522!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
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
        en: "Gayathri Kalyana Mantapa",
        kn: "ಗಾಯತ್ರಿ ಕಲ್ಯಾಣ ಮಂಟಪ",
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
        en: "Gayathri Kalyana Mantapa",
        kn: "ಗಾಯತ್ರಿ ಕಲ್ಯಾಣ ಮಂಟಪ",
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
      objectPosition: "center 20%",
      isFeatured: true,
    },
    {
      id: 2,
      title: { en: "Tradition & Grace", kn: "ಸಾಂಪ್ರದಾಯಿಕ ಸೊಬಗು" },
      subtitle: { en: "Adorned in silk and auspicious heritage", kn: "ಸಾಂಪ್ರದಾಯಿಕ ಸೀರೆಯ ಮೆರುಗು ಮತ್ತು ಶುಭ ಕ್ಷಣಗಳು" },
      url: "/images/couple-traditional.jpg",
      aspect: "portrait",
      objectPosition: "center 30%",
    },
    {
      id: 3,
      title: { en: "Among the Misty Hills", kn: "ಹಸಿರು ಗಿರಿಗಳ ಮಡಿಲಲ್ಲಿ" },
      subtitle: { en: "Whispering promises where earth meets the sky", kn: "ಶಾಂತ ಪ್ರಕೃತಿಯ ನಡುವೆ ಪ್ರೇಮದ ಸಂಭಾಷಣೆ" },
      url: "/images/couple-hills.jpg",
      aspect: "landscape",
      objectPosition: "center 65%",
    },
    {
      id: 4,
      title: { en: "Classic Romance", kn: "ಚಿರಂತನ ಪ್ರೇಮ ಪಯಣ" },
      subtitle: { en: "A vintage journey into our new beginning", kn: "ಕ್ಲಾಸಿಕ್ ಶೈಲಿಯಲ್ಲಿ ಜೊತೆಯಾಗಿ ಆರಂಭವಾಗುವ ನವ ಜೀವನ" },
      url: "/images/couple-vintage-car.jpg",
      aspect: "landscape",
      objectPosition: "center 50%",
    },
    {
      id: 5,
      title: { en: "Sunset by the Shore", kn: "ಕಡಲತೀರದ ಸಂಜೆ" },
      subtitle: { en: "Vibrant horizons and waves of affection", kn: "ಕಡಲಿನ ತೀರದಲ್ಲಿ ಹೊಸ ಭರವಸೆಗಳ ಸಂಧ್ಯಾ ಕಾಲ" },
      url: "/images/couple-beach.jpg",
      aspect: "landscape",
      objectPosition: "center 45%",
    },
    {
      id: 6,
      title: { en: "Laughter on the Bridge", kn: "ಸೇತುವೆಯ ಮೇಲಿನ ನಗೆಯ ಕ್ಷಣ" },
      subtitle: { en: "Crossing into forever with joy and smiles", kn: "ಸಂತೋಷದ ನಗುವಿನೊಂದಿಗೆ ಹೊಸ ಬಾಳಿಗೆ ಜೊತೆಯಾಗಿ" },
      url: "/images/couple-bridge.jpg",
      aspect: "portrait",
      objectPosition: "center 40%",
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
