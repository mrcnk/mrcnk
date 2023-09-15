import { Providers } from '@/components/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tomasz Marciniak (mrcnk)',
  description: 'My person website and a collection of threads.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "container")}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
