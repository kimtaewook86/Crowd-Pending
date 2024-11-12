import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 네비게이션 메뉴 데이터
  const investMenus = [
    { title: "투자 가이드", link: "/info/guide" },
    { title: "투자 절차", link: "/info/process" },
    { title: "위험 고지", link: "/info/risk" },
    { title: "수익률 현황", link: "/info/returns" },
  ];

  const bookingMenus = [
    { title: "숙소 검색", link: "/booking/search" },
    { title: "프로모션", link: "/booking/promotions" },
    { title: "이용 가이드", link: "/booking/guide" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* 로고 섹션 */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">
                🏘️ HostHelper
              </span>
            </a>
          </div>

          {/* 메인 네비게이션 - 데스크톱 */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {/* 투자 관련 드롭다운 */}
              <div className="relative group">
                <button className="text-gray-600 group-hover:text-green-600 px-3 py-2 text-sm font-medium">
                  투자하기
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                  <a
                    href="/investments"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    투자 물건 보기
                  </a>
                  {investMenus.map((menu, index) => (
                    <a
                      key={index}
                      href={menu.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {menu.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* 예약 관련 드롭다운 */}
              <div className="relative group">
                <button className="text-gray-600 group-hover:text-green-600 px-3 py-2 text-sm font-medium">
                  예약하기
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                  {bookingMenus.map((menu, index) => (
                    <a
                      key={index}
                      href={menu.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {menu.title}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/properties"
                className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                숙소둘러보기
              </a>

              <a
                href="/about"
                className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                서비스 소개
              </a>
            </div>

            {/* 로그인/회원가입 버튼 */}
            <div className="flex items-center space-x-4">
              <a
                href="/mypage"
                className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                마이페이지
              </a>
              <a
                href="/login"
                className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                로그인
              </a>
              <a
                href="/register"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                회원가입
              </a>
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">메뉴 열기</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="border-b border-gray-200 pb-2">
              <p className="px-3 py-2 text-sm font-semibold text-gray-500">
                투자하기
              </p>
              <a
                href="/investments"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600"
              >
                투자 물건 보기
              </a>
              {investMenus.map((menu, index) => (
                <a
                  key={index}
                  href={menu.link}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600"
                >
                  {menu.title}
                </a>
              ))}
            </div>

            <div className="border-b border-gray-200 pb-2">
              <p className="px-3 py-2 text-sm font-semibold text-gray-500">
                예약하기
              </p>
              {bookingMenus.map((menu, index) => (
                <a
                  key={index}
                  href={menu.link}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600"
                >
                  {menu.title}
                </a>
              ))}
            </div>

            <a
              href="/properties"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600"
            >
              숙소둘러보기
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600"
            >
              서비스 소개
            </a>
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col px-5 space-y-2">
              <a
                href="/mypage"
                className="block text-base font-medium text-gray-600 hover:text-green-600"
              >
                마이페이지
              </a>
              <a
                href="/login"
                className="block text-base font-medium text-gray-600 hover:text-green-600"
              >
                로그인
              </a>
              <a
                href="/register"
                className="block text-base font-medium text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 text-center"
              >
                회원가입
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
