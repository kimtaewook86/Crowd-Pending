import React, { useState } from "react";

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [contactMessage, setContactMessage] = useState("");

  // FAQ 데이터
  const faqs = [
    {
      question: "최소 펀딩 금액은 얼마인가요?",
      answer: "최소 펀딩 금액은 2,000만원부터 시작합니다.",
    },
    {
      question: "예상 수익률은 어떻게 되나요?",
      answer:
        "물건의 위치와 상태에 따라 다르지만, 평균적으로 연 7~9%의 수익률을 목표로 하고 있습니다.",
    },
    {
      question: "수익 분배는 어떻게 이루어지나요?",
      answer: "숙박 수익은 매월 정산되어 투자 비율에 따라 분배됩니다.",
    },
    {
      question: "리모델링 과정은 어떻게 진행되나요?",
      answer:
        "전문 시공사를 통해 진행되며, 전 과정을 실시간으로 확인하실 수 있습니다.",
    },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`문의 내용: ${contactMessage}`);
    setContactMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">고객 지원</h2>

        {/* FAQ 섹션 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">자주 묻는 질문</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left font-medium text-gray-700"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.question}
              </button>
              {openFaq === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* 문의하기 섹션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">문의하기</h3>
          <form onSubmit={handleContactSubmit}>
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="문의 내용을 입력하세요..."
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
