'use client'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

const Error = () => {
  const t = useTranslations('error')

  return (
    <div
      className={cn('flex flex-col items-center justify-center min-h-screen')}
    >
      <h1 className={cn('text-4xl font-semibold')}>{t('title')}</h1>
      <p className={cn('mt-5')}>{t('description')}</p>
    </div>
  )
}

export default Error
