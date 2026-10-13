/**
 * Single source of truth for all portfolio content.
 * Update the values in this file to customize the site — no component
 * edits should ever be required for a content-only change.
 */

import type {
  Certification,
  Education,
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  SkillGroup,
  SocialLink,
  Testimonial,
} from "@/types";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Personal info                                                     */
/* ------------------------------------------------------------------ */
export const personalInfo: PersonalInfo = {
  name: "Osama Ejaz",
  firstName: "Osama",
  title: "Manager IT (HO) | Senior React Native & Frontend Developer",
  // Used by the animated typing effect in the hero
  typingRoles: [
    "Senior React Native Developer",
    "React & Next.js Engineer",
    "Full-Stack JavaScript Developer",
    "Manager IT (HO) @ EFU General Insurance",
    "Mobile UX & Performance Specialist",
  ],
  location: "Karachi, Sindh, Pakistan",
  phone: "+92-304-234-4502",
  email: "osamaejaz89@gmail.com",
  linkedin: "https://www.linkedin.com/in/osamaejaz89/",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/profile.jpg",
  summary:
    "Dynamic React Native Developer with over 5 years of experience delivering high-performance, cross-platform mobile applications for Android and iOS. Proficient in full-stack development, leveraging React Native, Node.js, MongoDB, and Redux to build scalable, user-focused solutions. Skilled in agile methodologies, CI/CD pipelines, API integrations, and UI/UX optimization. Adept at collaborating with cross-functional teams to drive innovation, enhance user experience, and exceed client expectations while staying updated with React Native trends and best practices.",
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Apps Shipped", value: "15+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Platforms", value: "iOS · Android · Web" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                        */
/* ------------------------------------------------------------------ */
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Social / contact links                                            */
/* ------------------------------------------------------------------ */
export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/osamaejaz89/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    // Placeholder — update once a public GitHub handle is available
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:osamaejaz89@gmail.com",
    icon: Mail,
  },
  {
    label: "Twitter",
    href: "https://x.com/osamaejaz89",
    icon: Twitter,
  },
];

