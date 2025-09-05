'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
          <Image
            src="/images/관악구 CI(세로형).jpg"
            alt="관악구 로고"
            width={58}
            height={60}
            priority
            className="mr-3 object-contain"
          />
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