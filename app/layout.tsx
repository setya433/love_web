import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "For You ❤️",
  description: "A little something for someone very special.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="
          min-h-screen 
          bg-gradient-to-b 
          from-pink-50 
          via-rose-100 
          to-pink-200 
          text-gray-800 
          antialiased
        "
      >
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
