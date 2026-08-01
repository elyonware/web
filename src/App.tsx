import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SmokeyCursor from "@/components/SmokeyCursor";
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
      <SmokeyCursor
        densityDissipation={3.5}
        velocityDissipation={2}
        pressure={0.1}
        curl={3}
        splatRadius={0.2}
        splatForce={6000}
        colorUpdateSpeed={10}
        enableShading
      />
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
