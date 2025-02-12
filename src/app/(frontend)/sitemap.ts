import type { MetadataRoute } from 'next'
import { SITE_URL } from './constants'
import slugify from '@sindresorhus/slugify'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Post } from '@/payload-types'

export const runtime = 'edge'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config: configPromise })

  // Fetch posts
  const postsResult = await payload.find({
    collection: 'posts',
    depth: 0,
    limit: 1000,
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      slug: true,
      updatedAt: true,
      categories: true,
    },
  })

  const posts = postsResult.docs as Post[]

  // Get all unique categories from posts
  const categories = Array.from(
    new Set(
      posts.flatMap((post) => {
        if (post.categories) {
          return post.categories.map((cat) => (typeof cat === 'object' ? cat.id : cat))
        }
        return []
      }),
    ),
  )

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/saas-mvp-cost-calculator`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/giveaway`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Blog post routes
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${SITE_URL}/blog/categories/${category}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes, ...categoryRoutes]
}
