import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://s2h.online', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ]
}
