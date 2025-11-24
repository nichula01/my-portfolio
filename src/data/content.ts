export const heroContent = {
  name: "Nichula Sathmith Wasalathilaka",
  title: "Electrical & Electronic Engineering Undergraduate",
  tagline: "Embedded Systems | AI & Remote Sensing Enthusiast",
  focus: "I craft precision sensing systems that pair elegant hardware with state-of-the-art perception models.",
  description:
    "Final-year Electrical & Electronic Engineering undergraduate (GPA 3.85/4.00) applying signal processing and AI to remote sensing, smart agriculture, and automated control systems.",
  location: "Kandy, Sri Lanka",
  email: "nichula2001@gmail.com", 
  image: "/images/profile2.jpg",
  highlights: [
    { label: "Academic Performance", value: "GPA 3.85/4.00 (Top 5%)" },
    { label: "National Rank (A/L)", value: "147 | District Rank 15 (Kandy)" },
    { label: "Research Publications", value: "3+ papers under review" },
    { label: "Leadership Experience", value: "AIESEC 1yr 7mo" }
  ]
};

export const aboutContent = {
  paragraphs: [
    "Final-year Electrical & Electronic Engineering undergraduate at the University of Peradeniya, Sri Lanka focusing on signal processing, control systems, and applied AI (GPA 3.85/4.00).",
    "Built IoT, embedded, and computer-vision systems for remote sensing and smart agriculture while serving 1.7 years with AIESEC leading international volunteer programs and public relations."
  ],
  focusAreas: ["Remote sensing", "Edge AI", "Systems integration", "Leadership development"],
  quote:
    "I believe in purposeful engineering that bridges theoretical advancement with practical application - creating solutions that serve real-world needs while maintaining scientific rigor.",
  cv: "/resources/Nichula_Wasalathilaka_CV.pdf"
};

export const researchAreas = [
  {
    title: "Remote Sensing Intelligence",
    description:
      "Designing segmentation + change detection pipelines that blend spectral fusion, temporal reasoning, and lightweight attention.",
    metrics: ["Sentinel-2 & WorldView", "Multi-scale encoders", "SeK losses"]
  },
  {
    title: "Edge & Embedded Systems",
    description:
      "Full-stack greenhouse automation platform with custom PCB, ESP32 fleet, and reactive dashboard for agritech monitoring.",
    metrics: ["LoRa mesh", "Sensor fusion", "Real-time control"]
  },
  {
    title: "Scientific Visualization",
    description:
      "Minimalist, high-contrast dashboards and research tools with geometric cues that highlight signal quality and model provenance.",
    metrics: ["Data storytelling", "Human-in-the-loop", "Systems UX"]
  }
];

export const education = [
  {
    title: "B.Sc. Engineering – Electrical & Electronic Engineering",
    school: "University of Peradeniya, Sri Lanka",
    period: "2022 – 2026 (Expected)",
    details: ["GPA: 3.85 / 4.00 (Top 5%)"],
    highlights: [
      "Advanced Signal Processing",
      "Digital Signal Processing", 
      "Advanced Control Systems",
      "Discrete-Time Control",
      "Automatic Control"
    ]
  },
  {
    title: "G.C.E. Advanced Level – Physical Science Stream",
    school: "National Rank: 147 | District Rank: 15 (Kandy)",
    period: "2021",
    details: ["Z-Score: 2.5138"],
    highlights: ["Combined Mathematics – A", "Physics – A", "Chemistry – A"]
  }
];

