import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import image1 from "./assets/image1.webp";
import heroImage from "./assets/hero.png";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dark, setDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      return true;
    }
    if (storedTheme === "light") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-darkBg transition-colors">
      <Navbar dark={dark} onToggleDark={() => setDark((current) => !current)} />
      <main>
        <Hero />
        <ContentSection
          title="Zero-Emission Engine Platform"
          content="At deMITasse Energies, we are pioneering the future of clean technology by building efficient, reliable, and inexpensive zero-emission power plants. Our core innovation lies in an in-house developed, closed-loop, non-combusting thermodynamic cycle that operates using proprietary working fluids and catalytic processes. This advanced engine design generates power with exceptional thermal efficiency while maintaining absolute zero emissions. Furthermore, our technology uniquely solves the challenge of renewable energy volatility by enabling long-duration, grid-scale energy storage. By storing energy thermochemically, we overcome the brief storage capacity of standard lithium-ion batteries, allowing energy to be retained for months with negligible losses and at a fraction of current costs. From capturing industrial waste heat to powering advanced marine propulsion and submarine systems, we provide the essential infrastructure required to make the global transition to renewable energy both sustainable and economical."
          imageSrc={image1}
          imageAlt="Close-up of deMITasse Energies clean engine technology"
        />
        <ContentSection
          title="Long-Duration Energy Storage"
          content="At deMITasse Energies, we are pioneering the future of clean technology by building efficient, reliable, and inexpensive zero-emission power plants. Our core innovation lies in an in-house developed, closed-loop, non-combusting thermodynamic cycle that operates using proprietary working fluids and catalytic processes. This advanced engine design generates power with exceptional thermal efficiency while maintaining absolute zero emissions. Furthermore, our technology uniquely solves the challenge of renewable energy volatility by enabling long-duration, grid-scale energy storage. By storing energy thermochemically, we overcome the brief storage capacity of standard lithium-ion batteries, allowing energy to be retained for months with negligible losses and at a fraction of current costs. From capturing industrial waste heat to powering advanced marine propulsion and submarine systems, we provide the essential infrastructure required to make the global transition to renewable energy both sustainable and economical."
          imageSrc={heroImage}
          imageAlt="deMITasse Energies renewable storage concept illustration"
          reverse={true}
        />
      </main>
      <Footer />
    </div>
  );
}
