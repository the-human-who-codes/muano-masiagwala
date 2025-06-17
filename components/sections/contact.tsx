"use client"

import type React from "react"
import Link from "next/link"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-12">
            Let's connect! Feel free to reach out through any of these platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SocialLink
              href="mailto:muanomasiagwala2021@gmail.com"
              icon={<Mail className="w-8 h-8" />}
              label="Email"
              description="Send me an email"
            />

            <SocialLink
              href="tel:068 429 8585"
              icon={<Phone className="w-8 h-8" />}
              label="Phone"
              description="Give me a call"
            />

            <SocialLink
              href="https://github.com/the-human-who-codes"
              icon={<Github className="w-8 h-8" />}
              label="GitHub"
              description="View my code"
              external
            />

            <SocialLink
              href="https://www.linkedin.com/in/muano-m-5b554a255"
              icon={<Linkedin className="w-8 h-8" />}
              label="LinkedIn"
              description="Connect with me"
              external
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  description: string
  external?: boolean
}

function SocialLink({ href, icon, label, description, external = false }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex flex-col items-center justify-center gap-3 p-6 bg-card rounded-lg border hover:border-primary/50 transition-all shadow-sm hover:transform hover:scale-105 h-32 min-h-[8rem]"
      aria-label={`${label}: ${description}`}
    >
      <div className="p-3 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
        <div className="text-primary group-hover:scale-110 transition-transform">{icon}</div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-card-foreground text-sm">{label}</h3>
        <p className="text-xs text-muted-foreground truncate max-w-full">{description}</p>
      </div>
    </Link>
  )
}
