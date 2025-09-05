export default function Footer() {
  return (
    <footer className="bg-[#f8f6f6] mt-auto" style={{ height: '192px', borderTop: '1px solid #e5e5e5' }}>
      <div className="container-width h-full flex items-center justify-between" style={{ padding: '40px 200px' }}>
        <div className="flex" style={{ gap: '80px' }}>
          <div>
            <h3 className="font-semibold mb-[16px] text-black" style={{ fontSize: '20px', lineHeight: '28px' }}>관악구청</h3>
            <p className="text-[#8c8c8c]" style={{ fontSize: '16px', lineHeight: '24px' }}>
              서울특별시 관악구<br />
              관악로 145 (봉천동)
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-[16px] text-black" style={{ fontSize: '20px', lineHeight: '28px' }}>문의사항</h3>
            <p className="text-[#8c8c8c]" style={{ fontSize: '16px', lineHeight: '24px' }}>
              전화: 02-879-5000<br />
              이메일: info@gwanak.go.kr
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-[16px] text-black" style={{ fontSize: '20px', lineHeight: '28px' }}>운영시간</h3>
            <p className="text-[#8c8c8c]" style={{ fontSize: '16px', lineHeight: '24px' }}>
              평일: 09:00 - 18:00<br />
              주말 및 공휴일 휴무
            </p>
          </div>
        </div>
        
        <div className="text-[#8c8c8c]" style={{ fontSize: '14px', lineHeight: '20px' }}>
          <p>&copy; 2024 관악구청. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}