'use client'

import { cn } from '@/lib/utils'

const Error = () => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center min-h-screen')}
    >
      <h1 className={cn('text-4xl font-semibold')}>Технические неполадки ;(</h1>
      <p className={cn('mt-5')}>Произошли технические неполадки...</p>
    </div>
  )
}

export default Error
