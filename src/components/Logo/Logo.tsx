import Image from 'next/image'
import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <div className="relative w-12 h-12">
      <Image
        src="/logo-ava.svg"
        alt="Content by Ava"
        width={193}
        height={34}
        loading={loading}
        priority={priority === 'high'}
        className={clsx('block dark:hidden', className)}
      />
      <Image
        src="/logo-ava-white.svg"
        alt="Content by Ava"
        width={193}
        height={34}
        loading={loading}
        priority={priority === 'high'}
        className={clsx('hidden dark:block', className)}
      />
    </div>
  )
}
