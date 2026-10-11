import type { SiteConfig } from "@/types"
import { authorData } from "@/data/author"
import { socialLinks } from "@/data/social"
import { aboutContent } from "@/data/about"
import { allProjects } from "@/data/projects"
import { allSkills } from "@/data/skills"
import { educationData } from "@/data/education"
import { certificationsData } from "@/data/certifications"
import { mainNavigation } from "@/data/navigation"

export const siteConfig: SiteConfig = {
  name: "MUANO.DEV",
  url: "https://muano-masiagwala.vercel.app",
  author: authorData,
  description: `Personal portfolio of ${authorData.name}, a Software Engineer at AWS building patching automation and fleet management for EC2 infrastructure.`,
  copyright: `${authorData.name}. All rights reserved.`,
  mainNav: mainNavigation,
  socialLinks: socialLinks,
  about: aboutContent,
  projects: allProjects,
  skills: allSkills,
  education: educationData,
  certifications: certificationsData,
}
