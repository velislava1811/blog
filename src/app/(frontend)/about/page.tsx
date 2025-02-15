import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const faqs = [
    {
      id: 1,
      question: 'What types of content do you specialize in?',
      answer:
        'I specialize in creating engaging blog posts, technical articles, SEO-optimized web content, and compelling marketing copy. My expertise spans across technology, lifestyle, and business topics.',
    },
    {
      id: 2,
      question: 'What is your writing process?',
      answer:
        'My writing process involves thorough research, understanding the target audience, crafting engaging outlines, and delivering polished content that meets your objectives. I also ensure all content is SEO-optimized and fact-checked.',
    },
    {
      id: 3,
      question: 'How do you ensure content quality?',
      answer:
        'I follow a comprehensive quality assurance process that includes multiple rounds of editing, fact-checking, SEO optimization, and ensuring the content aligns with your brand voice and style guidelines.',
    },
    {
      id: 4,
      question: 'Can you help with content strategy?',
      answer:
        'Yes! Beyond writing, I can help develop content strategies, create content calendars, and provide recommendations for improving your content marketing efforts.',
    },
  ]

  return (
    <div>
      {/* FAQ Section */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-md divide-y-2 divide-slate-200 dark:divide-slate-800 px-6 py-24 sm:max-w-3xl lg:max-w-7xl lg:px-8 lg:py-32"
      >
        <h2
          id="faq-heading"
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Frequently Asked Questions
        </h2>
        <div className="mt-6 pt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-slate-500 dark:text-slate-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="join-heading" className="relative">
        <div aria-hidden="true" className="absolute inset-x-0 hidden h-1/2 lg:block" />
        <div className="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div aria-hidden="true" className="absolute inset-x-0 h-1/2lg:hidden" />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                <Image
                  alt="Velislav Mihaylova"
                  src="/velislava.jpg"
                  className="relative aspect-[10/6] w-full rounded-3xl object-cover shadow-2xl sm:aspect-[2/1] lg:aspect-square"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>

            <div className="relative bg-blue-600 dark:bg-blue-900 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              >
                <svg
                  fill="none"
                  width={404}
                  height={384}
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                  className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                >
                  <defs>
                    <pattern
                      x={0}
                      y={0}
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        fill="currentColor"
                        width={4}
                        height={4}
                        className="text-blue-500"
                      />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    width={404}
                    height={384}
                  />
                </svg>
                <svg
                  fill="none"
                  width={404}
                  height={384}
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                  className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
                >
                  <defs>
                    <pattern
                      x={0}
                      y={0}
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        fill="currentColor"
                        width={4}
                        height={4}
                        className="text-blue-500"
                      />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    width={404}
                    height={384}
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 id="join-heading" className="text-3xl font-bold tracking-tight text-white">
                  Velislava Mihaylova
                </h2>
                <p className="text-lg text-white">
                  I&apos;m always looking for new opportunities to help businesses grow. If you have
                  a project in mind, please don&apos;t hesitate to contact me.
                </p>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/velislavamihaylova/"
                  className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-blue-700 shadow-md hover:bg-slate-50 sm:inline-block sm:w-auto"
                >
                  Contact me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
