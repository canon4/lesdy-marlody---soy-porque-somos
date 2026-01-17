import React from 'react';
import { ASSETS, CONTENT } from '../constants';
import Button from './Button';
import { MessageCircle, HelpCircle, Hand, CheckSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
            <source media="(min-width: 768px)" srcSet={ASSETS.images.main} />
            <img 
                src={ASSETS.images.heroBgMobile} 
                alt="Lesdy Marlody" 
                className="w-full h-full object-cover object-center"
            />
        </picture>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-dark/80 via-transparent to-jungle-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24 md:pb-32 flex flex-col items-center text-center">
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2 drop-shadow-2xl text-white tracking-tight">
            {CONTENT.hero.title}
          </h1>
          
          {/* Slogan */}
          <h2 className="text-2xl md:text-4xl font-bold text-gold mb-8 drop-shadow-lg italic">
            {CONTENT.hero.titleHighlight}
          </h2>

          {/* Divider */}
          <div className="w-24 h-1.5 bg-white/80 mx-auto mb-8 rounded-full shadow-lg"></div>

          {/* Role Block */}
          <div className="mb-8 space-y-2">
              <p className="text-xl md:text-3xl text-white font-bold uppercase tracking-wider drop-shadow-md">
                 {CONTENT.hero.role}
              </p>
              <p className="text-lg md:text-2xl text-jungle-light font-medium drop-shadow-md">
                 {CONTENT.hero.region}
              </p>
          </div>

          {/* Message Box */}
          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-12 max-w-4xl shadow-2xl">
            <p className="text-lg md:text-2xl font-medium text-white leading-relaxed">
               {CONTENT.hero.description}
            </p>
          </div>

          {/* Buttons CTA Grid */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center w-full max-w-6xl">
            
            {/* WhatsApp */}
            <Button 
                variant="whatsapp" 
                onClick={() => window.open('https://wa.me/573107799507', '_blank')}
                className="w-full md:w-auto shadow-xl hover:shadow-2xl px-6 py-4 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Escríbenos por WhatsApp
            </Button>
            
            {/* Votar - Placeholder anchor or modal trigger in future */}
            <Button 
                variant="secondary" 
                onClick={() => {
                   // Scroll to a "how to vote" section if exists, or just proposals for now
                   const el = document.getElementById('propuestas');
                   if(el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto shadow-xl hover:shadow-2xl px-6 py-4 text-lg"
            >
              <HelpCircle className="w-6 h-6 mr-2" />
              ¿Cómo votar por la Curul de Paz?
            </Button>

            {/* Sumate */}
            <Button 
                variant="outline" 
                className="!text-white !border-white hover:!bg-white hover:!text-jungle w-full md:w-auto shadow-xl px-6 py-4 text-lg"
                onClick={() => document.getElementById('sumate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Hand className="w-6 h-6 mr-2" />
              Súmate / Voluntariado
            </Button>
             
             {/* CITREP Badge/Button */}
             <div className="bg-offwhite text-textdark px-8 py-3 rounded-full font-extrabold text-lg border-4 border-gold shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform cursor-default w-full md:w-auto min-w-[150px]">
                <CheckSquare className="w-6 h-6 mr-2 text-gold" />
                CITREP
             </div>

          </div>
          
      </div>
    </div>
  );
};

export default Hero;