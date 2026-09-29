// Work Samples: filter buttons, tag bars and every portfolio item (real videos + placeholder samples).
export const filters = [
  {
    "cat": "all",
    "label": "All Work",
    "id": null
  },
  {
    "cat": "audio",
    "label": "Audio",
    "id": null
  },
  {
    "cat": "video",
    "label": "Video",
    "id": "wfbtn-video"
  },
  {
    "cat": "photo",
    "label": "Photography",
    "id": null
  },
  {
    "cat": "ai",
    "label": "AI Production",
    "id": null
  },
  {
    "cat": "digital",
    "label": "Digital",
    "id": null
  }
];

export const tagBars = [
  {
    "id": "wtagbarWrap-video",
    "for": "video",
    "audiotype": null,
    "innerId": "wtagbar",
    "label": "Filter video work by type",
    "kind": "tag",
    "buttons": [
      {
        "text": "All",
        "value": "all"
      },
      {
        "text": "Commercial",
        "value": "commercial"
      },
      {
        "text": "Corporate Presentation",
        "value": "corporate-presentation"
      },
      {
        "text": "Testimonial",
        "value": "testimonial"
      },
      {
        "text": "Animation",
        "value": "animation"
      },
      {
        "text": "Event",
        "value": "event"
      },
      {
        "text": "Social Media Reel",
        "value": "social-media-reel"
      },
      {
        "text": "E-Learning",
        "value": "e-learning"
      },
      {
        "text": "Drone Footage",
        "value": "drone-footage"
      },
      {
        "text": "Timelapse",
        "value": "timelapse"
      },
      {
        "text": "360° Footage",
        "value": "360-footage"
      },
      {
        "text": "Dubbing",
        "value": "dubbing"
      },
      {
        "text": "Conference",
        "value": "conference"
      },
      {
        "text": "Tutorial",
        "value": "tutorial"
      },
      {
        "text": "Augmented Reality",
        "value": "augmented-reality"
      },
      {
        "text": "Group Discussion",
        "value": "group-discussion"
      },
      {
        "text": "Corporate",
        "value": "corporate"
      },
      {
        "text": "Virtual Reality",
        "value": "virtual-reality"
      }
    ]
  },
  {
    "id": "wtypebarWrap-audio",
    "for": "audio",
    "audiotype": null,
    "innerId": null,
    "label": "Choose audio filter type",
    "kind": "type",
    "buttons": [
      {
        "text": "Categories",
        "value": "categories"
      },
      {
        "text": "Languages",
        "value": "languages"
      }
    ]
  },
  {
    "id": "wtagbarWrap-audio-categories",
    "for": "audio",
    "audiotype": "categories",
    "innerId": null,
    "label": "Filter audio categories by type",
    "kind": "tag",
    "buttons": [
      {
        "text": "All",
        "value": "all"
      },
      {
        "text": "IVR",
        "value": "ivr"
      },
      {
        "text": "On-Hold Messaging",
        "value": "on-hold-messaging"
      },
      {
        "text": "Jingle",
        "value": "jingle"
      },
      {
        "text": "Voice-Over",
        "value": "voice-over"
      },
      {
        "text": "Dubbing",
        "value": "dubbing"
      }
    ]
  },
  {
    "id": "wtagbarWrap-audio-languages",
    "for": "audio",
    "audiotype": "languages",
    "innerId": null,
    "label": "Filter audio languages by type",
    "kind": "tag",
    "buttons": [
      {
        "text": "All",
        "value": "all"
      },
      {
        "text": "English",
        "value": "english"
      },
      {
        "text": "Arabic",
        "value": "arabic"
      },
      {
        "text": "Hindi",
        "value": "hindi"
      },
      {
        "text": "French",
        "value": "french"
      }
    ]
  },
  {
    "id": "wtagbarWrap-photo",
    "for": "photo",
    "audiotype": null,
    "innerId": null,
    "label": "Filter photo work by type",
    "kind": "tag",
    "buttons": [
      {
        "text": "All",
        "value": "all"
      },
      {
        "text": "Industrial Photography",
        "value": "industrial-photography"
      },
      {
        "text": "Event Photography",
        "value": "event-photography"
      },
      {
        "text": "Facilities Photography",
        "value": "facilities-photography"
      },
      {
        "text": "Property Photography",
        "value": "property-photography"
      }
    ]
  },
  {
    "id": "wtagbarWrap-ai",
    "for": "ai",
    "audiotype": null,
    "innerId": null,
    "label": "Filter ai work by type",
    "kind": "tag",
    "buttons": [
      {
        "text": "All",
        "value": "all"
      },
      {
        "text": "Product Campaign",
        "value": "product-campaign"
      },
      {
        "text": "Avatar-Based",
        "value": "avatar-based"
      }
    ]
  },
  {
    "id": "wtagbarWrap-digital",
    "for": "digital",
    "audiotype": null,
    "innerId": null,
    "label": "Filter digital work by type",
    "kind": "tag",
    "buttons": [
      {
        "text": "All",
        "value": "all"
      },
      {
        "text": "Corporate",
        "value": "corporate"
      },
      {
        "text": "Ecommerce",
        "value": "ecommerce"
      }
    ]
  }
];

