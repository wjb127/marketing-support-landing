export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">관악구청</h3>
            <p className="text-gray-600">
              서울특별시 관악구<br />
              관악로 145 (봉천동)
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">문의사항</h3>
            <p className="text-gray-600">
              전화: 02-879-5000<br />
              이메일: info@gwanak.go.kr
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">운영시간</h3>
            <p className="text-gray-600">
              평일: 09:00 - 18:00<br />
              주말 및 공휴일 휴무
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 관악구청. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}