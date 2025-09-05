import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container-width">
          <div className="text-center">
            <h1 className="heading-96 mb-8 text-gray-900">
              관악구 지원사업
            </h1>
            <p className="heading-48 text-gray-600 mb-12">
              소상공인과 함께하는 관악구
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 bg-red-500 text-white text-xl font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                지원하기
              </Link>
              <Link
                href="/business"
                className="px-8 py-4 bg-white text-red-500 border-2 border-red-500 text-xl font-semibold rounded-lg hover:bg-red-50 transition-colors"
              >
                사업 안내
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container-width">
          <h2 className="heading-48 text-center mb-16">주요 지원 프로그램</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-red-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">창업 지원</h3>
              <p className="text-gray-600 mb-6">
                예비 창업자를 위한 교육, 컨설팅, 자금 지원 프로그램을 제공합니다.
              </p>
              <Link href="/business" className="text-red-500 font-semibold hover:underline">
                자세히 보기 →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-red-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">경영 개선</h3>
              <p className="text-gray-600 mb-6">
                소상공인의 경영 역량 강화를 위한 맞춤형 컨설팅을 지원합니다.
              </p>
              <Link href="/business" className="text-red-500 font-semibold hover:underline">
                자세히 보기 →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-red-500 rounded-full mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">디지털 전환</h3>
              <p className="text-gray-600 mb-6">
                온라인 마케팅과 디지털 도구 활용을 위한 교육과 지원을 제공합니다.
              </p>
              <Link href="/business" className="text-red-500 font-semibold hover:underline">
                자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container-width text-center">
          <h2 className="heading-48 mb-8">지금 바로 시작하세요</h2>
          <p className="text-2xl text-gray-600 mb-12">
            관악구와 함께 성장하는 기회를 놓치지 마세요
          </p>
          <Link
            href="/apply"
            className="inline-block px-12 py-5 bg-red-500 text-white text-2xl font-bold rounded-lg hover:bg-red-600 transition-colors"
          >
            지원 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}