export const placeholderIcons = {
  "audio": "<path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>",
  "photo": "<path d=\"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/>",
  "ai": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83\"/>",
  "digital": "<polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/>"
};

export const items = [
 {
  "c": "audio",
  "tags": "ivr",
  "audiotype": "categories",
  "title": "IVR Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "IVR"
 },
 {
  "c": "audio",
  "tags": "on-hold-messaging",
  "audiotype": "categories",
  "title": "On-Hold Messaging Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "On-Hold Messaging"
 },
 {
  "c": "audio",
  "tags": "jingle",
  "audiotype": "categories",
  "title": "Jingle Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Jingle"
 },
 {
  "c": "audio",
  "tags": "voice-over",
  "audiotype": "categories",
  "title": "Voice-Over Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Voice-Over"
 },
 {
  "c": "audio",
  "tags": "dubbing",
  "audiotype": "categories",
  "title": "Dubbing Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Dubbing"
 },
 {
  "c": "audio",
  "tags": "english",
  "audiotype": "languages",
  "title": "English Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "English"
 },
 {
  "c": "audio",
  "tags": "arabic",
  "audiotype": "languages",
  "title": "Arabic Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Arabic"
 },
 {
  "c": "audio",
  "tags": "hindi",
  "audiotype": "languages",
  "title": "Hindi Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Hindi"
 },
 {
  "c": "audio",
  "tags": "french",
  "audiotype": "languages",
  "title": "French Audio Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "French"
 },
 {
  "c": "photo",
  "tags": "industrial-photography",
  "title": "Industrial Photography Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Industrial Photography"
 },
 {
  "c": "photo",
  "tags": "event-photography",
  "title": "Event Photography Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Event Photography"
 },
 {
  "c": "photo",
  "tags": "facilities-photography",
  "title": "Facilities Photography Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Facilities Photography"
 },
 {
  "c": "photo",
  "tags": "property-photography",
  "title": "Property Photography Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Property Photography"
 },
 {
  "c": "ai",
  "tags": "product-campaign",
  "title": "Product Campaign AI Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Product Campaign"
 },
 {
  "c": "ai",
  "tags": "avatar-based",
  "title": "Avatar-Based AI Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Avatar-Based"
 },
 {
  "c": "digital",
  "tags": "corporate",
  "title": "Corporate Digital Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Corporate"
 },
 {
  "c": "digital",
  "tags": "ecommerce",
  "title": "Ecommerce Digital Sample",
  "sub": "Placeholder — replace with a real sample",
  "label": "Ecommerce"
 },
 {
  "c": "video",
  "tags": "event testimonial",
  "title": "Sharjah Ladies Club",
  "sub": "Event Productions",
  "yt": "uMwgrpkAqZo",
  "ytTitle": "Sharjah Ladies Club",
  "img": "https://i.ytimg.com/vi/uMwgrpkAqZo/mqdefault.jpg",
  "badges": [
   "Event",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event testimonial",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "ZsnbWnpyiWo",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/ZsnbWnpyiWo/mqdefault.jpg",
  "badges": [
   "Event",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event",
  "title": "HR Summit & Expo",
  "sub": "Event Productions",
  "yt": "pVkCroer8oc",
  "ytTitle": "HR Summit & Expo",
  "img": "https://i.ytimg.com/vi/pVkCroer8oc/mqdefault.jpg",
  "badges": [
   "Event"
  ]
 },
 {
  "c": "video",
  "tags": "group-discussion",
  "title": "Etisalat Group",
  "sub": "Event Productions",
  "yt": "Up7tTIW4eg0",
  "ytTitle": "Etisalat Group",
  "img": "https://i.ytimg.com/vi/Up7tTIW4eg0/mqdefault.jpg",
  "badges": [
   "Group Discussion"
  ]
 },
 {
  "c": "video",
  "tags": "event testimonial",
  "title": "Unify",
  "sub": "Event Productions",
  "yt": "ONGN9eTNUzs",
  "ytTitle": "Unify",
  "img": "https://i.ytimg.com/vi/ONGN9eTNUzs/mqdefault.jpg",
  "badges": [
   "Event",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event",
  "title": "HAAD Corporate Event",
  "sub": "Event Productions",
  "yt": "Dw-f12B_X-M",
  "ytTitle": "HAAD Corporate Event",
  "img": "https://i.ytimg.com/vi/Dw-f12B_X-M/mqdefault.jpg",
  "badges": [
   "Event"
  ]
 },
 {
  "c": "video",
  "tags": "event",
  "title": "Agnice Iftar Event",
  "sub": "Event Productions",
  "yt": "F54oY2qkvZ4",
  "ytTitle": "Agnice Iftar Event",
  "img": "https://i.ytimg.com/vi/F54oY2qkvZ4/mqdefault.jpg",
  "badges": [
   "Event"
  ]
 },
 {
  "c": "video",
  "tags": "event",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "qQaNVxdMI30",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/qQaNVxdMI30/mqdefault.jpg",
  "badges": [
   "Event"
  ]
 },
 {
  "c": "video",
  "tags": "event testimonial",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "yiqLE3gXhYA",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/yiqLE3gXhYA/mqdefault.jpg",
  "badges": [
   "Event",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event testimonial",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "IbG7X1J8AOo",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/IbG7X1J8AOo/mqdefault.jpg",
  "badges": [
   "Event",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event testimonial",
  "title": "Informa Connect",
  "sub": "Event Productions",
  "yt": "yPJb1SCWYrs",
  "ytTitle": "Informa Connect",
  "img": "https://i.ytimg.com/vi/yPJb1SCWYrs/mqdefault.jpg",
  "badges": [
   "Event",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event",
  "title": "Informa Public Speaking Class",
  "sub": "Event Productions",
  "yt": "6K3g7UvryKI",
  "ytTitle": "Informa Public Speaking Class",
  "img": "https://i.ytimg.com/vi/6K3g7UvryKI/mqdefault.jpg",
  "badges": [
   "Event"
  ]
 },
 {
  "c": "video",
  "tags": "conference testimonial",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "iOfU_a-wbok",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/iOfU_a-wbok/mqdefault.jpg",
  "badges": [
   "Conference",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "conference testimonial",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "H3Ov36a4Dk4",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/H3Ov36a4Dk4/mqdefault.jpg",
  "badges": [
   "Conference",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "conference testimonial",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "UecZN19nXT8",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/UecZN19nXT8/mqdefault.jpg",
  "badges": [
   "Conference",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "event",
  "title": "Informa",
  "sub": "Event Productions",
  "yt": "BhgUSeXn0sI",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/BhgUSeXn0sI/mqdefault.jpg",
  "badges": [
   "Event"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Al Khaleej",
  "sub": "Corporate Videos",
  "yt": "T2QXEV3bwcg",
  "ytTitle": "Al Khaleej",
  "img": "https://i.ytimg.com/vi/T2QXEV3bwcg/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Scitra",
  "sub": "Corporate Videos",
  "yt": "5lLXv-CsmUk",
  "ytTitle": "Scitra",
  "img": "https://i.ytimg.com/vi/5lLXv-CsmUk/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "ACME",
  "sub": "Corporate Videos",
  "yt": "ORqROH8rsJ4",
  "ytTitle": "ACME",
  "img": "https://i.ytimg.com/vi/ORqROH8rsJ4/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Mirr Oils",
  "sub": "Corporate Videos",
  "yt": "Xsym-oTEwEw",
  "ytTitle": "Mirr Oils",
  "img": "https://i.ytimg.com/vi/Xsym-oTEwEw/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Al Khaleej",
  "sub": "Corporate Videos",
  "yt": "sd_Pzgf0hjo",
  "ytTitle": "Al Khaleej",
  "img": "https://i.ytimg.com/vi/sd_Pzgf0hjo/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Everhot",
  "sub": "Corporate Videos",
  "yt": "PMPVLi8nOG8",
  "ytTitle": "Everhot",
  "img": "https://i.ytimg.com/vi/PMPVLi8nOG8/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation testimonial",
  "title": "Healthy Farm",
  "sub": "Corporate Videos",
  "yt": "BkcuAekmsAg",
  "ytTitle": "Healthy Farm",
  "img": "https://i.ytimg.com/vi/BkcuAekmsAg/mqdefault.jpg",
  "badges": [
   "Corporate Presentation",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Everhot",
  "sub": "Corporate Videos",
  "yt": "RD20RzDk44M",
  "ytTitle": "Everhot",
  "img": "https://i.ytimg.com/vi/RD20RzDk44M/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Thar Oil",
  "sub": "Corporate Videos",
  "yt": "0FI_FSveQuc",
  "ytTitle": "Thar Oil",
  "img": "https://i.ytimg.com/vi/0FI_FSveQuc/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation testimonial",
  "title": "Healthy Farm",
  "sub": "Corporate Videos",
  "yt": "fES0RrePKGE",
  "ytTitle": "Healthy Farm",
  "img": "https://i.ytimg.com/vi/fES0RrePKGE/mqdefault.jpg",
  "badges": [
   "Corporate Presentation",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "SCAN Electromechanical Cont. Co. LLC",
  "sub": "Corporate Videos",
  "yt": "pm3P5J1jUNo",
  "ytTitle": "SCAN Electromechanical Cont. Co. LLC",
  "img": "https://i.ytimg.com/vi/pm3P5J1jUNo/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Scitra",
  "sub": "Corporate Videos",
  "yt": "QSmXDvSTM0E",
  "ytTitle": "Scitra",
  "img": "https://i.ytimg.com/vi/QSmXDvSTM0E/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation drone-footage",
  "title": "Classic Metallic Sheets Factory LLC",
  "sub": "Corporate Videos",
  "yt": "z54WbCZ1XIw",
  "ytTitle": "Classic Metallic Sheets Factory LLC",
  "img": "https://i.ytimg.com/vi/z54WbCZ1XIw/mqdefault.jpg",
  "badges": [
   "Corporate Presentation",
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation drone-footage",
  "title": "Emitech",
  "sub": "Corporate Videos",
  "yt": "zXATWpEPMR8",
  "ytTitle": "Emitech",
  "img": "https://i.ytimg.com/vi/zXATWpEPMR8/mqdefault.jpg",
  "badges": [
   "Corporate Presentation",
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Galadari",
  "sub": "Corporate Videos",
  "yt": "zoesWAlB9as",
  "ytTitle": "Galadari",
  "img": "https://i.ytimg.com/vi/zoesWAlB9as/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Perma Pipe",
  "sub": "Corporate Videos",
  "yt": "W3TlyH91GJM",
  "ytTitle": "Perma Pipe",
  "img": "https://i.ytimg.com/vi/W3TlyH91GJM/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Pulse Smart Residence",
  "sub": "Corporate Videos",
  "yt": "7IuLXDP69cg",
  "ytTitle": "Pulse Smart Residence",
  "img": "https://i.ytimg.com/vi/7IuLXDP69cg/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Speedex Tools & Hardware",
  "sub": "Corporate Videos",
  "yt": "-aPj_zk-Z3A",
  "ytTitle": "Speedex Tools & Hardware",
  "img": "https://i.ytimg.com/vi/-aPj_zk-Z3A/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Power Group",
  "sub": "Corporate Videos",
  "yt": "Izv10G1NMmk",
  "ytTitle": "Power Group",
  "img": "https://i.ytimg.com/vi/Izv10G1NMmk/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Zulekha Hospital LLC",
  "sub": "Corporate Videos",
  "yt": "F_XOl5dmdE8",
  "ytTitle": "Zulekha Hospital LLC",
  "img": "https://i.ytimg.com/vi/F_XOl5dmdE8/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Skynet",
  "sub": "Corporate Videos",
  "yt": "bdGfsbB3OH4",
  "ytTitle": "Skynet",
  "img": "https://i.ytimg.com/vi/bdGfsbB3OH4/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation",
  "title": "Zulekha Hospital LLC",
  "sub": "Corporate Videos",
  "yt": "hato_gAql5E",
  "ytTitle": "Zulekha Hospital LLC",
  "img": "https://i.ytimg.com/vi/hato_gAql5E/mqdefault.jpg",
  "badges": [
   "Corporate Presentation"
  ]
 },
 {
  "c": "video",
  "tags": "timelapse",
  "title": "Enova",
  "sub": "Timelapse Productions",
  "yt": "m7s_bBwnkxU",
  "ytTitle": "Enova",
  "img": "https://i.ytimg.com/vi/m7s_bBwnkxU/mqdefault.jpg",
  "badges": [
   "Timelapse"
  ]
 },
 {
  "c": "video",
  "tags": "timelapse",
  "title": "Majid Al Futtaim",
  "sub": "Timelapse Productions",
  "yt": "BKM4ROd5nr8",
  "ytTitle": "Majid Al Futtaim",
  "img": "https://i.ytimg.com/vi/BKM4ROd5nr8/mqdefault.jpg",
  "badges": [
   "Timelapse"
  ]
 },
 {
  "c": "video",
  "tags": "timelapse",
  "title": "Scan Electro Mechanical",
  "sub": "Timelapse Productions",
  "yt": "IacUWAZwgls",
  "ytTitle": "Scan Electro Mechanical",
  "img": "https://i.ytimg.com/vi/IacUWAZwgls/mqdefault.jpg",
  "badges": [
   "Timelapse"
  ]
 },
 {
  "c": "video",
  "tags": "timelapse",
  "title": "Enova",
  "sub": "Timelapse Productions",
  "yt": "r1gTHQhUXOM",
  "ytTitle": "Enova",
  "img": "https://i.ytimg.com/vi/r1gTHQhUXOM/mqdefault.jpg",
  "badges": [
   "Timelapse"
  ]
 },
 {
  "c": "video",
  "tags": "timelapse",
  "title": "Enova",
  "sub": "Timelapse Productions",
  "yt": "UtHhr5yNJRo",
  "ytTitle": "Enova",
  "img": "https://i.ytimg.com/vi/UtHhr5yNJRo/mqdefault.jpg",
  "badges": [
   "Timelapse"
  ]
 },
 {
  "c": "video",
  "tags": "drone-footage",
  "title": "Drone Showcase",
  "sub": "Drone Productions",
  "yt": "3UHRsLUKDNg",
  "ytTitle": "Drone Showcase",
  "img": "https://i.ytimg.com/vi/3UHRsLUKDNg/mqdefault.jpg",
  "badges": [
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "drone-footage",
  "title": "Drone Showcase",
  "sub": "Drone Productions",
  "yt": "VCBpPd-_w2w",
  "ytTitle": "Drone Showcase",
  "img": "https://i.ytimg.com/vi/VCBpPd-_w2w/mqdefault.jpg",
  "badges": [
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "drone-footage timelapse",
  "title": "Enova",
  "sub": "Drone Productions",
  "yt": "szc17K-ZsG0",
  "ytTitle": "Enova",
  "img": "https://i.ytimg.com/vi/szc17K-ZsG0/mqdefault.jpg",
  "badges": [
   "Drone Footage",
   "Timelapse"
  ]
 },
 {
  "c": "video",
  "tags": "drone-footage",
  "title": "Enova",
  "sub": "Drone Productions",
  "yt": "YUg2iVqLPzo",
  "ytTitle": "Enova",
  "img": "https://i.ytimg.com/vi/YUg2iVqLPzo/mqdefault.jpg",
  "badges": [
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "drone-footage",
  "title": "Emitech",
  "sub": "Drone Productions",
  "yt": "cSrsOeWn5I4",
  "ytTitle": "Emitech",
  "img": "https://i.ytimg.com/vi/cSrsOeWn5I4/mqdefault.jpg",
  "badges": [
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "drone-footage",
  "title": "The Oberoi Beach Resort",
  "sub": "Drone Productions",
  "yt": "i_7LIl5D0Ws",
  "ytTitle": "The Oberoi Beach Resort",
  "img": "https://i.ytimg.com/vi/i_7LIl5D0Ws/mqdefault.jpg",
  "badges": [
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "corporate-presentation drone-footage",
  "title": "Classic Metallic Sheets Factory LLC",
  "sub": "Drone Productions",
  "yt": "9MwZ-T4qlco",
  "ytTitle": "Classic Metallic Sheets Factory LLC",
  "img": "https://i.ytimg.com/vi/9MwZ-T4qlco/mqdefault.jpg",
  "badges": [
   "Corporate Presentation",
   "Drone Footage"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Al Sharq Hospital",
  "sub": "Testimonial Videos",
  "yt": "0Q6nbRPw6FM",
  "ytTitle": "Al Sharq Hospital",
  "img": "https://i.ytimg.com/vi/0Q6nbRPw6FM/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Canon",
  "sub": "Testimonial Videos",
  "yt": "q0LbDWQghSE",
  "ytTitle": "Canon",
  "img": "https://i.ytimg.com/vi/q0LbDWQghSE/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Power Group",
  "sub": "Testimonial Videos",
  "yt": "ijygND8UMi8",
  "ytTitle": "Power Group",
  "img": "https://i.ytimg.com/vi/ijygND8UMi8/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Western Union",
  "sub": "Testimonial Videos",
  "yt": "Ukok_pkecaQ",
  "ytTitle": "Western Union",
  "img": "https://i.ytimg.com/vi/Ukok_pkecaQ/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Informa",
  "sub": "Testimonial Videos",
  "yt": "CVrthZ1vHMY",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/CVrthZ1vHMY/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Informa",
  "sub": "Testimonial Videos",
  "yt": "Z3QhKuyDoTM",
  "ytTitle": "Informa",
  "img": "https://i.ytimg.com/vi/Z3QhKuyDoTM/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "ADAA",
  "sub": "Testimonial Videos",
  "yt": "8nPY0WYSZow",
  "ytTitle": "ADAA",
  "img": "https://i.ytimg.com/vi/8nPY0WYSZow/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Mena Water",
  "sub": "Testimonial Videos",
  "yt": "JVBQySsED44",
  "ytTitle": "Mena Water",
  "img": "https://i.ytimg.com/vi/JVBQySsED44/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "Western Union",
  "sub": "Testimonial Videos",
  "yt": "s04F3vMWzhM",
  "ytTitle": "Western Union",
  "img": "https://i.ytimg.com/vi/s04F3vMWzhM/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "corporate testimonial",
  "title": "Waterfront Market",
  "sub": "Testimonial Videos",
  "yt": "HUmqngabxEQ",
  "ytTitle": "Waterfront Market",
  "img": "https://i.ytimg.com/vi/HUmqngabxEQ/mqdefault.jpg",
  "badges": [
   "Corporate",
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "testimonial",
  "title": "NRI Media",
  "sub": "Testimonial Videos",
  "yt": "4k9XLjKB5pc",
  "ytTitle": "NRI Media",
  "img": "https://i.ytimg.com/vi/4k9XLjKB5pc/mqdefault.jpg",
  "badges": [
   "Testimonial"
  ]
 },
 {
  "c": "video",
  "tags": "360-footage",
  "title": "360° Experience",
  "sub": "360° Videos",
  "yt": "3JYKRGzJ4og",
  "ytTitle": "360° Experience",
  "img": "https://i.ytimg.com/vi/3JYKRGzJ4og/mqdefault.jpg",
  "badges": [
   "360° Footage"
  ]
 },
 {
  "c": "video",
  "tags": "360-footage",
  "title": "360° Experience",
  "sub": "360° Videos",
  "yt": "Kwnb64MnGbw",
  "ytTitle": "360° Experience",
  "img": "https://i.ytimg.com/vi/Kwnb64MnGbw/mqdefault.jpg",
  "badges": [
   "360° Footage"
  ]
 },
 {
  "c": "video",
  "tags": "360-footage",
  "title": "360° Experience",
  "sub": "360° Videos",
  "yt": "aRTLsRoA_CI",
  "ytTitle": "360° Experience",
  "img": "https://i.ytimg.com/vi/aRTLsRoA_CI/mqdefault.jpg",
  "badges": [
   "360° Footage"
  ]
 },
 {
  "c": "video",
  "tags": "360-footage",
  "title": "360° Experience",
  "sub": "360° Videos",
  "yt": "43VvUTAoE2o",
  "ytTitle": "360° Experience",
  "img": "https://i.ytimg.com/vi/43VvUTAoE2o/mqdefault.jpg",
  "badges": [
   "360° Footage"
  ]
 },
 {
  "c": "video",
  "tags": "e-learning",
  "title": "Driving Classes",
  "sub": "Tutorial & E-Learning",
  "yt": "vENU9kXnZRA",
  "ytTitle": "Driving Classes",
  "img": "https://i.ytimg.com/vi/vENU9kXnZRA/mqdefault.jpg",
  "badges": [
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "e-learning",
  "title": "Driving Classes",
  "sub": "Tutorial & E-Learning",
  "yt": "mdSOGQcRiMQ",
  "ytTitle": "Driving Classes",
  "img": "https://i.ytimg.com/vi/mdSOGQcRiMQ/mqdefault.jpg",
  "badges": [
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "tutorial animation",
  "title": "TCL GCC",
  "sub": "Tutorial & E-Learning",
  "yt": "LhFD5ksDn3U",
  "ytTitle": "TCL GCC",
  "img": "https://i.ytimg.com/vi/LhFD5ksDn3U/mqdefault.jpg",
  "badges": [
   "Tutorial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "e-learning",
  "title": "Driving Classes",
  "sub": "Tutorial & E-Learning",
  "yt": "P8R2fYMU1ug",
  "ytTitle": "Driving Classes",
  "img": "https://i.ytimg.com/vi/P8R2fYMU1ug/mqdefault.jpg",
  "badges": [
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "e-learning",
  "title": "Driving Classes",
  "sub": "Tutorial & E-Learning",
  "yt": "MyI7wCHAnV4",
  "ytTitle": "Driving Classes",
  "img": "https://i.ytimg.com/vi/MyI7wCHAnV4/mqdefault.jpg",
  "badges": [
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "e-learning",
  "title": "Driving Classes",
  "sub": "Tutorial & E-Learning",
  "yt": "n4rMk-9A70k",
  "ytTitle": "Driving Classes",
  "img": "https://i.ytimg.com/vi/n4rMk-9A70k/mqdefault.jpg",
  "badges": [
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "e-learning",
  "title": "Driving Classes",
  "sub": "Tutorial & E-Learning",
  "yt": "7_CBQojYgxM",
  "ytTitle": "Driving Classes",
  "img": "https://i.ytimg.com/vi/7_CBQojYgxM/mqdefault.jpg",
  "badges": [
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "tutorial",
  "title": "General Tutorial",
  "sub": "Tutorial & E-Learning",
  "yt": "A27rh4QneXo",
  "ytTitle": "General Tutorial",
  "img": "https://i.ytimg.com/vi/A27rh4QneXo/mqdefault.jpg",
  "badges": [
   "Tutorial"
  ]
 },
 {
  "c": "video",
  "tags": "tutorial animation",
  "title": "Dubai Tourism",
  "sub": "Tutorial & E-Learning",
  "yt": "QJp_aCNyOQY",
  "ytTitle": "Dubai Tourism",
  "img": "https://i.ytimg.com/vi/QJp_aCNyOQY/mqdefault.jpg",
  "badges": [
   "Tutorial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Buraq Car Rental",
  "sub": "Commercials",
  "yt": "2zyRRmCpTSA",
  "ytTitle": "Buraq Car Rental",
  "img": "https://i.ytimg.com/vi/2zyRRmCpTSA/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "BNC Network",
  "sub": "Commercials",
  "yt": "KZmduB-zE2E",
  "ytTitle": "BNC Network",
  "img": "https://i.ytimg.com/vi/KZmduB-zE2E/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Buraq Car Rental",
  "sub": "Commercials",
  "yt": "rPLxJIXUul4",
  "ytTitle": "Buraq Car Rental",
  "img": "https://i.ytimg.com/vi/rPLxJIXUul4/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Finance House",
  "sub": "Commercials",
  "yt": "RWyYvHb67uk",
  "ytTitle": "Finance House",
  "img": "https://i.ytimg.com/vi/RWyYvHb67uk/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Cavallo",
  "sub": "Commercials",
  "yt": "c8vyaPRNxn4",
  "ytTitle": "Cavallo",
  "img": "https://i.ytimg.com/vi/c8vyaPRNxn4/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Tapas Power Yoga Center",
  "sub": "Commercials",
  "yt": "FuVZ-f3BV1g",
  "ytTitle": "Tapas Power Yoga Center",
  "img": "https://i.ytimg.com/vi/FuVZ-f3BV1g/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Motorol Lubricants",
  "sub": "Commercials",
  "yt": "oRSJNX0XEiw",
  "ytTitle": "Motorol Lubricants",
  "img": "https://i.ytimg.com/vi/oRSJNX0XEiw/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Milano",
  "sub": "Commercials",
  "yt": "LtEzoIm36C8",
  "ytTitle": "Milano",
  "img": "https://i.ytimg.com/vi/LtEzoIm36C8/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Super General",
  "sub": "Commercials",
  "yt": "1oQ6CEST0fM",
  "ytTitle": "Super General",
  "img": "https://i.ytimg.com/vi/1oQ6CEST0fM/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Matrix Education",
  "sub": "Commercials",
  "yt": "sWtLbRwxERg",
  "ytTitle": "Matrix Education",
  "img": "https://i.ytimg.com/vi/sWtLbRwxERg/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Speedex",
  "sub": "Commercials",
  "yt": "YH4JeCUJ71o",
  "ytTitle": "Speedex",
  "img": "https://i.ytimg.com/vi/YH4JeCUJ71o/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Al Sharq Hospital",
  "sub": "Commercials",
  "yt": "cFfiQ5cCm7k",
  "ytTitle": "Al Sharq Hospital",
  "img": "https://i.ytimg.com/vi/cFfiQ5cCm7k/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Finance House",
  "sub": "Commercials",
  "yt": "HplmcCvmDPg",
  "ytTitle": "Finance House",
  "img": "https://i.ytimg.com/vi/HplmcCvmDPg/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Buraq Car Rental",
  "sub": "Commercials",
  "yt": "A7_4pAOtmWI",
  "ytTitle": "Buraq Car Rental",
  "img": "https://i.ytimg.com/vi/A7_4pAOtmWI/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "CosmoMed",
  "sub": "Commercials",
  "yt": "LQZTw2qBOQw",
  "ytTitle": "CosmoMed",
  "img": "https://i.ytimg.com/vi/LQZTw2qBOQw/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Emitech",
  "sub": "Commercials",
  "yt": "991ZI5JJ2SU",
  "ytTitle": "Emitech",
  "img": "https://i.ytimg.com/vi/991ZI5JJ2SU/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Super General",
  "sub": "Commercials",
  "yt": "mg9JYkL0wGY",
  "ytTitle": "Super General",
  "img": "https://i.ytimg.com/vi/mg9JYkL0wGY/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "ZO Restaurant",
  "sub": "Commercials",
  "yt": "cwX0oWz06u4",
  "ytTitle": "ZO Restaurant",
  "img": "https://i.ytimg.com/vi/cwX0oWz06u4/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Cavallo",
  "sub": "Commercials",
  "yt": "feQpGViAC-A",
  "ytTitle": "Cavallo",
  "img": "https://i.ytimg.com/vi/feQpGViAC-A/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Cavallo",
  "sub": "Commercials",
  "yt": "3BOhXWUcRQY",
  "ytTitle": "Cavallo",
  "img": "https://i.ytimg.com/vi/3BOhXWUcRQY/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Concert Promo",
  "sub": "Commercials",
  "yt": "5Xv3wCkJ4KQ",
  "ytTitle": "Concert Promo",
  "img": "https://i.ytimg.com/vi/5Xv3wCkJ4KQ/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "NSO Symphony Orchestra",
  "sub": "Commercials",
  "yt": "WCXQFAg7ju4",
  "ytTitle": "NSO Symphony Orchestra",
  "img": "https://i.ytimg.com/vi/WCXQFAg7ju4/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Super General",
  "sub": "Commercials",
  "yt": "2yqomU6rjj4",
  "ytTitle": "Super General",
  "img": "https://i.ytimg.com/vi/2yqomU6rjj4/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial animation",
  "title": "Super General",
  "sub": "Commercials",
  "yt": "S_sIzSsgVyA",
  "ytTitle": "Super General",
  "img": "https://i.ytimg.com/vi/S_sIzSsgVyA/mqdefault.jpg",
  "badges": [
   "Commercial",
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "commercial",
  "title": "Matrix Education",
  "sub": "Commercials",
  "yt": "rjqhEsLl2UY",
  "ytTitle": "Matrix Education",
  "img": "https://i.ytimg.com/vi/rjqhEsLl2UY/mqdefault.jpg",
  "badges": [
   "Commercial"
  ]
 },
 {
  "c": "video",
  "tags": "dubbing",
  "title": "Urdu",
  "sub": "Dubbing",
  "yt": "qJxg9lSLpD8",
  "ytTitle": "Urdu",
  "img": "https://i.ytimg.com/vi/qJxg9lSLpD8/mqdefault.jpg",
  "badges": [
   "Dubbing"
  ]
 },
 {
  "c": "video",
  "tags": "dubbing",
  "title": "English",
  "sub": "Dubbing",
  "yt": "AlinFX6ePJE",
  "ytTitle": "English",
  "img": "https://i.ytimg.com/vi/AlinFX6ePJE/mqdefault.jpg",
  "badges": [
   "Dubbing"
  ]
 },
 {
  "c": "video",
  "tags": "dubbing",
  "title": "Hindi",
  "sub": "Dubbing",
  "yt": "MsVVtI_0_o4",
  "ytTitle": "Hindi",
  "img": "https://i.ytimg.com/vi/MsVVtI_0_o4/mqdefault.jpg",
  "badges": [
   "Dubbing"
  ]
 },
 {
  "c": "video",
  "tags": "dubbing",
  "title": "Hindi",
  "sub": "Dubbing",
  "yt": "S0wyGudHueo",
  "ytTitle": "Hindi",
  "img": "https://i.ytimg.com/vi/S0wyGudHueo/mqdefault.jpg",
  "badges": [
   "Dubbing"
  ]
 },
 {
  "c": "video",
  "tags": "animation",
  "title": "House Tour",
  "sub": "Animation",
  "yt": "MTuwPmqcFKQ",
  "ytTitle": "House Tour",
  "img": "https://i.ytimg.com/vi/MTuwPmqcFKQ/mqdefault.jpg",
  "badges": [
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "animation",
  "title": "Dell",
  "sub": "Animation",
  "yt": "0BbudrtTAQY",
  "ytTitle": "Dell",
  "img": "https://i.ytimg.com/vi/0BbudrtTAQY/mqdefault.jpg",
  "badges": [
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "animation e-learning",
  "title": "Car Driving Test",
  "sub": "Animation",
  "yt": "JO0kED7fNb8",
  "ytTitle": "Car Driving Test",
  "img": "https://i.ytimg.com/vi/JO0kED7fNb8/mqdefault.jpg",
  "badges": [
   "Animation",
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "animation e-learning",
  "title": "Car Driving Test",
  "sub": "Animation",
  "yt": "K1FainlGRUM",
  "ytTitle": "Car Driving Test",
  "img": "https://i.ytimg.com/vi/K1FainlGRUM/mqdefault.jpg",
  "badges": [
   "Animation",
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "animation e-learning",
  "title": "Car Driving Test",
  "sub": "Animation",
  "yt": "LxNPHBqH_Y0",
  "ytTitle": "Car Driving Test",
  "img": "https://i.ytimg.com/vi/LxNPHBqH_Y0/mqdefault.jpg",
  "badges": [
   "Animation",
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "animation e-learning",
  "title": "Zebra Traffic System",
  "sub": "Animation",
  "yt": "9YwgeCOjuEM",
  "ytTitle": "Zebra Traffic System",
  "img": "https://i.ytimg.com/vi/9YwgeCOjuEM/mqdefault.jpg",
  "badges": [
   "Animation",
   "E-Learning"
  ]
 },
 {
  "c": "video",
  "tags": "animation",
  "title": "Securities & Commodities Authority",
  "sub": "Animation",
  "yt": "fnRbGpBA_c0",
  "ytTitle": "Securities & Commodities Authority",
  "img": "https://i.ytimg.com/vi/fnRbGpBA_c0/mqdefault.jpg",
  "badges": [
   "Animation"
  ]
 },
 {
  "c": "video",
  "tags": "augmented-reality",
  "title": "AR Experience",
  "sub": "AR / VR",
  "yt": "4StiZ_bQW7Q",
  "ytTitle": "AR Experience",
  "img": "https://i.ytimg.com/vi/4StiZ_bQW7Q/mqdefault.jpg",
  "badges": [
   "Augmented Reality"
  ]
 },
 {
  "c": "video",
  "tags": "virtual-reality",
  "title": "VR Experience",
  "sub": "AR / VR",
  "yt": "LQFUyO7pVH0",
  "ytTitle": "VR Experience",
  "img": "https://i.ytimg.com/vi/LQFUyO7pVH0/mqdefault.jpg",
  "badges": [
   "Virtual Reality"
  ]
 },
 {
  "c": "video",
  "tags": "augmented-reality",
  "title": "AR Experience",
  "sub": "AR / VR",
  "yt": "z4RjEz0Wg5M",
  "ytTitle": "AR Experience",
  "img": "https://i.ytimg.com/vi/z4RjEz0Wg5M/mqdefault.jpg",
  "badges": [
   "Augmented Reality"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 01",
  "sub": "Social Media Reels",
  "yt": "jTyHmCd4HBU",
  "ytTitle": "Social Media Reel 01",
  "img": "https://i.ytimg.com/vi/jTyHmCd4HBU/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 02",
  "sub": "Social Media Reels",
  "yt": "mwwpkud5Yzc",
  "ytTitle": "Social Media Reel 02",
  "img": "https://i.ytimg.com/vi/mwwpkud5Yzc/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 03",
  "sub": "Social Media Reels",
  "yt": "F6OQvgGwSI0",
  "ytTitle": "Social Media Reel 03",
  "img": "https://i.ytimg.com/vi/F6OQvgGwSI0/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 04",
  "sub": "Social Media Reels",
  "yt": "uCvg7sHNgfw",
  "ytTitle": "Social Media Reel 04",
  "img": "https://i.ytimg.com/vi/uCvg7sHNgfw/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 05",
  "sub": "Social Media Reels",
  "yt": "VPb_LEDLSws",
  "ytTitle": "Social Media Reel 05",
  "img": "https://i.ytimg.com/vi/VPb_LEDLSws/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 06",
  "sub": "Social Media Reels",
  "yt": "AynsrZTHeg8",
  "ytTitle": "Social Media Reel 06",
  "img": "https://i.ytimg.com/vi/AynsrZTHeg8/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 07",
  "sub": "Social Media Reels",
  "yt": "nbT6FNHIjqI",
  "ytTitle": "Social Media Reel 07",
  "img": "https://i.ytimg.com/vi/nbT6FNHIjqI/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 08",
  "sub": "Social Media Reels",
  "yt": "07PVyPJxe6o",
  "ytTitle": "Social Media Reel 08",
  "img": "https://i.ytimg.com/vi/07PVyPJxe6o/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 09",
  "sub": "Social Media Reels",
  "yt": "0tZg8jnOR9g",
  "ytTitle": "Social Media Reel 09",
  "img": "https://i.ytimg.com/vi/0tZg8jnOR9g/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 10",
  "sub": "Social Media Reels",
  "yt": "1Bpqir9X73M",
  "ytTitle": "Social Media Reel 10",
  "img": "https://i.ytimg.com/vi/1Bpqir9X73M/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 },
 {
  "c": "video",
  "tags": "social-media-reel",
  "title": "Social Media Reel 11",
  "sub": "Social Media Reels",
  "yt": "9axgYAqeLyg",
  "ytTitle": "Social Media Reel 11",
  "img": "https://i.ytimg.com/vi/9axgYAqeLyg/mqdefault.jpg",
  "badges": [
   "Social Media Reel"
  ]
 }
];
