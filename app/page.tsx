import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Education from "@/components/sections/education"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: `${siteConfig.author.name} | ${siteConfig.author.title}`,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StructuredData />
      <Header />
      <main>
        <Hero name={siteConfig.author.name} title={siteConfig.author.title} socialLinks={siteConfig.socialLinks} />
        <About content={siteConfig.about} />
        <Projects projects={siteConfig.projects} />
        <Skills skills={siteConfig.skills} />
        <Education education={siteConfig.education} certifications={siteConfig.certifications} />
        <Contact />
      </main>
      <Footer copyright={siteConfig.copyright} email={siteConfig.author.email} socialLinks={siteConfig.socialLinks} />
    </div>
  )
}
