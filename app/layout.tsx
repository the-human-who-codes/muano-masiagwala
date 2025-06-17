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
    "Data Scientist",
    "Web Developer",
    "Machine Learning",
    "Portfolio",
    siteConfig.author.name,
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Data Analysis",
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
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.author.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author.name} | ${siteConfig.author.title}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: siteConfig.socialLinks.twitter || "@username",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
