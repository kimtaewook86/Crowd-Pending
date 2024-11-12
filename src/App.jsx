import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProjectListPage from "./pages/investment/ProjectListPage";
import ProjectDetailPage from "./pages/investment/ProjectDetailPage";
import FundingGuidePage from "./pages/investment/FundingGuidePage";
import MyPage from "./pages/auth/MyPage";
import SupportPage from "./pages/auth/SupportPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/investment/projects" element={<ProjectListPage />} />
        <Route path="/investment/project/:id" element={<ProjectDetailPage />} />
        <Route path="/funding-guide" element={<FundingGuidePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </>
  );
};

export default App;
