import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { locales } from '@/navigation'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata = async ({
  params: { locale: currentLocale }
}: {
  params: { locale: string }
}): Promise<Metadata> => {
  const t = await getTranslations({ currentLocale, namespace: 'metadata' })

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CLIENT_URL!),
    title: {
      default: t('title'),
      template: '%s - Linke'
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      siteName: 'Linke',
      url: process.env.NEXT_PUBLIC_CLIENT_URL,
      locale: currentLocale
    },
    twitter: {
      card: 'summary_large_image',
      site: '@linke'
    },
    alternates: {
      languages: locales.reduce(
        (acc, value) => ({ ...acc, [value]: `/${value}` }),
        {}
      )
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
