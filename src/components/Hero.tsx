import { cn } from '@/lib/utils'
import ShortLinkForm from '@/components/ShortLinkForm'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('home.hero')
  return (
    <div className={cn('text-center mt-64')}>
      <h1 className={cn('text-4xl sm:text-5xl font-semibold')}>{t('title')}</h1>
      <p className={cn('sm:text-2xl mt-5')}>{t('description')}</p>
      <ShortLinkForm />
    </div>
  )
}

export default Hero
