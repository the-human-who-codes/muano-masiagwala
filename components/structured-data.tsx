"use client"

import { siteConfig } from "@/config/site"
import { useEffect, useState } from "react"

export default function StructuredData() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Filter out undefined social links
  const socialLinks = [
    siteConfig.socialLinks.github,
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.twitter
      ? `https://twitter.com/${siteConfig.socialLinks.twitter.replace("@", "")}`
      : undefined,
  ].filter(Boolean) as string[]

  // Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    jobTitle: siteConfig.author.title,
    email: siteConfig.author.email,
    sameAs: socialLinks,
    knowsAbout: [
      "Software Engineering",
      "Data Science",
      "Machine Learning",
      "Web Development",
      "Full Stack Development",
      ...siteConfig.skills.slice(0, 10), // Add top 10 skills
    ],
  }

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  }

  // Create schema for each project
  const projectSchemas = siteConfig.projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "Portfolio",
    operatingSystem: "Cross-platform",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    codeRepository: project.github || undefined,
    url: project.demo || undefined,
    keywords: project.technologies.join(", "),
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {projectSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}
