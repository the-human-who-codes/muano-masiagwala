import type { SkillType } from "@/types"

// Logos live in /public/tech (from the devicon project)
const skill = (name: string, icon: string, category: SkillType["category"]): SkillType => ({
  name,
  icon: `/tech/${icon}.svg`,
  category,
})

const languages: SkillType[] = [
  skill("Java", "java", "Languages"),
  skill("TypeScript", "typescript", "Languages"),
  skill("JavaScript", "javascript", "Languages"),
  skill("Python", "python", "Languages"),
  skill("C++", "cplusplus", "Languages"),
]

const frameworks: SkillType[] = [
  skill("React", "react", "Frameworks"),
  skill("Next.js", "nextjs", "Frameworks"),
  skill("Node.js", "nodejs", "Frameworks"),
  skill("Express.js", "express", "Frameworks"),
  skill("Tailwind CSS", "tailwindcss", "Frameworks"),
  skill("HTML5", "html5", "Frameworks"),
  skill("CSS3", "css3", "Frameworks"),
]

const cloud: SkillType[] = [
  skill("AWS", "amazonwebservices", "Cloud & DevOps"),
  skill("Azure", "azure", "Cloud & DevOps"),
  skill("Firebase", "firebase", "Cloud & DevOps"),
  skill("Linux", "linux", "Cloud & DevOps"),
  skill("Git", "git", "Cloud & DevOps"),
  skill("GitHub Actions", "githubactions", "Cloud & DevOps"),
]

const data: SkillType[] = [
  skill("PostgreSQL", "postgresql", "Data & ML"),
  skill("MySQL", "mysql", "Data & ML"),
  skill("SQL Server", "microsoftsqlserver", "Data & ML"),
  skill("MongoDB", "mongodb", "Data & ML"),
  skill("TensorFlow", "tensorflow", "Data & ML"),
  skill("Pandas", "pandas", "Data & ML"),
  skill("NumPy", "numpy", "Data & ML"),
  skill("scikit-learn", "scikitlearn", "Data & ML"),
]

const tools: SkillType[] = [
  skill("Postman", "postman", "Tools"),
  skill("Swagger", "swagger", "Tools"),
  skill("VS Code", "vscode", "Tools"),
]

// Each row scrolls independently in the Skills section
export const skillRows: SkillType[][] = [
  [...languages, ...frameworks],
  [...cloud, ...data, ...tools],
]

export const allSkills: SkillType[] = skillRows.flat()
