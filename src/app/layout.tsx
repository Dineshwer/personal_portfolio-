import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Cursor from '../components/Cursor'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R S Dineshwer | Offensive Security',
  description: 'Offensive Security & Systems Engineering Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