export const contactCards = [
  {
    label: "Email",
    value: "osamaejaz89@gmail.com",
    href: "mailto:osamaejaz89@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+92-304-234-4502",
    href: "tel:+923042344502",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Karachi, Sindh, Pakistan",
    href: "https://www.google.com/maps/place/Karachi",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/osamaejaz89",
    href: "https://www.linkedin.com/in/osamaejaz89/",
    icon: Linkedin,
  },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                        */
/* ------------------------------------------------------------------ */
export const experiences: Experience[] = [
  {
    role: "Manager IT (HO)",
    company: "EFU General Insurance",
    location: "Karachi, Pakistan",
    period: "March 2026 – Present",
    current: true,
    highlights: [
      "Leading frontend development and architecture using React, Next.js, and React Native for high-performance web and mobile applications.",
      "Managing the frontend team and delivering scalable, intuitive user interfaces for EFU’s digital insurance platforms.",
      "Collaborating with cross-functional IT teams to optimize UI/UX, integrate APIs, and ensure seamless user experiences across platforms.",
    ],
    stack: ["React", "Next.js", "React Native", "TypeScript", "REST APIs"],
  },
  {
    role: "Senior Mobile Application Developer – React Native",
    company: "Salaam Takaful Limited",
    location: "Karachi, Pakistan",
    period: "January 2025 – March 2026",
    highlights: [
      "Led development of high-performance React Native mobile applications and React/Next.js web dashboards, ensuring seamless functionality and intuitive user interfaces.",
      "Optimized Node.js and MongoDB backend, enhancing API performance by 25% and implementing security protocols for robust, scalable systems.",
      "Performed UI/UX refinements and performance tuning for Salaam Takaful’s digital platforms, improving user retention by 15%.",
    ],
    projects: [
      "Salaam Takaful App (Android, iOS)",
      "Salaam Life & Savings (Android, iOS)",
    ],
    stack: [
      "React Native",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
    ],
  },
  {
    role: "Mobile Application Developer – React Native",
    company: "Salaam Takaful Limited",
    location: "Karachi, Pakistan",
    period: "January 2023 – December 2024",
    highlights: [
      "Developed production-grade React Native apps with a modular architecture, reducing development cycles by 20% through reusable component libraries.",
      "Integrated authentication, push notifications, and analytics (Firebase), aligning mobile and web platforms for cohesive user experiences.",
      "Conducted code reviews and performance testing, ensuring 100% compliance with production deployment standards.",
    ],
    stack: ["React Native", "Firebase", "Redux", "TypeScript", "CI/CD"],
  },
  {
    role: "Software Engineer – React Native",
    company: "Inaequo Solutions",
    location: "Karachi, Pakistan",
    period: "May 2021 – December 2022",
    highlights: [
      "Engineered cross-platform React Native apps for clients like Dastgyr and Qeraty, integrating social logins, HyperPay payments, and APIs (Cloudinary, Firebase, Maps).",
      "Implemented Redux (Thunk, Saga, Toolkit) for scalable state management, improving app performance by 15%.",
      "Managed localization and production deployments, achieving 95% crash-free user sessions.",
    ],
    projects: [
      "Dastgyr (Android)",
      "Upwork Client (Android)",
      "Estenarh — IOMechs (Android, iOS)",
      "TIMECHECK Enterprise — Agile Data Systems (iOS, Android)",
      "FrontDeskID ESS — Agile Data Systems (iOS, Android)",
      "FrontDeskID VSS — Agile Data Systems (iOS)",
    ],
    stack: [
      "React Native",
      "Redux Saga",
      "HyperPay",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    role: "Trainee – React Native",
    company: "Compass DX (Private) Limited",
    location: "Karachi, Pakistan",
    period: "February 2021 – May 2021",
    highlights: [
      "Developed features for Eatachi and the Committee App (MCB Arif Habib) using React Native, including Bluetooth POS printing and Atomic Design Model components.",
    ],
    projects: ["Committee App – Android"],
    stack: ["React Native", "Atomic Design", "Bluetooth POS"],
  },
  {
    role: "Teaching Assistant – Software Engineering",
    company: "National University of Computer and Emerging Sciences",
    location: "Karachi, Pakistan",
    period: "February 2020 – July 2020",
    highlights: [
      "Assisted in evaluation, grading, and mentoring of student projects and coursework.",
    ],
    stack: ["Software Engineering", "Mentoring"],
  },
];

/* ------------------------------------------------------------------ */
/*  Freelance / featured projects                                     */
/* ------------------------------------------------------------------ */
export const projects: Project[] = [
  {
    title: "Expert Ads",
    description:
      "Cross-platform classifieds marketplace — Find it. Sell it. Browse motors, property, agriculture, and services with sponsored listings, brand discovery, messaging, and a streamlined sell flow.",
    tags: ["React Native", "Marketplace", "Listings", "Messaging", "Maps"],
    platforms: ["iOS", "Android"],
    highlight: "Classifieds · Sell & Discover",
    category: "Marketplace",
    accent: "rn",
    image: "/projects/expert-ads-cover.jpeg",
  },
  {
    title: "SafeLabel",
    description:
      "Food-label scanning app that surfaces nutrition scores, macros, allergen alerts, pantry tracking, healthier alternatives, and weekly calorie analytics from a single product scan.",
    tags: ["React Native", "Camera / OCR", "Nutrition", "Analytics", "Auth"],
    platforms: ["iOS", "Android"],
    highlight: "Scan · Nutrition · Safety",
    category: "HealthTech",
    accent: "accent",
    image: "/projects/safelabel-cover.jpeg",
  },
  {
    title: "Pivot – Peace of Mind",
    description:
      "Guided emotional check-in and advice app — map how you feel, drill into life areas (relationships, work, health), get expert text + audio guidance, and share with a supportive community.",
    tags: ["Expo", "React Native", "Audio", "IAP", "Community"],
    platforms: ["iOS", "Android"],
    highlight: "Wellness · Advice · Audio",
    category: "Wellness",
    accent: "rn",
    image: "/projects/pivot-cover.jpg",
    url: "https://www.pivot-peaceofmind.com",
  },
  {
    title: "TIMECHECK Enterprise",
    description:
      "Enterprise attendance app for Agile Data Systems — dashboard for work hours, leaves, and absents; Movements with geo-tagged clock-in/out; Permission & Leave requests with manager approvals.",
    tags: ["React Native", "Geolocation", "QR Scan", "Attendance", "Approvals"],
    platforms: ["iOS", "Android"],
    highlight: "Attendance · Geo Clock-in",
    category: "Enterprise HR",
    accent: "accent",
    client: "Agile Data Systems (ADS)",
    image: "/projects/timecheck-cover.png",
    url: "https://apps.apple.com/hu/app/timecheck-enterprise/id1539604742",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/hu/app/timecheck-enterprise/id1539604742",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.agile.timecheck&hl=en&gl=US",
      },
    ],
  },
  {
    title: "FrontDeskID VSS",
    description:
      "Visitor Management System for ADS — multi-channel visitor flow (registration, OTP, QR, bilingual EN/AR) configurable to each organization’s policy.",
    tags: ["React Native", "OTP", "QR Code", "i18n", "Visitor Flow"],
    platforms: ["iOS"],
    highlight: "Visitor · Multi-channel",
    category: "Enterprise",
    accent: "rn",
    client: "Agile Data Systems (ADS)",
    image: "/projects/frontdesk-vss-cover.png",
    url: "https://apps.apple.com/hu/app/frontdeskid-vss/id1571085884",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/hu/app/frontdeskid-vss/id1571085884",
      },
    ],
  },
  {
    title: "FrontDeskID ESS",
    description:
      "Employee Self-Service for ADS — request and manage meetings, view schedules & history, approve or revoke visits, and check in with QR codes.",
    tags: ["React Native", "Meetings", "QR Code", "Filters", "Auth"],
    platforms: ["iOS", "Android"],
    highlight: "Meetings · Self-Service",
    category: "Enterprise",
    accent: "accent",
    client: "Agile Data Systems (ADS)",
    image: "/projects/frontdesk-ess-cover.png",
    url: "https://apps.apple.com/hu/app/frontdeskid-ess/id1541127443",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/hu/app/frontdeskid-ess/id1541127443",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.frontdeskid&hl=en&gl=US",
      },
    ],
  },
  {
    title: "Estenarh",
    description:
      "Arabic RTL counseling platform for IOMechs — book licensed therapists for psychological, social, and family support via encrypted chat, voice, or video, with reviews, ratings, and flexible session pricing.",
    tags: ["React Native", "RTL / Arabic", "Chat", "Voice / Video", "Payments"],
    platforms: ["iOS", "Android"],
    highlight: "Counseling · Chat · Calls",
    category: "HealthTech",
    accent: "rn",
    client: "IOMechs",
    image: "/projects/estenarh-cover.png",
    url: "https://apps.apple.com/sa/app/estenarh/id1529172019",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/sa/app/estenarh/id1529172019",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.estenarh.app&hl=en&gl=US",
      },
    ],
  },
  {
    title: "Cashless OPD",
    description:
      "Pakistani cashless outpatient platform — dual Customer/Vendor login, family health cards, OPD benefit limits (PKR), health monitoring (BP, sugar, steps), and transaction history for consultations, labs, and pharmacy.",
    tags: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Health Monitor",
      "OPD Benefits",
    ],
    platforms: ["iOS", "Android", "Web"],
    highlight: "Easy · Quick · Reliable",
    category: "HealthTech",
    accent: "accent",
    image: "/projects/cashless-opd-cover.png",
    url: "https://www.figma.com/make/sWpOay1qAGuqLfLHiFzDdH/Cashless-OPD-App",
    links: [
      {
        label: "Figma Make",
        href: "https://www.figma.com/make/sWpOay1qAGuqLfLHiFzDdH/Cashless-OPD-App",
      },
    ],
  },
  {
    title: "Hojaiga Platform",
    description:
      "Marketplace ecosystem with role-based dashboards, bookings, and HyperPay payment integrations.",
    tags: ["React Native", "Next.js", "HyperPay", "Node.js"],
    platforms: ["Web", "iOS", "Android"],
    highlight: "Marketplace · Payments",
    category: "Marketplace",
    accent: "accent",
  },
  {
    title: "AGORA Audio / Video / Chat",
    description:
      "Real-time audio, video, and chat communication system integrated into React Native for enterprise clients.",
    tags: ["React Native", "Agora SDK", "WebRTC"],
    platforms: ["iOS", "Android"],
    highlight: "Real-time Communication",
    category: "Real-time",
    accent: "rn",
  },
  {
    title: "Hyravel",
    description:
      "Automobile renting platform for two- and four-wheel rides — self-drive rentals, customized city tours, and event bookings (parties, weddings, group rides), blending traditional Rent-A-Car with ride-sharing ideas.",
    tags: ["Web", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    platforms: ["Web"],
    highlight: "Vehicle Rental · City Tours",
    category: "Marketplace",
    accent: "accent",
    image: "/projects/hyravel-cover.png",
  },
  {
    title: "University Management System",
    description:
      "Full-stack university management web app covering academic workflows with PHP and MySQL.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    platforms: ["Web"],
    highlight: "Academic · Full-Stack",
    category: "Education",
    accent: "rn",
  },
  {
    title: "Real Estate Management UI",
    description:
      "Front-end design for a real estate management system built with HTML, CSS, and Bootstrap.",
    tags: ["HTML", "CSS", "Bootstrap", "UI Design"],
    platforms: ["Web"],
    highlight: "UI · Real Estate",
    category: "Frontend",
    accent: "accent",
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                            */
/* ------------------------------------------------------------------ */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript (ES6)", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 70 },
      { name: "Java", level: 68 },
      { name: "C / C++", level: 65 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React Native", level: 95 },
      { name: "React Native Expo", level: 90 },
      { name: "React.js", level: 94 },
      { name: "Next.js", level: 90 },
      { name: "Redux (Toolkit · Saga · Thunk)", level: 92 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "GraphQL / Apollo Client", level: 78 },
      { name: "React Navigation", level: 92 },
      { name: "React Native Maps / Geolocation", level: 85 },
      { name: "HyperPay Payments", level: 82 },
      { name: "Axios / REST APIs", level: 94 },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 82 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Tools & Version Control",
    items: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 94 },
      { name: "Bitbucket", level: 88 },
      { name: "GitLab", level: 85 },
      { name: "Android Studio", level: 88 },
      { name: "Xcode", level: 85 },
      { name: "VS Code", level: 98 },
      { name: "Jira", level: 85 },
    ],
  },
];

