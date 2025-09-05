import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const supportServices = [
    {
      title: "가게별 스마트플레이스 등 최적화",
      bgColor: "bg-[#27c840]",
      cardBg: "bg-[#f7f6f6]",
      content: [
        "➊ 온라인 홍보의 이점 및 효과 분석을 통한 홍보 의지 제고",
        "➋ 가게 특성에 맞는 플랫폼 매칭 및 플랫폼별 운영 방법 A to Z 지원",
        "➌ 일정기간동안 소상공인이 직접 운영 후 문제점 및 보완사항 사후관리",
      ],
      hasImage: true,
      imageSrc: "/images/image02.png",
    },
    {
      title: "가게별 맞춤형 홍보 콘텐츠 제작 지원",
      bgColor: "bg-[#ff5f57]",
      cardBg: "bg-[#f8f6f6]",
      content: [
        "➊ 전문 스튜디오 대여 및 사진작가 매칭을 통한 제품 및 서비스 촬영",
        "➋ Youtube 등 영상 플랫폼 홍보용 영상 제작 지원",
        "➌ 캐치프레이즈 등 온라인 마케팅을 위한 선전 문구 창작 지원",
      ],
      hasImage: true,
      imageSrc: "/images/image03.png",
    },
    {
      title: "모객 활성화를 위한 온라인 키워드 홍보지원",
      bgColor: "bg-[#febc2f]",
      cardBg: "bg-[#f8f6f6]",
      content: [
        "➊ 가게 배너 등 검색 엔진 노출을 통한 키워드 홍보 지원",
        "➋ 당근마켓, 네이버카페 등 생활정보 플랫폼 체험단 리뷰 마케팅 지원",
        "➌ 가게별 온라인 모객 행사 콘텐츠 구상 및 기획(시행 미지원)",
      ],
      hasImage: true,
      imageSrc: "/images/image01.png",
    },
  ];

  const programDetails = [
    {
      label: "지원 기간",
      content: "2025. 9. 12.(금) ~ 9. 26.(금) 18:00까지",
    },
    {
      label: "모집 대상",
      content: {
        title: "관악구 소재 상시근로자 5인 미만의 소상공인 점포",
        details: [
          "※ 제외대상",
          "2022~2024년 동일 사업에 참여한 이력이 있는 점포",
          "유흥, 사행성, 도박 등 중소기업 육성기금 융자지원 제한 업종",
          "매장형 가게 아닌 점포(사무실, 병원, 숙박시설, 고시원 등)",
          "프랜차이즈 본점 또는 가맹점, 체인점",
        ],
      },
    },
    {
      label: "지원 방법",
      content: {
        title: "사이트 접수, 이메일 접수",
        details: [
          "사이트 주소: gwanak-biz.kr",
          "이메일 주소: gwanak@bmcreative.co.kr",
          "※ <필수> 서류를 모두 제출하셔야 접수가 완료됩니다.",
        ],
      },
    },
    {
      label: "선발 방법",
      content: {
        title: "서류 심사",
        details: [],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 정확한 Figma 스타일 */}
      <section className="w-full h-[450px] bg-[#ddf0ff] relative overflow-hidden">
        <div className="relative w-[667px] h-[444px] top-1.5 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/CK_ti069a38701.jpg"
            alt="관악구 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-7 left-[91px] w-[439px] h-24">
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5">
              <h1 className="font-medium text-black text-[32px] text-center tracking-[0] leading-[normal]">
                2025년 관악구 소상공인<br />
                온라인 마케팅 홍보지원 사업 안내
              </h1>
            </div>
            <div className="absolute w-[420px] h-px top-[95px] left-2.5 bg-black" />
          </div>
          
          <div className="absolute top-[133px] left-[60px] w-[500px]">
            <p className="font-light text-xl text-black text-center tracking-[0] leading-[normal]">
              스마트플레이스 등 최적화, 맞춤형 홍보 콘텐츠 제작,<br />
              온라인 키워드 홍보 지원 등(점포당 최대 150만원)
            </p>
          </div>
        </div>
      </section>

      {/* 지원 내용 섹션 - 3개 카드 */}
      <section className="px-10 py-16">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-2xl font-medium text-black text-center mb-12">
            지원 내용
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="flex flex-col">
                {/* 컬러 헤더 */}
                <div className={`${service.bgColor} px-5 py-4 rounded-t-lg`}>
                  <h3 className="text-white font-medium text-lg text-center">
                    {service.title}
                  </h3>
                </div>
                
                {/* 카드 본문 */}
                <div className={`${service.cardBg} p-6 rounded-b-lg flex-1`}>
                  {/* 이미지 */}
                  {service.hasImage && (
                    <div className="relative w-full h-[120px] mb-4">
                      <Image
                        src={service.imageSrc}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  
                  {/* 내용 */}
                  <div className="space-y-3">
                    {service.content.map((item, idx) => (
                      <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지원 안내 섹션 */}
      <section className="px-10 py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-medium text-black text-center mb-12">
            지원 안내
          </h2>
          
          <div className="bg-white rounded-lg p-10">
            {programDetails.map((detail, index) => (
              <div key={index}>
                <div className="flex gap-10">
                  <div className="w-[150px] flex-shrink-0">
                    <p className="font-medium text-lg text-gray-900">
                      {detail.label}
                    </p>
                  </div>
                  <div className="flex-1">
                    {typeof detail.content === 'string' ? (
                      <p className="text-lg font-medium text-gray-900">
                        {detail.content}
                      </p>
                    ) : (
                      <div>
                        <p className="text-lg font-medium text-gray-900 mb-3">
                          {detail.content.title}
                        </p>
                        {detail.content.details.length > 0 && (
                          <div className="bg-gray-50 p-4 rounded">
                            {detail.content.details.map((item, idx) => (
                              <p 
                                key={idx} 
                                className={`text-sm ${idx === 0 ? 'font-semibold text-red-600 mb-2' : 'text-gray-600 ml-4'}`}
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {index < programDetails.length - 1 && (
                  <hr className="my-8 border-gray-200" />
                )}
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="text-center mt-12">
            <Link
              href="/apply"
              className="inline-block px-12 py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-xl"
            >
              지원하기
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex h-48 items-start gap-2.5 px-[200px] py-10 bg-white border-t">
        <div className="flex flex-col w-[164px] items-start justify-center gap-2.5 px-2.5 py-0">
          <div className="flex flex-col items-start justify-center gap-2.5 relative self-stretch w-full">
            <Image
              className="relative self-stretch w-full h-[47px] object-contain"
              alt="관악구 CI 가로형"
              src="/images/관악구CI(가로형).jpg"
              width={164}
              height={47}
            />
            <Image
              className="h-[63.61px] object-contain relative self-stretch w-full"
              alt="관악구 CI 세로형"
              src="/images/관악구CI(세로형).jpg"
              width={164}
              height={64}
            />
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">
              문의: 02-879-5911 | gwanak@bmcreative.co.kr
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 관악구청. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}