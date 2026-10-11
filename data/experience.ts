import type { ExperienceType } from "@/types"

// Newest first; work and education share one timeline
export const experienceData: ExperienceType[] = [
  {
    id: "aws",
    type: "work",
    role: "Software Engineer, EC2",
    organization: "Amazon Web Services",
    start: "Jun 2026",
    end: "Present",
    summary:
      "Building the patching automation for EC2 infrastructure, on a team that also owns fleet management inside AWS.",
    highlights: [
      "Build the patching automation that keeps EC2's underlying infrastructure up to date",
      "Support internal fleet management, scaling and operating fleets through extensive automation",
      "Own products end to end, from conception of the idea through to production",
    ],
    technologies: ["AWS", "EC2", "Automation", "Fleet Management"],
  },
  {
    id: "afrika-tikkun",
    type: "work",
    role: "Cloud Apprentice",
    organization: "Afrika Tikkun",
    start: "Mar 2025",
    end: "Jun 2026",
    summary: "Apprenticeship focused on cloud fundamentals after completing my Computer Science degree.",
    highlights: ["Learned core cloud concepts, Azure services, security, and governance"],
    technologies: ["Azure", "Cloud Fundamentals"],
    credential: {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "May 2025",
      link: "https://learn.microsoft.com/en-gb/users/MuanoMasiagwala-1584/credentials/DA175BFDEBB2680B",
    },
  },
  {
    id: "wits",
    type: "education",
    role: "BSc Computer Science",
    organization: "University of the Witwatersrand",
    start: "2022",
    end: "2024",
    summary: "Foundation in software engineering, algorithms, data structures, and artificial intelligence.",
    highlights: [
      "Built the top-performing Sudoku Solver in the class project",
      "Developed the smartest Snake AI Agent, outperforming peers in tournament-based testing",
    ],
    technologies: ["Algorithms", "Data Structures", "AI", "Software Engineering"],
  },
]
