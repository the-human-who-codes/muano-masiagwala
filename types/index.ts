export interface ProjectType {
  id: string
  title: string
  description: string
  initials: string
  technologies: string[]
  github?: string
  demo?: string
}

export interface ExperienceType {
  id: string
  role: string
  company: string
  start: string
  end: string
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface EducationType {
  id: string
  title: string
  institution: string
  date: string
  description?: string
  link?: string
  linkLabel?: string
}

export interface SkillType {
  name: string
  icon: string
  category: "Languages" | "Frameworks" | "Cloud & DevOps" | "Data & ML" | "Tools"
}

export interface NavItem {
  title: string
  href: string
}

export interface SiteConfig {
  name: string
  url: string
  author: {
    name: string
    title: string
    email: string
  }
  description: string
  copyright: string
  mainNav: NavItem[]
  socialLinks: {
    email?: string
    phone?: string
    github?: string
    linkedin?: string
    twitter?: string
    [key: string]: string | undefined
  }
  about: string[]
  experience: ExperienceType[]
  projects: ProjectType[]
  skills: SkillType[]
  education: EducationType[]
  certifications: EducationType[]
}
