import { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${process.env.NEXT_PUBLIC_CLIENT_URL}/sitemap.xml`
  }
}

export default robots
