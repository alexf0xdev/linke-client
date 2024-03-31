import { notFound, redirect } from 'next/navigation'
import { ILink } from '@/interfaces/link'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const generateMetadata = async ({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'short.metadata' })

  return {
    title: t('title')
  }
}

const getLinkByShort = async (short: string): Promise<ILink | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/links/${short}`
  )

  if (!res.ok) return null

  return res.json()
}

const Short = async ({ params }: { params: { short: string } }) => {
  const link = await getLinkByShort(params.short)

  if (!link) notFound()

  redirect(link.longUrl)
}

export default Short
