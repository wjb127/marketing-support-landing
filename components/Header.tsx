'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: '사업안내', href: '/business' },
    { name: '지원하기', href: '/apply' },
    { name: 'Q&A', href: '/qna' },
    { name: '로그인', href: '/login' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="container-width h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">관악구</span>
        </Link>

        <nav>
          <ul className="flex items-center space-x-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  style={{ fontSize: '20px' }}
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