import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">프로젝트 상세 정보 {id}</h1>
        {/* 상세 내용은 다음 단계에서 구현 */}
      </div>
    </div>
  );
};

export default ProjectDetail;
