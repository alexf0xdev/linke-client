import { cn } from '@/lib/utils'
import Link from 'next/link'
import LocaleDropdown from '@/components/LocaleDropdown'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('home.footer')
  return (
    <footer
      className={cn(
        'flex flex-col-reverse gap-2 sm:gap-0 sm:flex-row sm:items-end sm:justify-between py-5'
      )}
    >
      <div>
        <p className={cn('text-base')}>
          {t.rich('openSource', {
            link: chunks => (
              <Link
                className={cn('text-zinc-500')}
                href='https://github.com/alexf0xdev/linke-website-client'
                target='_blank'
              >
                {chunks}
              </Link>
            )
          })}
        </p>
        <p className={cn('text-base')}>
          {t.rich('developer', {
            link: chunks => (
              <Link
                className={cn('text-orange-500')}
                href='https://github.com/alexf0xdev'
                target='_blank'
              >
                {chunks}
              </Link>
            )
          })}
        </p>
      </div>
      <LocaleDropdown />
    </footer>
  )
}

export default Footer
