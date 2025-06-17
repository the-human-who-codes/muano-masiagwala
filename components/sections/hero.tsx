"use client"

import Link from "next/link"
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

interface HeroProps {
  name: string
  title: string
  socialLinks: {
    email?: string
    phone?: string
    github?: string
    linkedin?: string
    twitter?: string
    [key: string]: string | undefined
  }
}

export default function Hero({ name, title, socialLinks }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleExploreClick = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="py-20 md:py-32 container flex flex-col items-center justify-center text-center relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />
      </div>
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full border-2 border-primary p-1 animate-pulse-slow">
  <div className="w-full h-full rounded-full overflow-hidden bg-card">
    <Image
      src="/assets/profile-photo.jpg"
      alt={`${name}'s profile picture`}
      fill
      className="object-cover object-center rounded-full"
      priority
    />
  </div>
</div>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">{title}</p>
      <div className="flex items-center justify-center gap-4 mb-8">
        <SocialLinks socialLinks={socialLinks} />
      </div>
      {mounted && (
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 animate-bounce-subtle"
          onClick={handleExploreClick}
        >
          Explore My Work
        </Button>
      )}
    </section>
  )
}

function SocialLinks({ socialLinks }: { socialLinks: HeroProps["socialLinks"] }) {
  return (
    <>
      {socialLinks.email && (
        <Link
          href={`mailto:${socialLinks.email}`}
          className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-primary" />
          <span className="sr-only">Email</span>
        </Link>
      )}
      {socialLinks.phone && (
        <Link
          href={`tel:${socialLinks.phone}`}
          className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
          aria-label="Phone"
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="sr-only">Phone</span>
        </Link>
      )}
      {socialLinks.linkedin && (
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5 text-primary" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      )}
      {socialLinks.github && (
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5 text-primary" />
          <span className="sr-only">GitHub</span>
        </Link>
      )}
      {socialLinks.twitter && (
        <Link
          href={`https://twitter.com/${socialLinks.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
          aria-label="Twitter Profile"
        >
          <Twitter className="w-5 h-5 text-primary" />
          <span className="sr-only">Twitter</span>
        </Link>
      )}
    </>
  )
}
