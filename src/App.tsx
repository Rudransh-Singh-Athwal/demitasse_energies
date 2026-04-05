import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-darkBg transition-colors">
      <Navbar />
      <main>
        <Hero />
        <ContentSection />
        <ContentSection reverse={true} />
      </main>
      <Footer />
    </div>
  );
}
