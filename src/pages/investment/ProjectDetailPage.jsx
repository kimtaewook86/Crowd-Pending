import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "../../components/PaymentForm";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [investmentAmount, setInvestmentAmount] = useState("");

  // 임시 프로젝트 데이터 (실제 데이터는 API 호출로 대체)
  const projects = [
    {
      id: 1,
      title: "강원도 속초 게스트하우스",
      location: "속초시 중앙로",
      avgPrice: "15만원",
      totalFunding: "3억원",
      minFunding: "2,000만원",
      expectedReturn: "8%",
      period: "3년",
      description: "속초의 아름다운 바다와 가까운 게스트하우스입니다.",
      image: "https://picsum.photos/600/400",
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
      description: "제주도 중문에 위치한 고급 풀빌라입니다.",
      image: "https://picsum.photos/600/400",
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
      description: "전통 한옥에서의 특별한 경험을 제공합니다.",
      image: "https://picsum.photos/600/400",
    },
  ];

  // 선택한 프로젝트 찾기
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const handleInvestmentChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // 쉼표 제거
    const formattedValue = Number(value).toLocaleString(); // 숫자 포맷팅
    setInvestmentAmount(formattedValue);
  };

  const handleInvestment = () => {
    const amount = parseInt(investmentAmount.replace(/,/g, ""));
    if (amount < parseInt(project.minFunding.replace(/,/g, ""))) {
      alert(`최소 투자 금액은 ${project.minFunding}입니다.`);
      return;
    }
    // 투자 처리 로직 (API 호출 등)
    alert(
      `투자 금액 ${amount.toLocaleString()}원이 성공적으로 처리되었습니다.`
    );
    // 투자 금액 초기화
    setInvestmentAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="text-sm text-gray-600">{project.location}</p>
            <p className="mt-4">{project.description}</p>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">예상 수익률</span>
                <span className="font-semibold">{project.expectedReturn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">투자 기간</span>
                <span className="font-semibold">{project.period}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">총 모집 금액</span>
                <span className="font-semibold">{project.totalFunding}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">최소 펀딩 금액</span>
                <span className="font-semibold">{project.minFunding}</span>
              </div>
            </div>

            {/* 투자 금액 입력 폼 */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                투자 금액
              </label>
              <input
                type="text"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                placeholder="예: 2,000,000"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <PaymentForm amount={investmentAmount.replace(/,/g, "")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
