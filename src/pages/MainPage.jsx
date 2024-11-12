import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";

const MainPage = () => {
  const navigate = useNavigate();

  // 숙소별 데이터
  const properties = [
    {
      id: 1,
      title: "강원도 속초 게스트하우스",
      location: "속초시 중앙로",
      avgPrice: "15만원",
      totalFunding: "3억원",
      minFunding: "2,000만원",
      expectedReturn: "8%",
      period: "3년",
      progress: 60,
      daysLeft: 7,
      image: "https://picsum.photos/400/250",
    },
    {
      id: 2,
      title: "제주도 서귀포 풀빌라",
      location: "서귀포시 중문동",
      avgPrice: "25만원",
      totalFunding: "5억원",
      minFunding: "3,000만원",
      expectedReturn: "9%",
      period: "3년",
      progress: 45,
      daysLeft: 14,
      image: "https://picsum.photos/400/250",
    },
    {
      id: 3,
      title: "경주 한옥 스테이",
      location: "경주시 황남동",
      avgPrice: "18만원",
      totalFunding: "2억원",
      minFunding: "1,000만원",
      expectedReturn: "7%",
      period: "3년",
      progress: 85,
      daysLeft: 3,
      image: "https://picsum.photos/400/250",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">HostHelper</h1>
              <h2 className="text-2xl mb-6">
                빈집의 가치를 재발견하는 크라우드펀딩 플랫폼
              </h2>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm">평균 수익률</p>
                    <p className="text-3xl font-bold">8.5%</p>
                  </div>
                  <div>
                    <p className="text-sm">누적 펀딩금액</p>
                    <p className="text-3xl font-bold">150억+</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/funding-guide")}
                  className="w-full bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  크라우드펀딩 시작하기
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://picsum.photos/600/400"
                alt="성공사례"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 실시간 현황 */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-2">진행중인 프로젝트</h3>
              <p className="text-2xl font-bold">12개</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-2">평균 숙박 요금</h3>
              <p className="text-2xl font-bold">19.3만원</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-2">
                평균 수익 실현 기간
              </h3>
              <p className="text-2xl font-bold">3.2년</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-600 mb-2">참여자 수</h3>
              <p className="text-2xl font-bold">1,200+</p>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 목록 */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">진행중인 크라우드펀딩</h2>
          <button className="text-green-600 hover:text-green-700">
            전체보기
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  모집중
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">{property.title}</h3>
                    <p className="text-sm text-gray-600">{property.location}</p>
                  </div>
                  <span className="text-green-600">
                    연 {property.expectedReturn}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">평균 숙박가</span>
                    <span className="font-semibold">{property.avgPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">목표 펀딩액</span>
                    <span className="font-semibold">
                      {property.totalFunding}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">최소 펀딩액</span>
                    <span className="font-semibold">{property.minFunding}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">운영 기간</span>
                    <span className="font-semibold">{property.period}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${property.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>진행률 {property.progress}%</span>
                    <span>D-{property.daysLeft}</span>
                  </div>
                </div>
                <a
                  href={`/project/${property.id}`}
                  className="block w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  상세보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 프로세스 */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            크라우드펀딩 프로세스
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "물건 선정", desc: "전문가의 철저한 심사" },
              { step: "02", title: "펀딩 참여", desc: "안전한 펀딩금 관리" },
              { step: "03", title: "리모델링", desc: "전문 시공사 관리" },
              { step: "04", title: "수익 실현", desc: "안정적인 월 수익" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <span className="text-green-600 text-xl font-bold mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