export const projects = [
  {
    title: "Fully Automated Greenhouse Monitoring System",
    year: "2024",
    description:
      "End-to-end IoT solution with AI-based disease detection, automated irrigation, and climate control. Built a web dashboard for real-time environmental monitoring and control with weather predictions and AI agricultural assistant.",
    stack: ["Raspberry Pi", "ESP32", "Arduino", "Python", "HTML/CSS", "AI/ML", "IoT"],
    image: "/images/implementedgreenhouse.jpg",
    details: [
      "5 sensors integrated (DHT11, soil moisture, LDR, rain sensor) for comprehensive environmental monitoring",
      "Real-time dashboard with live camera feed and historical data analysis",
      "Weather prediction integration using Google Weather API for proactive management",
      "AI-powered disease detection through image analysis for early intervention",
      "Gemini-powered chatbot providing expert agricultural advice and support",
      "Automated irrigation and climate control systems with 24/7 monitoring"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nichula01/smart-greenhouse" },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=cL97SUo4XJA" }
    ]
  },
  {
    title: "Slum Detection using U-Net",
    year: "2025",
    description:
      "Developed a U-Net with ResNet-34 encoder for binary segmentation of slum areas in high-resolution satellite imagery. Achieved IoU = 0.848 and F1-score = 0.884 on the Mumbai dataset.",
    stack: ["U-Net", "ResNet-34", "PyTorch", "Remote Sensing", "Computer Vision"],
    image: "/images/slum.png",
    details: [
      "Binary segmentation of urban slum areas using deep learning techniques",
      "U-Net architecture with ResNet-34 encoder for enhanced feature extraction",
      "Achieved high accuracy: IoU = 0.848, F1-score = 0.884 on Mumbai satellite dataset",
      "Advanced preprocessing pipeline for high-resolution satellite imagery",
      "Comprehensive evaluation on real-world urban planning datasets"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nichula01/Slum-Detection-Using-Unet-Architecture" }
    ]
  },
  {
    title: "UrbanMamba: Semantic Segmentation of Urban Areas",
    year: "Ongoing (2025)",
    description:
      "Developing UrbanMamba, a novel architecture for semantic segmentation of urban areas. This work extends the original ChangeMamba framework by adapting it into a single encoder–decoder design tailored for urban semantic segmentation tasks in remote sensing.",
    stack: ["Mamba Architecture", "Semantic Segmentation", "Remote Sensing", "PyTorch", "Transformer Alternatives"],
    image: "/images/urbanmamba.png",
    details: [
      "Novel architecture based on Mamba state-space models for urban segmentation",
      "Single encoder-decoder design optimized for remote sensing applications",
      "Extends ChangeMamba framework for semantic segmentation tasks",
      "Focus on efficient processing of high-resolution urban satellite imagery",
      "Research aimed at improving urban planning and development applications"
    ]
  },
  {
    title: "Semester Projects",
    year: "2022 - 2023",
    description:
      "Hands-on hardware design and electronics projects completed during undergraduate coursework.",
    stack: ["Digital Electronics", "Sensors", "Embedded Systems", "Analog Electronics"],
    image: "/images/linefollow1.jpg",
    details: [
      "Line Following Robot using Analog electronics: Implemented using logic gates and flip-flops for real-time control and navigation.",
      "Pulse Rate Monitoring: Designed a wearable sensor using piezoelectric sensor to measure human pulse rate accurately."
    ],
    links: [{ label: "View Photos", href: "/semester-projects" }]
  }
];

// Research summary for main page
export const researchSummary = {
  title: "Research & Publications",
  description: "Contributing to cutting-edge research in remote sensing, AI, and computer vision with multiple papers under review in prestigious IEEE conferences.",
  featuredPapers: [
    {
      title: "Precision Spatio-Temporal Feature Fusion for Robust Remote Sensing Change Detection",
      status: "Under Review - IEEE ICIIS 2025",
      link: "https://arxiv.org/abs/2507.11523"
    },
    {
      title: "Mamba-FCS: Enhanced Semantic Change Detection in Remote Sensing",
      status: "Under Review - IEEE J-STARS",
      link: "https://arxiv.org/abs/2508.08232"
    },
    {
      title: "Automated Slum Detection from High-Resolution Satellite Imagery",
      status: "Abstract Submitted - ICIET 2025",
      link: "/resources/iciet2025_abstract.pdf"
    }
  ],
  cta: {
    text: "View All Research",
    href: "/research"
  }
};

