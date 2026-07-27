import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AntiGravityCursor from "@/components/AntiGravityCursor";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import CareersApply from "@/pages/CareersApply";
import CareersApplyFulltime from "@/pages/CareersApplyFulltime";
import Contact from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <AntiGravityCursor />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/apply" element={<CareersApply />} />
        <Route path="/careers/apply-fulltime" element={<CareersApplyFulltime />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
