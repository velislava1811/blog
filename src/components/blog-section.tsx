import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Post, Media } from '@/payload-types'

export default async function BlogSection() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
          Featured articles
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
          A selection of my best work across various industries and topics.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.docs.map((post: Post) => {
          const heroImage =
            post.heroImage && typeof post.heroImage === 'object' ? (post.heroImage as Media) : null
          const imageUrl =
            heroImage?.url || 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e'

          return (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                width={400}
                height={600}
                alt={post.title}
                src={imageUrl}
                className="absolute inset-0 -z-10 size-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                {post.publishedAt && (
                  <time dateTime={post.publishedAt} className="mr-8">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                )}
                {post.populatedAuthors?.[0]?.name && (
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">{post.populatedAuthors[0].name}</div>
                  </div>
                )}
              </div>
              <h3 className="mt-3 text-lg/6 font-semibold text-white dark:text-gray-300">
                <Link href={`/posts/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
            </article>
          )
        })}
      </div>
    </div>
  )
}