export const publications = [
  {
    title: "Precision Spatio-Temporal Feature Fusion for Robust Remote Sensing Change Detection",
    status: "Under review — IEEE ICIIS 2025",
    description:
      "Advanced method for robust change detection in multi-temporal satellite imagery. Focuses on spatio-temporal feature fusion to improve detection accuracy under seasonal and illumination variability. Enhances urban mapping and remote sensing applications.",
    authors:
      "Buddhi Wijenayake, Athulya Ratnayake, Praveen Sumanasekara, Nichula Wasalathilaka, Mathivathanan Piratheepan, Roshan Godaliyadda, Mervyn Ekanayake, Vijitha Herath",
    link: "https://arxiv.org/abs/2507.11523"
  },
  {
    title:
      "Mamba-FCS: Joint Spatio-Frequency Feature Fusion, Change-Guided Attention, and SeK Loss for Semantic Change Detection",
    status: "Under review — IEEE J-STARS",
    description:
      "Extends Mamba-style sequence models with change-guided attention and frequency cues for more consistent semantic change detection.",
    authors:
      "Buddhi Wijenayake, Athulya Ratnayake, Praveen Sumanasekara, Roshan Godaliyadda, Parakrama Ekanayake, Vijitha Herath, Nichula Wasalathilaka",
    link: "https://arxiv.org/abs/2508.08232"
  },
  {
    title:
      "Automated Slum Detection from High-Resolution Satellite Imagery: A Deep U-Net Approach with ResNet-34 Encoder",
    status: "Abstract submitted — ICIET 2025",
    description:
      "Applied U-Net + ResNet-34 encoder for urban slum segmentation, achieving IoU 0.848 and F1 0.884 on Mumbai imagery.",
    authors:
      "Nichula Wasalathilaka, Mathivathanan Piratheepan, G.M.R.I. Godaliyadda, M.P.B. Ekanayake, H.M.V.R. Herath",
    link: "/resources/iciet2025_abstract.pdf"
  },
  {
    title: "UrbanMamba: Semantic Segmentation of Urban Areas",
    status: "Ongoing 2025",
    description:
      "Adapting ChangeMamba into a lightweight encoder–decoder specialized for dense urban semantic segmentation across Sri Lankan cities.",
    authors: "Nichula Wasalathilaka et al."
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "C/C++", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "MATLAB", level: "Advanced" }
    ]
  },
  {
    title: "Hardware & Embedded",
    items: [
      { name: "Arduino", level: "Advanced" },
      { name: "Raspberry Pi", level: "Advanced" },
      { name: "PCB Design", level: "Intermediate" },
      { name: "Analog Electronics", level: "Advanced" }
    ]
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "PyTorch", level: "Advanced" },
      { name: "Keras", level: "Intermediate" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "Scikit-learn", level: "Advanced" }
    ]
  },
  {
    title: "Remote Sensing & GIS",
    items: [
      { name: "QGIS", level: "Advanced" },
      { name: "Google Earth Engine", level: "Advanced" },
      { name: "Sentinel-2 Data", level: "Intermediate" },
      { name: "Hyperspectral Analysis", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Software",
    items: [
      { name: "Proteus", level: "Advanced" },
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Linux", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" }
    ]
  },
  {
    title: "Web Technologies",
    items: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Web Development", level: "Intermediate" },
      { name: "Responsive Design", level: "Intermediate" }
    ]
  },
  {
    title: "Embedded & Automation",
    items: [
      { name: "ESP32 / ESP-IDF", level: "86%" },
      { name: "Raspberry Pi", level: "84%" },
      { name: "PCB & Sensor Design", level: "76%" },
      { name: "Modbus / MQTT", level: "70%" }
    ]
  },
  {
    title: "Product Systems",
    items: [
      { name: "TypeScript + Next.js", level: "78%" },
      { name: "Node-RED / Grafana", level: "72%" },
      { name: "Git / CI", level: "80%" },
      { name: "Notion / Figma", level: "68%" }
    ]
  }
];

