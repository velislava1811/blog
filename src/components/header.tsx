'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo/Logo'
import { Dialog } from '@headlessui/react'
import { useAuth } from '@/hooks/useAuth'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/posts' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, loading } = useAuth()

  const handleLogout = async () => {
    try {
      await fetch('/api/users/logout', { method: 'POST' })
      window.location.reload()
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Content by Ava</span>
            <Logo />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
          >
            <span className="sr-only">Open main menu</span>
            <Icon icon="mdi:menu" className="size-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {loading ? (
            <div className="text-sm/6 font-semibold text-gray-500">Loading...</div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm/6 font-semibold text-gray-700 dark:text-gray-300">
                {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          ) : (
            <Link
              href="/admin"
              className="text-sm/6 font-semibold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              Admin <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Content by Ava</span>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <Icon icon="mdi:close" className="size-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {loading ? (
                  <div className="text-sm/6 font-semibold text-gray-500 px-3">Loading...</div>
                ) : user ? (
                  <div className="space-y-3">
                    <div className="px-3 text-sm/6 font-semibold text-gray-700 dark:text-gray-300">
                      {user.name || user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 text-left"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/admin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    Admin
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
