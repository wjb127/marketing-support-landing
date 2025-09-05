export default function BusinessPage() {
  const programs = [
    {
      title: "소상공인 창업 지원",
      description: "창업을 준비하는 예비 창업자를 위한 종합 지원 프로그램",
      details: [
        "창업 교육 및 멘토링",
        "사업계획서 작성 지원",
        "창업 자금 지원 (최대 3,000만원)",
        "창업 공간 제공"
      ],
      requirements: [
        "관악구 거주자 또는 관악구 내 창업 예정자",
        "사업자 등록 전 또는 등록 1년 미만",
        "만 19세 이상 ~ 만 39세 이하"
      ]
    },
    {
      title: "경영 개선 컨설팅",
      description: "기존 소상공인의 경영 역량 강화를 위한 맞춤형 컨설팅",
      details: [
        "경영 진단 및 개선 방안 제시",
        "마케팅 전략 수립 지원",
        "재무/회계 관리 교육",
        "1:1 전문가 컨설팅 (최대 10회)"
      ],
      requirements: [
        "관악구 내 사업장 운영 중인 소상공인",
        "사업자 등록 1년 이상",
        "연 매출 10억원 이하"
      ]
    },
    {
      title: "디지털 전환 지원",
      description: "온라인 시장 진출과 디지털 마케팅 역량 강화 지원",
      details: [
        "온라인 쇼핑몰 구축 지원",
        "SNS 마케팅 교육 및 실습",
        "배달앱 입점 지원",
        "디지털 마케팅 비용 지원 (최대 200만원)"
      ],
      requirements: [
        "관악구 내 오프라인 매장 운영 소상공인",
        "온라인 판매 경험이 없거나 1년 미만",
        "스마트폰 또는 PC 활용 가능자"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container-width">
        <h1 className="heading-96 text-center mb-8">사업 안내</h1>
        <p className="text-2xl text-center text-gray-600 mb-16">
          관악구가 제공하는 다양한 지원 프로그램을 확인하세요
        </p>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-red-500 text-white p-6">
                <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
                <p className="text-lg opacity-90">{program.description}</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      지원 내용
                    </h3>
                    <ul className="space-y-2">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      지원 자격
                    </h3>
                    <ul className="space-y-2">
                      {program.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2">✓</span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-8">
            더 자세한 내용이 궁금하신가요?
          </p>
          <a
            href="/apply"
            className="inline-block px-12 py-5 bg-red-500 text-white text-xl font-bold rounded-lg hover:bg-red-600 transition-colors"
          >
            지원 신청하기
          </a>
        </div>
      </div>
    </div>
  );
}