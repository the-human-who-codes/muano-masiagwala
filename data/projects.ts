import type { ProjectType } from "@/types"

// Software Development Projects
export const softwareProjects: ProjectType[] = [
  {
    id: "curecloud",
    title: "CureCloud – Health Management System",
    description:
      "Designed a digital system to replace paper records in public hospitals. Implemented specialist booking, centralized medical data, and laid groundwork for AI integration.",
    initials: "CC",
    technologies: ["React", "Firebase", "Firestore", "Express.js"],
    github: "https://github.com/the-human-who-codes",
    demo: "#",
  },
  {
    id: "events-activities",
    title: "Events & Activities App – University Platform",
    description:
      "Developed an app for Wits University students to discover campus events. Built notification systems (bell icon with unread count), file uploads, and event engagement features.",
    initials: "EA",
    technologies: ["React", "Firebase", "Node.js"],
    github: "https://github.com/the-human-who-codes",
    demo: "#",
  },
  {
    id: "funding-manager",
    title: "Funding Request Manager",
    description:
      "Created a portal for students to apply for funding and sponsorships. Implemented UI and backend logic to handle applications and manage student profiles.",
    initials: "FM",
    technologies: ["Vanilla JS", "HTML", "CSS"],
    github: "https://github.com/the-human-who-codes",
    demo: "#",
  },
]

// Combined projects array (only software projects now)
export const allProjects: ProjectType[] = [...softwareProjects]
