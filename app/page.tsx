import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 실제 Figma 디자인 */}
      <section 
        className="relative w-full flex items-center justify-center" 
        style={{ 
          height: '450px',
          background: 'rgb(221, 240, 255)' // Figma 정확한 색상
        }}
      >
        <div className="container-width text-center">
          <h1 className="font-medium mb-6" style={{ fontSize: '32px', lineHeight: '44px', color: '#000000' }}>
            2025년 관악구 소상공인<br />
            온라인 마케팅 홍보지원 사업 안내
          </h1>
          <p className="font-light" style={{ fontSize: '20px', lineHeight: '28px', color: '#333333' }}>
            스마트플레이스 등 최적화, 맞춤형 홍보 콘텐츠 제작,<br />
            온라인 키워드 홍보 지원 등(점포당 최대 150만원)
          </p>
        </div>
      </section>

      {/* 사업 내용 섹션 */}
      <section className="py-16 px-4 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 스마트플레이스 */}
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: '18px', lineHeight: '26px' }}>
                가게별 스마트플레이스 등 최적화
              </h3>
              <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '20px' }}>
                네이버, 카카오 등 플랫폼에서<br />
                가게 정보를 최적화합니다
              </p>
            </div>

            {/* 홍보 콘텐츠 */}
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: '18px', lineHeight: '26px' }}>
                가게별 맞춤형 홍보 콘텐츠 제작 지원
              </h3>
              <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '20px' }}>
                전문 촬영과 디자인으로<br />
                매력적인 콘텐츠를 제작합니다
              </p>
            </div>

            {/* 키워드 홍보 */}
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: '18px', lineHeight: '26px' }}>
                모객 활성화를 위한 온라인 키워드 홍보지원
              </h3>
              <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '20px' }}>
                검색 키워드 광고로<br />
                고객 유입을 증가시킵니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 지원 정보 섹션 */}
      <section className="py-16 px-4" style={{ background: '#f8f9fa' }}>
        <div className="container-width max-w-4xl">
          <h2 className="text-2xl font-bold mb-12 text-center">지원 안내</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-6">
              {/* 지원 기간 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <h3 className="font-bold" style={{ fontSize: '18px' }}>지원 기간</h3>
                </div>
                <div className="md:w-3/4">
                  <p style={{ fontSize: '18px', fontWeight: 600 }}>
                    2025. 9. 12.(금) ~ 9. 26.(금) 18:00까지
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* 모집 대상 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <h3 className="font-bold" style={{ fontSize: '18px' }}>모집 대상</h3>
                </div>
                <div className="md:w-3/4">
                  <p style={{ fontSize: '18px', fontWeight: 600 }}>
                    관악구 소재 상시근로자 5인 미만의 소상공인 점포
                  </p>
                  <div className="mt-3 p-4 bg-gray-50 rounded" style={{ fontSize: '14px', lineHeight: '20px' }}>
                    <p className="font-semibold mb-2">※ 제외대상</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>2022~2024년 동일 사업에 참여한 이력이 있는 점포</li>
                      <li>유흥, 사행성, 도박 등 중소기업 육성기금 융자지원 제한 업종</li>
                      <li>매장형 가게 아닌 점포(사무실, 병원, 숙박시설)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* 지원 방법 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <h3 className="font-bold" style={{ fontSize: '18px' }}>지원 방법</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="font-bold mb-3" style={{ fontSize: '18px' }}>
                    사이트 접수, 이메일 접수
                  </p>
                  <div className="space-y-2" style={{ fontSize: '16px' }}>
                    <p>사이트 주소: <span className="text-blue-600">gwanak-biz.kr</span></p>
                    <p>이메일 주소: <span className="text-blue-600">gwanak@bmcreative.co.kr</span></p>
                    <p className="text-red-500 font-semibold mt-3">
                      ※ &lt;필수&gt; 서류를 모두 제출하셔야 접수가 완료됩니다.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* 선발 방법 */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <h3 className="font-bold" style={{ fontSize: '18px' }}>선발 방법</h3>
                </div>
                <div className="md:w-3/4">
                  <p className="font-bold" style={{ fontSize: '18px' }}>
                    서류 심사
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-12">
            <Link
              href="/apply"
              className="inline-block px-12 py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              style={{ fontSize: '20px' }}
            >
              지원하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}