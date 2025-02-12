import Image from 'next/image'
import BlogSection from '@/components/blog-section'

const stats = [
  { label: 'Articles published', value: '500+' },
  { label: 'Client satisfaction', value: '99%' },
  { label: 'Years of experience', value: '8+' },
]
const values = [
  {
    name: 'Clear Communication',
    description:
      'Every piece of content is crafted with clarity and purpose, ensuring your message resonates with your target audience effectively.',
  },
  {
    name: 'Research Excellence',
    description:
      'Thorough research and fact-checking are at the core of every project, delivering accurate and valuable content that builds trust.',
  },
  {
    name: 'SEO Optimization',
    description:
      'Content is strategically optimized for search engines while maintaining natural readability and engagement for your readers.',
  },
  {
    name: 'Deadline Focused',
    description:
      'Reliable and punctual delivery of every project, because I understand the importance of timing in content strategy.',
  },
  {
    name: 'Creative Storytelling',
    description:
      'Transforming complex ideas into compelling narratives that capture attention and drive engagement with your brand.',
  },
  {
    name: 'Adaptable Voice',
    description:
      'Versatile writing style that adapts to your brand voice and resonates with your specific target audience.',
  },
]

export default function Home() {
  return (
    <div>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 dark:stroke-gray-800 dark:bg-gray-900 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight  sm:text-7xl">
                    Crafting Words That Drive Results
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 dark:text-gray-300 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Professional content writer specializing in creating engaging, SEO-optimized
                    content that connects with your audience and drives meaningful results. From
                    compelling blog posts to detailed whitepapers, I help brands tell their stories
                    effectively.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="https://images.unspla  sh.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        width={176}
                        height={264}
                        alt="Writing sample 1"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        width={176}
                        height={264}
                        alt="Writing sample 2"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        width={176}
                        height={264}
                        alt="Writing sample 3"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        width={176}
                        height={264}
                        alt="Writing sample 4"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        width={176}
                        height={264}
                        alt="Writing sample 5"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
              My approach
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600 dark:text-gray-300">
                  I believe in creating content that not only reads well but also performs well.
                  Every piece is crafted with both your audience and search engines in mind,
                  ensuring maximum impact and reach.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700 dark:text-gray-400">
                  With years of experience in content writing and digital marketing, I understand
                  what it takes to create content that converts. Whether you need blog posts,
                  website copy, or technical content, I deliver high-quality work that helps you
                  achieve your goals.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-gray-600 dark:text-gray-300">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight ">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            width={2832}
            height={1133}
            alt="Content writing workspace"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
              My values
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              These core principles guide my work and ensure I deliver the best possible results for
              every client.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold ">{value.name}</dt>
                <dd className="mt-1 text-gray-600 dark:text-gray-300">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        {/* <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg aria-hidden="true" className="h-[40rem] w-[80rem] flex-none stroke-gray-200">
              <defs>
                <pattern
                  x="50%"
                  y="50%"
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50 dark:fill-gray-900">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold ">
              Trusted by leading brands and publications
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <Image
                width={32}
                height={32}
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                width={32}
                height={32}
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                width={32}
                height={32}
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
              <Image
                width={32}
                height={32}
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              />
              <Image
                width={32}
                height={32}
                alt="Logo"
                src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            </div>
          </div>
        </div> */}

        <BlogSection />
      </main>
    </div>
  )
}
