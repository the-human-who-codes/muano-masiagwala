import type { ExperienceType } from "@/types"

export const experienceData: ExperienceType[] = [
  {
    id: "aws",
    role: "Software Engineer, EC2",
    company: "Amazon Web Services",
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
    role: "Cloud Apprentice",
    company: "Afrika Tikkun",
    start: "Mar 2025",
    end: "Jun 2026",
    summary: "Apprenticeship focused on cloud fundamentals after completing my Computer Science degree.",
    highlights: [
      "Learned core cloud concepts, Azure services, security, and governance",
      "Earned the Microsoft Azure Fundamentals (AZ-900) certification",
    ],
    technologies: ["Azure", "Cloud Fundamentals"],
  },
]
