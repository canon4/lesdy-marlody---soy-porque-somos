import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Bio from './components/Bio';
import Trajectory from './components/Trajectory';
import Pillars from './components/Pillars';
import Axes from './components/Axes';
import Gallery from './components/Gallery';
import JoinMovement from './components/JoinMovement';
import PoliticalClosing from './components/PoliticalClosing';
import Footer from './components/Footer';
import ProposalsPage from './components/ProposalsPage';
import CurulPage from './components/CurulPage';
import RecognitionsPage from './components/RecognitionsPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import TopBanner from './components/TopBanner';

type ViewState = 'home' | 'proposals' | 'curul' | 'recognitions';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    
    // Handle scrolling
    setTimeout(() => {
        if (view === 'home' && sectionId && sectionId !== 'hero') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? (
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
        ) : currentView === 'proposals' ? (
            <ProposalsPage onBack={() => handleNavigate('home')} />
        ) : currentView === 'curul' ? (
            <CurulPage onBack={() => handleNavigate('home')} />
        ) : (
            <RecognitionsPage onBack={() => handleNavigate('home')} />
        )}
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;