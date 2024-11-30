import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/style.scss"
import BallAnimation from "@/components/BallAnimation" // Import your BallAnimation component
import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

// Importing Google Font (Inter) with latin subset for styling
const inter = Inter({ subsets: ["latin"] })

// Metadata for SEO purposes
export const metadata: Metadata = {
  title: "TNCCPC",
  description: "Consumer Rights",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch locale (language) of the user
  const locale = await getLocale()

  // Fetch translation messages for the corresponding locale
  const messages = await getMessages()

  return (
    <html lang={locale}>
      {" "}
      {/* Set the page language dynamically */}
      <body className={inter.className}>
        {" "}
        {/* Apply the Google Font */}
        <NextIntlClientProvider messages={messages}>
          {/* Ball animation will be rendered globally */}
          <BallAnimation />
          {/* Render child components here */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
