import React, { useEffect, useRef, useState } from 'react';
import { CONTENT } from '../constants';

interface TextPart {
  text: string;
  className?: string;
  isBold?: boolean;
}

const Manifesto: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Typewriter state
  const [displayedCharCount, setDisplayedCharCount] = useState(0);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  // Define the text structure to preserve styling while typing
  const textParts: TextPart[] = [
    { text: "Creo en una Colombia donde la " },
    { text: "dignidad", isBold: true, className: "text-jungle" },
    { text: " no sea un privilegio, sino un derecho. Donde el " },
    { text: "territorio", isBold: true, className: "text-jungle" },
    { text: " no sea una frontera del Estado, sino el corazón de sus decisiones. Donde la " },
    { text: "felicidad", isBold: true, className: "text-earth" },
    { text: " se construya con oportunidades reales, seguridad humana y respeto por la identidad." }
  ];

  // Calculate total length
  const totalLength = textParts.reduce((acc, part) => acc + part.text.length, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (entry.target === textRef.current) {
            setHasStartedTyping(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (hasStartedTyping && displayedCharCount < totalLength) {
      const timeout = setTimeout(() => {
        setDisplayedCharCount(prev => prev + 1);
      }, 30); // Speed of typing in ms
      return () => clearTimeout(timeout);
    }
  }, [hasStartedTyping, displayedCharCount, totalLength]);

  // Helper to render the visible portion of the text
  const renderTypewriterText = () => {
    let currentCount = 0;
    
    return textParts.map((part, index) => {
      const partStart = currentCount;
      const partEnd = currentCount + part.text.length;
      
      // If we haven't reached this part yet
      if (displayedCharCount <= partStart) {
        currentCount += part.text.length;
        return null; 
      }

      // Calculate how much of this part to show
      const charsToShow = Math.min(part.text.length, displayedCharCount - partStart);
      const visibleText = part.text.substring(0, charsToShow);
      
      currentCount += part.text.length;

      if (part.isBold) {
        return (
          <strong key={index} className={part.className}>
            {visibleText}
          </strong>
        );
      }
      return <span key={index}>{visibleText}</span>;
    });
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-jungle font-bold tracking-wider uppercase text-sm mb-4">Nuestro Manifiesto</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-textdark mb-8 font-sans">
          Juntos Transformamos.
        </h3>
        <div className="w-24 h-1 bg-earth mx-auto mb-10 rounded-full"></div>
        
        {/* Typewriter container */}
        <div ref={textRef} className="min-h-[150px] md:min-h-[120px] flex items-center justify-center">
          <p className="text-lg md:text-2xl text-textdark leading-relaxed font-light">
             {renderTypewriterText()}
             {/* Cursor effect */}
             {hasStartedTyping && displayedCharCount < totalLength && (
               <span className="inline-block w-1 h-6 md:h-8 bg-jungle ml-1 animate-pulse align-middle"></span>
             )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT.values.map((value, idx) => (
            <div 
              key={idx} 
              className={`bg-offwhite p-8 rounded-2xl hover:shadow-xl transition-all duration-1000 border-b-4 border-gold group transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-textdark mb-2">{value.title}</h4>
              <p className="text-textmuted">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;