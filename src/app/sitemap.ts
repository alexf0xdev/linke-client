import { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: process.env.NEXT_PUBLIC_CLIENT_URL!,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    }
  ]
}

export default sitemap
