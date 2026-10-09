import type { MetadataRoute } from 'next'
import { guides } from '@/lib/guides'
import { siteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const paths = ['/', '/features/', '/learn/', '/learn/stats-engine/', '/privacy/', '/terms/', ...guides.map(guide => `/learn/${guide.slug}/`)]
  return paths.map(path => ({ url: `${siteUrl}${path}`, lastModified }))
}
