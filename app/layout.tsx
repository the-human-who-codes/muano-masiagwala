import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.author.name} | ${siteConfig.author.title}`,
    template: `%s | ${siteConfig.author.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software Engineer",
    "AWS",
    "EC2",
    "Infrastructure Automation",
    "Cloud Engineer",
    "Portfolio",
    siteConfig.author.name,
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "South Africa",
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.author.name} | ${siteConfig.author.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author.name} | ${siteConfig.author.title}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. SwiftRead, Grammarly) inject attributes on <html>/<body>
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
