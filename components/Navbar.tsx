import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { ASSETS } from '../constants';

interface NavbarProps {
  currentView: 'home' | 'proposals' | 'curul' | 'recognitions';
  onNavigate: (view: 'home' | 'proposals' | 'curul' | 'recognitions', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (sectionId === 'propuestas-page') {
        onNavigate('proposals');
    } else if (sectionId === 'curul-page') {
        onNavigate('curul');
    } else if (sectionId === 'reconocimientos-page') {
        onNavigate('recognitions');
    } else {
        onNavigate('home', sectionId);
    }
  };

  const navLinks = [
    { name: 'Quién soy', id: 'quien-soy' },
    { name: 'Propuestas', id: 'propuestas-page' },
    { name: 'Curul de Paz', id: 'curul-page' },
    { name: 'Reconocimientos', id: 'reconocimientos-page' }, // New link
    { name: 'Galería', id: 'galeria' },
    { name: 'Súmate', id: 'sumate' },
  ];

  const isSolidNavbar = isScrolled || currentView !== 'home';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:bg-white md:shadow-md md:py-2 ${
          isSolidNavbar ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a 
                href="#" 
                onClick={(e) => handleLinkClick(e, 'hero')}
                className="flex-shrink-0 cursor-pointer"
              >
                <img 
                  className={`h-14 md:h-24 w-auto transition-all duration-300 md:filter-none ${(isSolidNavbar) ? '' : 'brightness-0 invert'}`} 
                  src={ASSETS.logos.black} 
                  alt="Lesdy Marlody Logo" 
                />
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`group relative text-sm md:text-base font-semibold transition-colors cursor-pointer md:text-textdark ${
                    (isSolidNavbar) ? 'text-textdark' : 'text-white'
                  } ${
                      (currentView === 'proposals' && link.id === 'propuestas-page') || 
                      (currentView === 'curul' && link.id === 'curul-page') ||
                      (currentView === 'recognitions' && link.id === 'reconocimientos-page')
                      ? 'text-gold' : 'hover:text-gold md:hover:text-textdark'
                  }`}
                >
                  {link.name}
                  {/* Purple Underline Animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jungle transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                  href="https://wa.me/573107799507" 
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 bg-success text-white hover:bg-green-600 shadow-md transform hover:scale-105`}
              >
                  <MessageCircle size={18} />
                  WhatsApp
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 rounded-md ${
                    (isSolidNavbar) ? 'text-textdark' : 'text-white'
                }`}
                aria-label="Abrir menú"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (Drawer) */}
      <div 
        className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <div 
          className={`relative z-10 w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
             <img src={ASSETS.logos.black} alt="Logo Menu" className="h-20 w-auto" />
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-textmuted hover:text-jungle p-2 rounded-full hover:bg-offwhite transition-colors"
             >
                <X size={28} />
             </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`flex items-center justify-between text-lg font-semibold text-textdark hover:text-jungle py-3 border-b border-gray-50 group ${
                    (currentView === 'proposals' && link.id === 'propuestas-page') || 
                    (currentView === 'curul' && link.id === 'curul-page') ||
                    (currentView === 'recognitions' && link.id === 'reconocimientos-page')
                    ? 'text-jungle' : ''
                }`}
              >
                {link.name}
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-jungle transition-colors" />
              </a>
            ))}

            <div className="mt-8">
                 <a 
                    href="https://wa.me/573107799507"
                    className="w-full flex items-center justify-center gap-2 bg-success text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
                >
                    <MessageCircle size={20} />
                    Hablemos por WhatsApp
                </a>
            </div>
            
            <div className="h-20"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;