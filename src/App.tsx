import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import image1 from "./assets/image1.webp";
import oldHeroImage from "./assets/oldhero.png";

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
    }, 3000);

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
          imageSrc={image1}
          imageAlt="deMITasse Energies zero-emission engine technology"
          heading="Core Technology"
          description="deMITasse Energies is building a new class of power plants based on an in-house developed closed-loop, non-combusting thermodynamic cycle. Instead of relying on conventional combustion, the system uses proprietary working fluids and catalytic processes to move energy through the plant with high efficiency and very low losses. The result is a power platform designed to produce electricity reliably, inexpensively, and without direct emissions at the point of generation. A key advantage of the approach is its ability to store energy thermochemically, which means the system can hold grid-scale energy for long durations and release it when needed. That makes it especially valuable for balancing intermittent renewable sources such as solar and wind, where dispatchability and storage are often the missing pieces. The technology is intended to support both clean power generation and energy resilience, offering a pathway toward systems that are not only lower-carbon but also more practical for real-world grid operations."
        />
        <ContentSection
          reverse={true}
          imageSrc={oldHeroImage}
          imageAlt="deMITasse Energies clean energy infrastructure concept"
          heading="Applications and Scale"
          description="The broader value of deMITasse Energies lies in the range of applications the platform can support. Beyond grid-connected clean power, the same underlying technology can be adapted for standalone solar thermal plants, industrial waste heat recovery, marine propulsion, rural electrification, EV charging infrastructure, and long-duration off-grid systems. That flexibility is important because different sectors face different constraints, but all of them need dependable energy that is cleaner and easier to scale. For industrial users, the system could turn waste heat into useful power and improve overall efficiency. For remote communities or military sites, it could provide stable off-grid generation where fuel logistics are expensive or unreliable. In transportation and mobility, it could contribute to marine and electric charging applications that need dense, steady energy supply. The goal is not just to create another generation technology, but to offer a platform that can be deployed wherever conventional solutions are too costly, too intermittent, or too polluting. In that sense, the technology is built to scale across use cases rather than serve only one narrow market."
        />
      </main>
      <Footer />
    </div>
  );
}
