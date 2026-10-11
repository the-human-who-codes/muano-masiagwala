import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Github, Linkedin, Download, ArrowRight, MapPin, Server, Rocket, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { HighlightType } from "@/types"

interface HeroProps {
  name: string
  title: string
  location: string
  intro: string[]
  highlights: HighlightType[]
  socialLinks: {
    email?: string
    github?: string
    linkedin?: string
    [key: string]: string | undefined
  }
}

const highlightIcons = [Server, Rocket, Code]

export default function Hero({ name, title, location, intro, highlights, socialLinks }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container relative py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              {title}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Hi, I&apos;m <span className="text-primary">{name}</span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground md:mx-0 mx-auto">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> {location}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button asChild size="lg">
                <a href="/resume.pdf" download="Muano_Masiagwala_Resume.pdf">
                  <Download /> Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#experience">
                  View Experience <ArrowRight />
                </a>
              </Button>
              <div className="flex items-center gap-2 sm:ml-2">
                {socialLinks.linkedin && (
                  <SocialIcon href={socialLinks.linkedin} label="LinkedIn" external>
                    <Linkedin className="h-5 w-5" />
                  </SocialIcon>
                )}
                {socialLinks.github && (
                  <SocialIcon href={socialLinks.github} label="GitHub" external>
                    <Github className="h-5 w-5" />
                  </SocialIcon>
                )}
                {socialLinks.email && (
                  <SocialIcon href={`mailto:${socialLinks.email}`} label="Email">
                    <Mail className="h-5 w-5" />
                  </SocialIcon>
                )}
              </div>
            </div>
          </div>

          <div className="order-1 mx-auto md:order-2">
            <div className="relative h-44 w-44 rounded-full border-2 border-primary p-1.5 shadow-[0_0_60px_-15px] shadow-primary/50 md:h-64 md:w-64">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
                <Image
                  src="/assets/profile-photo.jpg"
                  alt={`${name}'s profile picture`}
                  fill
                  sizes="(min-width: 768px) 256px, 176px"
                  className="object-cover object-[35%_40%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlightIcons[index % highlightIcons.length]
            return (
              <li key={highlight.title} className="flex items-start gap-3 rounded-lg border bg-card/60 p-5">
                <span className="rounded-lg bg-muted p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-semibold">{highlight.title}</span>
                  <span className="block text-sm text-muted-foreground">{highlight.description}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  external = false,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="rounded-full border bg-card p-2.5 text-primary transition-colors hover:border-primary/50 hover:bg-muted"
      aria-label={label}
    >
      {children}
    </Link>
  )
}
