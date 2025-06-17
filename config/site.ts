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
  url: "https://muanomasiagwala-d678d.web.app",
  author: authorData,
  description: `Personal portfolio of ${authorData.name}, a Computer Science graduate and full-stack developer specializing in web development, data analytics, and cloud-native applications.`,
  copyright: `${authorData.name}. All rights reserved.`,
  mainNav: mainNavigation,
  socialLinks: socialLinks,
  about: aboutContent,
  projects: allProjects,
  skills: allSkills,
  education: educationData,
  certifications: certificationsData,
}
