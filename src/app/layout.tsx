import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Linke - Простой сокращатель ссылок',
    template: '%s - Linke'
  },
  description: 'Сократи ссылку, если она слишком большая',
  openGraph: {
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    type: 'website',
    siteName: 'Linke',
    locale: 'ru_RU'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@linke'
  }
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='ru'>
      <body className={cn('bg-zinc-900 text-white text-xl', inter.className)}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
