import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fatima Hasan - AI Developer & Problem Solver | Portfolio",
  description:
    "Aspiring AI developer and problem solver with expertise in machine learning, full-stack development, and innovative project solutions. View my portfolio of AI projects and hackathon experiences.",
  keywords:
    "Fatima Hasan, AI Developer, Machine Learning, Full Stack Developer, Portfolio, Computer Science, Hackathons",
  authors: [{ name: "Fatima Hasan" }],
  openGraph: {
    title: "Fatima Hasan - AI Developer & Problem Solver",
    description:
      "Aspiring AI developer seeking to apply coding skills and problem-solving abilities in innovative projects.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
