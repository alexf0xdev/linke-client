import { create } from 'zustand'
import { ILink } from '@/interfaces/link'
import { persist } from 'zustand/middleware'

interface ILinksStore {
  links: ILink[]
  addLink: (longUrl: string) => Promise<void>
  removeLink: (id: string) => Promise<void>
}

export const useLinksStore = create<ILinksStore>()(
  persist(
    set => ({
      links: [],
      addLink: async longUrl => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/links`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ longUrl })
        })

        if (!res.ok) return

        const link = await res.json()

        set(state => ({ links: [link, ...state.links] }))
      },
      removeLink: async id => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/links/${id}`,
          { method: 'DELETE' }
        )

        if (!res.ok) return

        set(state => ({
          links: state.links.filter(link => link.id !== id)
        }))
      }
    }),
    { name: 'links-storage' }
  )
)
