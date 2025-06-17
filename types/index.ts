export interface ProjectType {
  id: string
  title: string
  description: string
  initials: string
  technologies: string[]
  github?: string
  demo?: string
}

export interface EducationType {
  id: string
  title: string
  institution: string
  date: string
  description?: string
  link?: string
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
  projects: ProjectType[]
  skills: string[]
  education: EducationType[]
  certifications: EducationType[]
}
