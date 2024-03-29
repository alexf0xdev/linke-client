import { notFound, redirect } from 'next/navigation'
import { ILink } from '@/interfaces/link'
import { Metadata } from 'next'

const getLinkByShort = async (short: string): Promise<ILink | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/links/${short}`
  )

  if (!res.ok) return null

  return res.json()
}

export const metadata: Metadata = {
  title: 'Перенаправляем на ссылку...'
}

const Short = async ({ params }: { params: { short: string } }) => {
  const link = await getLinkByShort(params.short)

  if (!link) notFound()

  redirect(link.longUrl)
}

export default Short
