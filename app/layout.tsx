import type React from "react"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Interactive car rental prototype"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mulish.variable}>
      <body className="font-mulish bg-gray-50">{children}</body>
    </html>
  )
}
