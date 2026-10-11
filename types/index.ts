export interface ProjectType {
  id: string
  title: string
  description: string
  initials: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
}

export interface CredentialType {
  title: string
  issuer: string
  date: string
  link: string
}

export interface ExperienceType {
  id: string
  type: "work" | "education"
  role: string
  organization: string
  start: string
  end: string
  summary: string
  highlights: string[]
  technologies: string[]
  credential?: CredentialType
}

export interface HighlightType {
  title: string
  description: string
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
    location: string
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
}
