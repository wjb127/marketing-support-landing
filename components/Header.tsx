'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: '홈', href: '/' },
    { name: '사업안내', href: '/business' },
    { name: '지원하기', href: '/apply' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container-width h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-500 rounded-full"></div>
          <span className="text-2xl font-bold">관악구</span>
        </Link>

        <nav>
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-medium transition-colors hover:text-red-500 ${
                    pathname === item.href ? 'text-red-500' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}