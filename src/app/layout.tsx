import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/style.scss"
import BallAnimation from "@/components/BallAnimation" // Import your BallAnimation component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TNCCPC",
  description: "Consumer Rights",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BallAnimation /> {/* Render the BallAnimation component here */}
        {children}
      </body>
    </html>
  )
}
