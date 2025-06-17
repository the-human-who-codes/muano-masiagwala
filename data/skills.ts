// Programming Languages
const languages: string[] = ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]

// Frontend Technologies
const frontendSkills: string[] = ["React", "HTML5", "CSS", "Tailwind CSS"]

// Backend Technologies
const backendSkills: string[] = ["Node.js", "Express.js", "Firebase Functions", "REST APIs"]

// Database Technologies
const databaseSkills: string[] = ["Firestore", "MySQL", "Microsoft SQL Server"]

// Tools & DevOps
const toolsSkills: string[] = ["Git", "GitHub Actions", "CI/CD", "Agile", "Swagger", "VS Code"]

// Cloud & Infrastructure
const cloudSkills: string[] = ["Firebase", "Azure", "Cloud Functions", "Serverless"]

// Software Development Skills (all combined)
export const softwareSkills: string[] = [
  ...languages,
  ...frontendSkills,
  ...backendSkills,
  ...databaseSkills,
  ...toolsSkills,
  ...cloudSkills,
]

// Only software skills now
export const allSkills: string[] = [...softwareSkills]
