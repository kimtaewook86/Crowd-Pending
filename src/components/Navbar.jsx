import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // 네비게이션 메뉴 데이터
  const investMenus = [
    { title: "투자 프로젝트", link: "/investment/projects" },
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
          <div
            className="flex items-center relative"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <div
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className="text-xl font-bold text-gray-800">
                🏘️ HostHelper
              </span>
            </div>

            {/* 로고 호버시 나타나는 메뉴 */}
            {showMenu && (
              <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <div
                  onClick={() => navigate("/")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  홈
                </div>
                <div
                  onClick={() => navigate("/about")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  서비스 소개
                </div>
                <div className="border-t border-gray-100">
                  <p className="px-4 py-2 text-xs text-gray-500 font-semibold">
                    투자하기
                  </p>
                  {investMenus.map((menu, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(menu.link)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {menu.title}
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100">
                  <p className="px-4 py-2 text-xs text-gray-500 font-semibold">
                    예약하기
                  </p>
                  {bookingMenus.map((menu, index) => (
                    <div
                      key={index}
                      onClick={() => navigate(menu.link)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {menu.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {/* ... 기존 메뉴 항목들 ... */}
            </div>

            {/* 로그인/회원가입 버튼 */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                로그인
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
              >
                회원가입
              </button>
            </div>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center space-x-4">
            {/* 모바일 로그인/회원가입 버튼 */}
            <button
              onClick={() => navigate("/login")}
              className="text-gray-600 hover:text-green-600 text-sm"
            >
              로그인
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700"
            >
              가입
            </button>

            {/* 햄버거 메뉴 버튼 */}
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
            {/* ... 기존 모바일 메뉴 항목들 ... */}
          </div>

          {/* 모바일 메뉴에서는 로그인/회원가입 버튼이 이미 상단에 있으므로 여기서는 제외 */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
