import type { ProjectType } from "@/types"

const github = (repo: string) => `https://github.com/the-human-who-codes/${repo}`

export const softwareProjects: ProjectType[] = [
  {
    id: "sudoku-arena",
    title: "Sudoku Arena",
    description:
      "A C++20 Sudoku engine compiled to WebAssembly. Watch four algorithms, from human-style logic to Dancing Links, solve step by step, then play graded, seeded puzzles.",
    initials: "SA",
    technologies: ["C++", "WebAssembly", "TypeScript", "Vite", "Firebase"],
    github: github("sudoku-arena"),
    demo: "https://sudoku-arena-app.web.app",
    image: "/projects/sudoku-arena.jpg",
  },
  {
    id: "lively-campus",
    title: "Wits Lively Campus",
    description:
      "Events platform helping Wits students discover, create, and manage campus activities, with real-time notifications, file uploads, a Swagger-documented REST API, and CI with code coverage.",
    initials: "LC",
    technologies: ["React", "Firebase Functions", "Firestore", "Swagger", "GitHub Actions"],
    github: github("lively-campus"),
    demo: "https://witslivelycampus.web.app/",
    image: "/projects/lively-campus.jpg",
  },
  {
    id: "curecloud",
    title: "CureCloud – Health Management System",
    description:
      "Cloud-based system replacing paper records in public hospitals, with specialist booking, centralised medical records, and groundwork for AI-driven insights.",
    initials: "CC",
    technologies: ["React", "Express.js", "Firebase", "Firestore"],
    github: github("CureCloud"),
    demo: "https://curecloud1.web.app/",
    image: "/projects/curecloud.jpg",
  },
  {
    id: "algorithm-quest",
    title: "Algorithm Quest",
    description:
      "Gamified learning platform for mastering algorithms and data structures through interactive, step-by-step visualisations.",
    initials: "AQ",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: github("algorithm-quest"),
    demo: "https://algorithm-quest.vercel.app",
    image: "/projects/algorithm-quest.jpg",
  },
  {
    id: "eduquest",
    title: "EduQuest – Gamified LMS",
    description:
      "Learning management system combining Duolingo-style gamification with AI tools, achievements, courses, and classroom management.",
    initials: "EQ",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: github("gamified-lms"),
  },
  {
    id: "funding-manager",
    title: "Funding Request Manager",
    description:
      "Portal where Wits students and organisations apply for bursaries and sponsorships, with separate applicant and funder workflows.",
    initials: "FM",
    technologies: ["JavaScript", "Firebase", "Jest", "Azure Static Web Apps"],
    github: github("Robinhood"),
  },
  {
    id: "options-trading-bot",
    title: "Options Trading Bot",
    description:
      "Machine learning pipeline that engineers moving-average features from options data and trains an LSTM model to predict returns.",
    initials: "OT",
    technologies: ["Python", "TensorFlow", "Keras", "Pandas"],
    github: github("options_trading_bot"),
  },
]

export const allProjects: ProjectType[] = [...softwareProjects]
