import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const alt = siteConfig.author.name
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(circle at 75% 30%, #0f3d22 0%, #0a0a0b 60%)",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700, color: "#26d968", marginBottom: 24 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.1 }}>{siteConfig.author.name}</div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 24 }}>{siteConfig.author.title}</div>
      </div>
    ),
    size,
  )
}
