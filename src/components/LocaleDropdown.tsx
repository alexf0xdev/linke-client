'use client'

import { cn } from '@/lib/utils'
import { TbChevronUp } from 'react-icons/tb'
import { useEffect, useRef, useState } from 'react'
import { locales, usePathname, useRouter } from '@/navigation'
import { useLocale } from 'next-intl'

const LocaleDropdown = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)

  const currentLocale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) =>
      ref.current && !ref.current.contains(e.target as Node) && setOpen(false)

    window.addEventListener('mousedown', onClickOutside)

    return () => {
      window.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  const handleChangeLocale = (locale: string) => {
    router.replace(pathname, { locale })
    setOpen(false)
  }

  return (
    <div className={cn('relative z-10')} ref={ref}>
      <button
        className={cn(
          'flex items-center text-base uppercase gap-2 bg-zinc-800 p-2'
        )}
        onClick={() => setOpen(prev => !prev)}
      >
        {currentLocale}
        <TbChevronUp
          className={cn('w-5 h-5', {
            'rotate-180': open
          })}
        />
      </button>
      {open && (
        <div className={cn('absolute bottom-0 mb-10 bg-zinc-700 w-full')}>
          {locales
            .filter(locale => locale !== currentLocale)
            .map((locale, idx) => (
              <button
                key={idx}
                className={cn('flex text-base uppercase p-2 w-full')}
                onClick={() => handleChangeLocale(locale)}
              >
                {locale}
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export default LocaleDropdown