// AIESEC Experience Data
export const aiesecExperience = {
  totalDuration: "1yr 7mo",
  roles: 4,
  functionalAreas: 3,
  majorConferences: 1,
  timeline: [
    {
      role: "Member - IGT B2B and VD",
      period: "Feb 2023",
      description: "Started my AIESEC journey as a member in the Incoming Global Talent B2B and Volunteer Development function, learning about global exchanges and youth development programs.",
      achievements: ["New Member", "IGT B2B", "VD"]
    },
    {
      role: "Organizing Committee Member - NOVA 2023",
      period: "Jun 2023", 
      description: "Served as an organizing committee member for NOVA 2023, gaining valuable experience in event management and large-scale conference organization.",
      achievements: ["Event Management", "NOVA 2023", "Team Work"]
    },
    {
      role: "Team Lead - IGT B2B and VD",
      period: "Aug 2023",
      description: "Promoted to Team Lead position, taking on leadership responsibilities in managing team members, coordinating projects, and driving the growth of incoming global talent and volunteer development initiatives.",
      achievements: ["Leadership", "Team Management", "Project Coordination"]
    },
    {
      role: "Public Relations & Engagement",
      period: "Ongoing",
      description: "Expanded role to include Public Relations and engagement activities, focusing on building AIESEC's brand presence, managing communications, and creating engagement strategies to attract and retain members.",
      achievements: ["Public Relations", "Brand Management", "Engagement"]
    }
  ],
  keyLearnings: [
    {
      title: "Leadership & Team Management",
      description: "Developed strong leadership skills through managing teams in IGT B2B and VD functions, learning to motivate, guide, and coordinate diverse groups towards common goals."
    },
    {
      title: "Cross-Cultural Communication", 
      description: "Enhanced intercultural competencies through interactions with international volunteers and understanding diverse perspectives in global talent exchanges."
    },
    {
      title: "Project Management",
      description: "Gained valuable experience in project coordination, event management, and strategic planning through various AIESEC initiatives and the NOVA 2023 conference."
    },
    {
      title: "Public Relations & Communication",
      description: "Developed expertise in brand management, stakeholder engagement, and creating compelling communication strategies to promote AIESEC's mission and values."
    }
  ]
};

// Experience summary for main page
export const experienceSummary = {
  title: "Experience & Leadership",
  description: "1.7 years of leadership experience with AIESEC, the world's largest youth organization, managing international programs and driving youth development initiatives.",
  highlights: [
    "Team Lead - IGT B2B and Volunteer Development",
    "Public Relations & Engagement Specialist",
    "NOVA 2023 Organizing Committee Member",
    "Cross-cultural leadership with international volunteers"
  ],
  stats: {
    duration: "1yr 7mo",
    roles: "4 Different Roles",
    functions: "3 Functional Areas",
    conferences: "1 Major Conference"
  },
  cta: {
    text: "View Full Experience",
    href: "/experience"
  }
};

export const experienceHighlights = [
  {
    role: "Remote Sensing Researcher",
    organization: "University of Peradeniya · Change Detection Lab",
    period: "2024 – Present",
    summary:
      "Designing spatio-temporal fusion models for resilient semantic change detection across South Asian cities.",
    contributions: ["Precision ST fusion blocks", "Mamba-inspired decoder", "Benchmarking on Sri Lankan datasets"]
  },
  {
    role: "Lead Engineer · Smart Greenhouse",
    organization: "Faculty of Engineering · Capstone",
    period: "2023 – 2024",
    summary:
      "Architected a closed-loop agritech stack with custom PCB, distributed sensors, and a realtime control cloud.",
    contributions: ["Edge ML disease detection", "Cloud dashboard", "LoRa telemetry"]
  },
  {
    role: "AI Engineer (Freelance)",
    organization: "Urban Analytics Collective",
    period: "2022 – 2023",
    summary:
      "Delivered geospatial deep-learning prototypes for slum mapping and infrastructure monitoring programs.",
    contributions: ["U-Net + ResNet-34 training", "Model compression", "Client-ready reports"]
  }
];

