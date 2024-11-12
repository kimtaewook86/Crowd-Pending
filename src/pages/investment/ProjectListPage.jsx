import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectListPage = () => {
  const navigate = useNavigate();

  // 임시 프로젝트 데이터
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">
          진행중인 크라우드펀딩 프로젝트
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-600">
                    연 {project.expectedReturn}
                  </span>
                  <span className="font-semibold">
                    {project.avgPrice} 평균 숙박가
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">목표 펀딩액</span>
                    <span className="font-semibold">
                      {project.totalFunding}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">최소 펀딩액</span>
                    <span className="font-semibold">{project.minFunding}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">운영 기간</span>
                    <span className="font-semibold">{project.period}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>진행률 {project.progress}%</span>
                    <span>D-{project.daysLeft}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="block w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
                >
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListPage;
