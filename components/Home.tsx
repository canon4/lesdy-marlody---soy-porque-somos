import { useState } from "react";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import Bio from "./Bio";
import Trajectory from "./Trajectory";
import Pillars from "./Pillars";
import Axes from "./Axes";
import Gallery from "./Gallery";
import JoinMovement from "./JoinMovement";
import PoliticalClosing from "./PoliticalClosing";
import ProposalsPage from "./ProposalsPage";
import CurulPage from "./CurulPage";
import RecognitionsPage from "./RecognitionsPage";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

type ViewState = "home" | "proposals" | "curul" | "recognitions";

const Home = () => {
  const [currentView, setCurrentView] = useState<ViewState>("home");

  const handleNavigate = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);

    setTimeout(() => {
      if (view === "home" && sectionId && sectionId !== "hero") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      <main>
        {currentView === "home" ? (
          <>
            <TopBanner />
            <Hero />
            <Manifesto />
            <Bio />
            <Trajectory />
            <Pillars />
            <Axes />
            <Gallery />
            <JoinMovement />
            <PoliticalClosing />
          </>
        ) : currentView === "proposals" ? (
          <ProposalsPage onBack={() => handleNavigate("home")} />
        ) : currentView === "curul" ? (
          <CurulPage onBack={() => handleNavigate("home")} />
        ) : (
          <RecognitionsPage onBack={() => handleNavigate("home")} />
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
