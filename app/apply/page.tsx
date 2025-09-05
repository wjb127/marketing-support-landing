'use client'

import { useState } from 'react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    // 기본 정보
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessNumber: '',
    
    // 사업 정보
    businessType: '',
    businessAddress: '',
    establishedDate: '',
    employeeCount: '',
    annualRevenue: '',
    
    // 지원 프로그램 선택 (중복 가능)
    programs: {
      startup: false,
      consulting: false,
      digital: false,
    },
    
    // 추가 정보
    description: '',
    sns: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (program: keyof typeof formData.programs) => {
    setFormData(prev => ({
      ...prev,
      programs: {
        ...prev.programs,
        [program]: !prev.programs[program]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
    console.log('Form Data:', formData);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container-width max-w-4xl">
        <h1 className="heading-96 text-center mb-8">지원 신청</h1>
        <p className="text-2xl text-center text-gray-600 mb-16">
          아래 양식을 작성하여 지원 프로그램에 신청하세요
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 기본 정보 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-red-500">기본 정보</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  사업자등록번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessNumber"
                  value={formData.businessNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="000-00-00000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 사업 정보 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-red-500">사업 정보</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  사업체명 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  업종 <span className="text-red-500">*</span>
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="retail">소매업</option>
                  <option value="food">음식업</option>
                  <option value="service">서비스업</option>
                  <option value="manufacturing">제조업</option>
                  <option value="other">기타</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">
                  사업장 주소 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  설립일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="establishedDate"
                  value={formData.establishedDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  직원 수 <span className="text-red-500">*</span>
                </label>
                <select
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="1">1명 (대표자 본인)</option>
                  <option value="2-5">2-5명</option>
                  <option value="6-10">6-10명</option>
                  <option value="11-20">11-20명</option>
                  <option value="20+">20명 이상</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  연매출 <span className="text-red-500">*</span>
                </label>
                <select
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">선택하세요</option>
                  <option value="under-50m">5천만원 미만</option>
                  <option value="50m-100m">5천만원 - 1억원</option>
                  <option value="100m-300m">1억원 - 3억원</option>
                  <option value="300m-500m">3억원 - 5억원</option>
                  <option value="500m-1b">5억원 - 10억원</option>
                  <option value="over-1b">10억원 이상</option>
                </select>
              </div>
            </div>
          </div>

          {/* 지원 프로그램 선택 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-red-500">
              지원 프로그램 선택 <span className="text-sm font-normal text-gray-600">(중복 선택 가능)</span>
            </h2>
            <div className="space-y-4">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.programs.startup}
                  onChange={() => handleCheckboxChange('startup')}
                  className="mt-1 mr-3 w-5 h-5 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <div>
                  <span className="font-semibold">소상공인 창업 지원</span>
                  <p className="text-sm text-gray-600 mt-1">
                    창업 교육, 멘토링, 자금 지원 등
                  </p>
                </div>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.programs.consulting}
                  onChange={() => handleCheckboxChange('consulting')}
                  className="mt-1 mr-3 w-5 h-5 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <div>
                  <span className="font-semibold">경영 개선 컨설팅</span>
                  <p className="text-sm text-gray-600 mt-1">
                    경영 진단, 마케팅 전략, 재무 관리 교육 등
                  </p>
                </div>
              </label>
              
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.programs.digital}
                  onChange={() => handleCheckboxChange('digital')}
                  className="mt-1 mr-3 w-5 h-5 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <div>
                  <span className="font-semibold">디지털 전환 지원</span>
                  <p className="text-sm text-gray-600 mt-1">
                    온라인 쇼핑몰 구축, SNS 마케팅, 배달앱 입점 등
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-red-500">추가 정보</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  사업 소개 및 지원 신청 사유 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="사업 내용과 지원이 필요한 이유를 자세히 작성해주세요."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">
                  SNS 계정 (선택)
                </label>
                <input
                  type="text"
                  name="sns"
                  value={formData.sns}
                  onChange={handleInputChange}
                  placeholder="인스타그램, 페이스북 등 SNS 주소"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-5 bg-red-500 text-white text-xl font-bold rounded-lg hover:bg-red-600 transition-colors"
            >
              신청서 제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}