export const awards = [
  {
    title: "Best Remote Sensing Concept",
    issuer: "IEEE Student Research Day",
    year: "2024",
    description: "Recognized for an interpretable change-detection pipeline built on Mamba-style encoders."
  },
  {
    title: "Innovation in Agriculture",
    issuer: "AgriTech Challenge Sri Lanka",
    year: "2024",
    description: "Awarded for the autonomous greenhouse monitoring system with predictive irrigation loops."
  },
  {
    title: "Dean's List Honors",
    issuer: "University of Peradeniya",
    year: "2022 – 2024",
    description: "Maintained a GPA of 3.85/4.00 across advanced control, signal processing, and electronics."
  }
];

export const experienceTimeline = [
  {
    role: "Member — Incoming Global Talent B2B & Volunteer Development",
    period: "Feb 2023",
    summary:
      "Joined AIESEC and learned the foundations of global exchange programs while supporting volunteer onboarding.",
    tags: ["IGT B2B", "Volunteer Development"]
  },
  {
    role: "Organizing Committee Member — NOVA 2023",
    period: "Jun 2023",
    summary:
      "Helped deliver NOVA 2023, coordinating logistics and programming for a flagship AIESEC conference.",
    tags: ["Event operations", "Conference"]
  },
  {
    role: "Team Lead — IGT B2B & Volunteer Development",
    period: "Aug 2023",
    summary:
      "Led a cross-functional team, managing pipelines, mentoring members, and driving exchange growth.",
    tags: ["Leadership", "Team management"]
  },
  {
    role: "Public Relations & Engagement Lead",
    period: "2024 – Present",
    summary:
      "Own PR and engagement programs that build the chapter brand and keep members active.",
    tags: ["PR", "Engagement"]
  }
];



