import React from "react";

const MyPage = () => {
  // 임시 투자 내역 데이터
  const investments = [
    {
      id: 1,
      projectTitle: "강원도 속초 게스트하우스",
      investmentAmount: 2000000,
      expectedReturn: "8%",
      investmentDate: "2023-01-15",
    },
    {
      id: 2,
      projectTitle: "제주도 서귀포 풀빌라",
      investmentAmount: 3000000,
      expectedReturn: "9%",
      investmentDate: "2023-02-20",
    },
    {
      id: 3,
      projectTitle: "경주 한옥 스테이",
      investmentAmount: 1500000,
      expectedReturn: "7%",
      investmentDate: "2023-03-10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">마이페이지</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">내 투자 내역</h3>
          {investments.length === 0 ? (
            <p>투자 내역이 없습니다.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    프로젝트
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    투자 금액
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    예상 수익률
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    투자 날짜
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {investments.map((investment) => (
                  <tr key={investment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {investment.projectTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {investment.investmentAmount.toLocaleString()} 원
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {investment.expectedReturn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {investment.investmentDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
