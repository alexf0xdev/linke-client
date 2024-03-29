import { cn } from '@/lib/utils'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={cn('text-center my-5')}>
      <p>
        Этот проект{' '}
        <Link
          className={cn('text-zinc-500')}
          href='https://github.com/alexf0xdev/linke-website-client'
          target='_blank'
        >
          open source
        </Link>
      </p>
      <p>
        Разработка -{' '}
        <Link
          className={cn('text-orange-500')}
          href='https://github.com/alexf0xdev'
          target='_blank'
        >
          AlexF0x
        </Link>
      </p>
    </footer>
  )
}

export default Footer
