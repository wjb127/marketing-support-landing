'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="w-[1440px] px-7 py-10 inline-flex justify-start items-center gap-2.5 overflow-hidden mx-auto">
        <div className="w-[1380px] h-14 relative">
          {/* Logo Section */}
          <div className="w-[930px] px-7 left-0 top-0 absolute inline-flex justify-start items-center gap-2.5">
            <Link href="/" className="w-64 h-14 p-2.5 flex justify-start items-center gap-2.5 overflow-hidden">
              <div className="w-56 h-14 relative">
                <div className="w-14 h-14 left-[10px] top-0 absolute">
                  <Image 
                    className="w-14 h-14 left-0 top-0 absolute object-contain" 
                    src="/images/관악구CI(세로형).jpg"
                    alt="관악구 로고"
                    width={58}
                    height={60}
                  />
                </div>
                <div className="w-36 left-[78px] top-0 absolute inline-flex flex-col justify-start items-start gap-2.5">
                  <Image 
                    className="self-stretch h-14 object-contain" 
                    src="/images/관악구CI(가로형).jpg"
                    alt="관악구"
                    width={144}
                    height={60}
                  />
                </div>
              </div>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="left-[940px] top-[17.50px] absolute inline-flex justify-center items-center gap-10">
            <Link href="/business" className="w-20 h-6 text-center justify-start text-black text-xl font-medium font-['Pretendard'] hover:text-blue-600 transition-colors">
              사업안내
            </Link>
            <Link href="/apply" className="w-20 h-6 text-center justify-start text-black text-xl font-medium font-['Pretendard'] hover:text-blue-600 transition-colors">
              지원하기
            </Link>
            <Link href="/qna" className="w-14 h-6 text-center justify-start text-black text-xl font-medium font-['Pretendard'] hover:text-blue-600 transition-colors">
              Q&A
            </Link>
            <Link href="/login" className="w-14 h-6 text-center justify-start text-black text-xl font-medium font-['Pretendard'] hover:text-blue-600 transition-colors">
              로그인
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}