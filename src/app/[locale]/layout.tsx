import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

import './globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: {
      default: t('title'),
      template: '%s - Linke'
    },
    description: t('description'),
    openGraph: {
      url: process.env.NEXT_PUBLIC_CLIENT_URL,
      type: 'website',
      siteName: 'Linke',
      locale
    },
    twitter: {
      card: 'summary_large_image',
      site: '@linke'
    }
  }
}

const LocaleLayout = ({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) => {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={cn('bg-zinc-900 text-white text-xl', inter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
