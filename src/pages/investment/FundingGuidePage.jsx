import React, { useState } from "react";

const FundingGuidePage = () => {
  const [investment, setInvestment] = useState("");
  const [period, setPeriod] = useState("3");
  const [openFaq, setOpenFaq] = useState(null);

  // 숫자 포맷팅 함수
  const formatNumber = (num) => {
    const numbers = num.replace(/[^0-9]/g, "");
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 한글 금액 변환 함수
  const convertToKorean = (num) => {
    const units = ["", "만", "억", "조"];
    const numbers = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
    const tenUnits = ["", "십", "백", "천"];

    if (num === 0) return "영";

    let result = "";
    let unitIndex = 0;
    let numStr = String(num);

    while (numStr.length > 0) {
      let segment = numStr.slice(-4);
      numStr = numStr.slice(0, -4);

      if (segment !== "0000") {
        let segmentResult = "";
        for (let i = 0; i < segment.length; i++) {
          const digit = parseInt(segment[i]);
          if (digit !== 0) {
            segmentResult += numbers[digit] + tenUnits[segment.length - 1 - i];
          }
        }
        result = segmentResult + units[unitIndex] + result;
      }

      unitIndex++;
    }

    return result;
  };

  // 입력값 처리 함수
  const handleInvestmentChange = (e) => {
    const formattedNumber = formatNumber(e.target.value);
    setInvestment(formattedNumber);
  };

  // 수익률 계산 함수
  const calculateReturn = () => {
    const amount = parseFloat(investment.replace(/,/g, ""));
    if (!amount) return "0";

    const monthlyReturn = Math.round((amount * 0.08) / 12);
    return monthlyReturn.toLocaleString();
  };

  // FAQ 데이터
  const faqs = [
    {
      question: "최소 펀딩 금액은 얼마인가요?",
      answer:
        "최소 펀딩 금액은 2,000만원부터 시작합니다. 이는 안정적인 수익 창출을 위한 최소 단위입니다.",
    },
    {
      question: "예상 수익률은 어떻게 되나요?",
      answer:
        "물건의 위치와 상태에 따라 다르지만, 평균적으로 연 7~9%의 수익률을 목표로 하고 있습니다.",
    },
    {
      question: "수익 분배는 어떻게 이루어지나요?",
      answer:
        "숙박 수익은 매월 정산되어 투자 비율에 따라 분배됩니다. 정산 내역은 마이페이지에서 확인 가능합니다.",
    },
    {
      question: "리모델링 과정은 어떻게 진행되나요?",
      answer:
        "전문 시공사를 통해 진행되며, 전 과정을 실시간으로 확인하실 수 있습니다. 정기적인 현장 방문도 가능합니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 배너 */}
      <div className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">크라우드펀딩 시작하기</h1>
          <p className="text-xl mb-8">
            빈집의 가치를 높이는 새로운 투자 방식을 경험해보세요
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/projects")}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50"
            >
              지금 시작하기
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
              자세히 알아보기
            </button>
          </div>
        </div>
      </div>

      {/* 수익률 계산기 */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">예상 수익률 계산기</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                펀딩 금액
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={investment}
                  onChange={handleInvestmentChange}
                  placeholder="예: 20,000,000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  원
                </span>
              </div>
              {investment && (
                <p className="mt-2 text-sm text-gray-600">
                  {convertToKorean(investment.replace(/,/g, ""))}원
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                투자 기간
              </label>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="3">3년</option>
                <option value="5">5년</option>
                <option value="7">7년</option>
              </select>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">예상 월 수익</div>
              <div className="text-3xl font-bold text-green-600">
                {calculateReturn()}원
              </div>
              <div className="mt-2 text-sm text-gray-500">
                연 수익률 8% 기준
              </div>
            </div>
            <div className="text-sm text-gray-500">
              * 위 수익률은 예상 수치이며, 실제 수익률은 다를 수 있습니다.
            </div>
          </div>
        </div>
      </div>

      {/* 크라우드펀딩 절차 */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-12 text-center">
          크라우드펀딩 절차
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "회원가입", desc: "본인인증 및 투자자 등록" },
            { step: "02", title: "프로젝트 선택", desc: "투자 상품 정보 확인" },
            { step: "03", title: "펀딩 참여", desc: "온라인 펀딩 계약 체결" },
            { step: "04", title: "수익금 수령", desc: "매월 정기 수익 지급" },
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

      {/* 자주 묻는 질문 */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">자주 묻는 질문</h2>
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 문의하기 */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              더 궁금하신 점이 있으신가요?
            </h2>
            <p className="text-gray-600 mb-8">
              크라우드펀딩 관련 문의사항이 있으시다면 언제든 연락주세요.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingGuidePage;
