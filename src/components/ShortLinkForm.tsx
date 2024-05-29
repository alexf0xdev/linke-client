'use client'

import { cn } from '@/lib/utils'
import { useLinksStore } from '@/store/links'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

const ShortLinkForm = () => {
  const t = useTranslations('home.shortLinkForm')

  const schema = z.object({
    url: z
      .string({ required_error: t('requiredError') })
      .min(1, { message: t('requiredError') })
      .url({ message: t('invalidLink') })
  })

  type Schema = z.infer<typeof schema>

  const { addLink } = useLinksStore()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Schema>({
    defaultValues: { url: 'https://' },
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  const onSubmit = async (data: Schema) => {
    await addLink(data.url)
    reset()
  }

  return (
    <form className={cn('mt-10')} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn('sm:flex w-full')}>
        <input
          className={cn(
            'block bg-zinc-800 placeholder-zinc-500 px-5 py-3 rounded-t-md sm:rounded-tr-none sm:rounded-l-md w-full focus:outline-none'
          )}
          placeholder={t('inputPlaceholder')}
          {...register('url')}
        />
        <button
          className={cn(
            'flex items-center justify-center bg-orange-600 px-5 py-3 rounded-b-md sm:rounded-bl-none sm:rounded-r-md w-full sm:w-auto hover:bg-orange-700 disabled:bg-zinc-700'
          )}
          disabled={isSubmitting}
        >
          {!isSubmitting ? t('short') : t('shorting')}
        </button>
      </div>
      {errors.url && (
        <p className={cn('text-left text-red-500 text-sm mt-1')}>
          {errors.url.message}
        </p>
      )}
    </form>
  )
}

export default ShortLinkForm
