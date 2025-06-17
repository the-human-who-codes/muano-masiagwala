import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

interface FooterProps {
  copyright: string
  email: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    [key: string]: string | undefined
  }
}

export default function Footer({ copyright, email, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {copyright}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"
              aria-label="Email me"
            >
              <Mail className="w-4 h-4" />
              {email}
            </Link>

            <div className="flex items-center gap-4">
              {socialLinks.github && (
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}

              {socialLinks.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              )}

              {socialLinks.twitter && (
                <Link
                  href={`https://twitter.com/${socialLinks.twitter.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