export const softSkills: string[] = [
  "Communication",
  "Problem-Solving",
  "Research",
  "Time Management",
  "Teamwork",
  "Customer Service",
  "Integrity",
  "Continuous Learning",
];

/* ------------------------------------------------------------------ */
/*  Education                                                         */
/* ------------------------------------------------------------------ */
export const education: Education[] = [
  {
    degree: "BS in Computer Science",
    institution: "National University of Computer and Emerging Sciences",
    location: "Karachi, Pakistan",
    period: "August 2016 – February 2021",
  },
  {
    degree: "Higher School Certificate — Pre-Engineering",
    institution: "Government Degree College, Malir Cantt",
    location: "Karachi, Pakistan",
    period: "2014 – 2016",
  },
  {
    degree: "Secondary School Certificate — Science",
    institution: "Fauji Foundation Model School Campus II",
    location: "Karachi, Pakistan",
    period: "2007 – 2014",
  },
];

/* ------------------------------------------------------------------ */
/*  Certifications                                                    */
/* ------------------------------------------------------------------ */
export const certifications: Certification[] = [
  {
    name: "Understanding TypeScript",
    issuer: "Udemy · Maximilian Schwarzmüller",
  },
  {
    name: "Programming for Everybody (Getting Started with Python)",
    issuer: "Coursera",
  },
  {
    name: "React Beginner’s Bootcamp 2020",
    issuer: "Udemy",
  },
  {
    name: "HTML, CSS, JavaScript – Certification Course for Beginners",
    issuer: "Udemy",
  },
  {
    name: "Finalist — Speed Programming Competition",
    issuer: "NED University",
  },
  {
    name: "ZAB-e-FEST Participant",
    issuer: "SZABIST",
  },
  {
    name: "Coders Cup Participant",
    issuer: "FAST NUCES",
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials (placeholders — replace with real ones any time)     */
/* ------------------------------------------------------------------ */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Osama consistently delivers polished, production-grade mobile experiences. His attention to performance and UX is second to none.",
    author: "Engineering Lead",
    role: "Salaam Takaful Limited",
  },
  {
    quote:
      "A dependable senior engineer who can architect, build, and mentor. He turned around our React Native codebase and shipped faster than anyone expected.",
    author: "Product Manager",
    role: "Inaequo Solutions",
  },
  {
    quote:
      "Great communicator and problem-solver. Osama ships clean, testable code and is genuinely invested in the product.",
    author: "Freelance Client",
    role: "Expert Ads",
  },
];