export const aiesecGlobalInfo = {
  heroSubtitle: "Leadership • Global Engagement • Youth Development",
  values: ["Leadership", "Cross-Cultural", "Peace & Fulfillment", "Integrity"],
  about: [
    "AIESEC is the world's largest non-profit youth organization, present in over 120 countries and territories. Founded in 1948, AIESEC empowers young people to develop leadership skills and make a positive impact on society through cross-cultural global exchanges and volunteer experiences.",
    "AIESEC's mission is to develop the leadership potential of youth through practical experiences in challenging environments, and to provide quality development experiences for students and recent graduates. With a network of young leaders driving positive change worldwide, AIESEC creates opportunities for young people to explore and develop their potential so they can have a positive impact on society."
  ],
  globalStats: [
    { label: "Countries", value: "120+" },
    { label: "Members", value: "40K+" },
    { label: "Years of Impact", value: "75+" },
    { label: "Alumni", value: "1M+" }
  ],
  impactStats: [
    { label: "Total Experience", value: "1yr 7mo" },
    { label: "Different Roles", value: "4" },
    { label: "Functional Areas", value: "3" },
    { label: "Major Conference", value: "1" }
  ],
  memories: [
    {
      title: "City Tour with International Interns",
      description: "Exploring the vibrant streets of Colombo while bonding with interns from Tunisia.",
      image: "/images/colombo.jpg"
    },
    {
      title: "Supporting Our Intern at the Workplace",
      description:
        "Visited our intern at their volunteer placement site, observing their meaningful contribution to a local community project and sharing in their progress.",
      image: "/images/kandy.jpg"
    },
    {
      title: "Welcoming Our Intern from Egypt",
      description:
        "Greeted our new intern at the airport with warmth and excitement — the beginning of a journey of cultural learning and lasting friendship.",
      image: "/images/kandy2.jpg"
    },
    {
      title: "City Tour with International Interns",
      description: "Exploring the vibrant streets of Colombo while bonding with interns from Tunisia.",
      image: "/images/colombo2.jpg"
    },
    {
      title: "At NLDS 2023 Award Ceremony",
      description:
        "A proud moment receiving recognition for our contributions at the National Leadership Development Seminar — a testament to dedication, teamwork, and growth.",
      image: "/images/nlds.jpg"
    },
    {
      title: "Opening Ceremony of NLDS 2023",
      description:
        "Representing AIESEC in University of Peradeniya at the National Leadership Development Seminar — a gathering of future leaders from across Sri Lanka.",
      image: "/images/nlds2.jpg"
    }
  ],
  learnings: [
    {
      title: "Leadership & Team Management",
      description:
        "Developed strong leadership skills through managing teams in IGT B2B and VD functions, learning to motivate, guide, and coordinate diverse groups towards common goals."
    },
    {
      title: "Cross-Cultural Communication",
      description:
        "Enhanced intercultural competencies through interactions with international volunteers and understanding diverse perspectives in global talent exchanges."
    },
    {
      title: "Project Management",
      description:
        "Gained valuable experience in project coordination, event management, and strategic planning through various AIESEC initiatives and the NOVA 2023 conference."
    },
    {
      title: "Public Relations & Communication",
      description:
        "Developed expertise in brand management, stakeholder engagement, and creating compelling communication strategies to promote AIESEC's mission and values."
    },
    {
      title: "Personal Development",
      description:
        "Experienced significant personal growth through challenging environments, learning to adapt, innovate, and maintain integrity while pursuing peace and fulfillment."
    },
    {
      title: "Partnership Development",
      description:
        "Built strong networking and partnership development skills through B2B interactions and stakeholder management in various AIESEC functions."
    }
  ],
  reflection: {
    text:
      "AIESEC challenged me to lead with empathy, work across cultures, and stay grounded in purpose. It taught me that leadership is service—and that real impact happens when diverse teams rally around a shared vision.",
    author: "Nichula Sathmith Wasalathilaka"
  }
};

// Awards and Achievements


// Contact Information
export const contactInfo = {
  email: "nichula2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/nichula-wasalathilaka/",
  github: "https://github.com/nichula01",
  location: "Kandy, Sri Lanka",
  availability: "Available for 2025 research collaborations and internships",
  formAction: "https://formspree.io/f/xanyqybv"
};

export const resumeResources = [
  { label: "Curriculum Vitae", href: "/resources/Nichula_Wasalathilaka_CV.pdf" },
  { label: "ICIET 2025 Abstract", href: "/resources/iciet2025_abstract.pdf" }
];

export const portfolioHighlights = [
  {
    title: "Smart Greenhouse Platform",
    description: "Hardware + software walkthrough, dashboards, and deployment details for the fully automated greenhouse build.",
    href: "/greenhouse",
    meta: "IoT · Edge AI · Web dashboard"
  },
  {
    title: "Slum Detection Research Notebook",
    description: "In-depth look at the U-Net + ResNet-34 pipeline, dataset prep, and evaluation for Mumbai imagery.",
    href: "/slum",
    meta: "Remote sensing · Computer vision"
  },
  {
    title: "Semester Hardware Gallery",
    description: "Photo log and breakdowns of analog line-following robots, piezo wearables, and lab prototypes.",
    href: "/semester-projects",
    meta: "Analog electronics · Embedded"
  },
  {
    title: "AIESEC Experience",
    description: "Full leadership journey, impact stats, and memories captured during 1.5 years of volunteer work.",
    href: "/exp",
    meta: "Leadership · Community"
  }
];
