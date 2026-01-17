import React, { useEffect, useRef, useState } from 'react';
import { CONTENT } from '../constants';

const Axes: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="propuestas" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-jungle font-bold tracking-wider uppercase text-sm mb-4">Nuestra Propuesta</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-textdark">Ejes de Acción</h3>
          <p className="mt-4 text-textmuted max-w-2xl mx-auto">
            Mensajes claros para transformar nuestra realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.axes.map((axis, idx) => (
            <div 
              key={axis.id} 
              className={`relative group transform transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute inset-0 bg-jungle transform rotate-1 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative h-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="w-12 h-12 bg-jungle-light text-jungle rounded-full flex items-center justify-center mb-6 group-hover:bg-jungle group-hover:text-white transition-colors duration-300">
                  {axis.icon && React.cloneElement(axis.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h4 className="text-lg font-bold text-textdark mb-3 group-hover:text-jungle transition-colors">{axis.title}</h4>
                <p className="text-sm text-textmuted leading-relaxed">
                  {axis.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Axes;