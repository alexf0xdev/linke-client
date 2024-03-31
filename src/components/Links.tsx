'use client'

import { cn } from '@/lib/utils'
import LinkCard from '@/components/LinkCard'
import { useLinksStore } from '@/store/links'
import { useTranslations } from 'next-intl'

const Links = () => {
  const t = useTranslations('home.links')

  const { links } = useLinksStore()

  if (!links.length) return null

  return (
    <div className={cn('mt-20')}>
      <h2 className={cn('text-2xl font-semibold')}>{t('title')}</h2>
      <div className={cn('flex flex-col gap-2 mt-2')}>
        {links.map(link => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </div>
  )
}

export default Links
