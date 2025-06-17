"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

  // Handle smooth scrolling for navigation links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = siteConfig.mainNav.map((item) => item.href.replace("#", ""))

      // Add hero section which might not be in the nav
      const allSections = ["hero", ...sections]

      for (const section of allSections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScrollSpy)
    return () => {
      window.removeEventListener("scroll", handleScrollSpy)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Home">
          <span className="text-xl font-bold text-primary">{siteConfig.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href.replace("#", "") ? "text-primary" : "text-muted-foreground"
              }`}
              aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === item.href.replace("#", "") ? "text-primary" : "text-muted-foreground"
                    }`}
                    aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
