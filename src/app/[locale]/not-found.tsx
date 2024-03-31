import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: '404'
}

const NotFound = () => {
  const t = useTranslations('notFound')
  return (
    <div
      className={cn('flex flex-col items-center justify-center min-h-screen')}
    >
      <h1 className={cn('text-4xl font-semibold')}>{t('title')}</h1>
      <p className={cn('mt-5')}>{t('description')}</p>
    </div>
  )
}

export default NotFound
