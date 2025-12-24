import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Priya Jain - Portfolio',
  description: 'Full Stack Developer & Tech Enthusiast',
  icons: [{ rel:"icon", url: "/profile.jpg" }],
}

/*************  ✨ Windsurf Command ⭐  *************/
/*******  4655c0d0-9f74-472a-84c0-24798c6d1798  *******/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Toaster/>
      </body>
    </html>
  )
}