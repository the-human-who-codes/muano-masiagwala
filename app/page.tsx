import Hero from "@/components/sections/hero"
import Experience from "@/components/sections/experience"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { siteConfig } from "@/config/site"
import { skillRows } from "@/data/skills"
import { heroHighlights } from "@/data/about"
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
        <Hero
          name={siteConfig.author.name}
          title={siteConfig.author.title}
          location={siteConfig.author.location}
          intro={siteConfig.about}
          highlights={heroHighlights}
          socialLinks={siteConfig.socialLinks}
        />
        <Experience experience={siteConfig.experience} />
        <Projects projects={siteConfig.projects} githubProfile={siteConfig.socialLinks.github} />
        <Skills rows={skillRows} />
        <Contact />
      </main>
      <Footer copyright={siteConfig.copyright} email={siteConfig.author.email} socialLinks={siteConfig.socialLinks} />
    </div>
  )
}
