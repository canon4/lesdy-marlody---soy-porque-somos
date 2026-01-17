import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from '../constants';
import { GraduationCap, Award, User, BookOpen } from 'lucide-react';

const Bio: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const end = 18;
      const duration = 2000; // 2 seconds
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [hasStarted]);

  return (
    <section id="quien-soy" className="py-20 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Who is She (Intro) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold rounded-tl-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-jungle rounded-br-3xl opacity-20"></div>
            <img 
              src={ASSETS.images.secondary} 
              alt="Lesdy en territorio" 
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl relative z-10"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-earth font-bold uppercase tracking-wider text-sm mb-2 block">Conoce a la candidata</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-textdark mb-6">
              Una voz que nace del territorio y camina con la gente
            </h2>
            <div className="space-y-4 text-textmuted text-lg">
              <p>
                Soy una mujer que ha construido su camino con esfuerzo, fe y trabajo colectivo.
                Madre, lideresa y gestora cultural.
              </p>
              <p>
                Con <strong className="text-jungle">más de 20 años de experiencia</strong> en liderazgo social, defensa de derechos, 
                gestión comunitaria y construcción de paz, he aprendido que los cambios reales se logran cuando la 
                comunidad se organiza y decide su propio futuro.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Detailed Profile & Education (NEW) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 animate-fade-in-up">
            
            {/* Identity & Projection */}
            <div>
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                    <User className="text-gold w-8 h-8" />
                    <h3 className="text-2xl font-bold text-textdark">Identidad y Trayectoria</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {['Mujer afroamazónica', 'Madre', 'Lideresa social', 'Víctima del desplazamiento'].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 font-medium text-textdark">
                                <span className="w-2 h-2 bg-jungle rounded-full shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-textmuted leading-relaxed text-sm md:text-base">
                        Lesdy Marlody Rodríguez Quiñones es una mujer del territorio amazónico que ha transformado el dolor del conflicto en liderazgo, compromiso y acción colectiva. Su vida está marcada por la defensa de la dignidad humana, la memoria y la justicia social en el Caquetá.
                    </p>
                </div>

                <div className="bg-earth/5 p-6 rounded-2xl border-l-4 border-earth">
                    <h4 className="font-bold text-earth mb-2 flex items-center gap-2">
                        <Award size={20} /> Proyección y Credibilidad
                    </h4>
                    <p className="text-sm text-textmuted">
                        Su trayectoria académica y social le ha permitido articular el conocimiento local con experiencias nacionales e internacionales, fortaleciendo propuestas serias, viables y con enfoque territorial para la construcción de paz y el desarrollo del Caquetá.
                    </p>
                </div>
            </div>

            {/* Academic Formation */}
            <div>
                <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                    <GraduationCap className="text-gold w-8 h-8" />
                    <h3 className="text-2xl font-bold text-textdark">Formación Académica</h3>
                </div>
                
                <div className="space-y-4">
                    {[
                        { title: "Magíster en Gestión y Producción Cultural y Audiovisual", inst: "Universidad Jorge Tadeo Lozano" },
                        { title: "Especialista en Formulación y Evaluación de Proyectos", inst: "Universidad de la Amazonia" },
                        { title: "Formación internacional en creación y dirección de empresas sociales y ambientales", inst: "Universidad Complutense de Madrid – Fundación Carolina" },
                        { title: "Licenciada en Lengua Castellana y Literatura", inst: "" },
                        { title: "Normalista Superior", inst: "" },
                    ].map((edu, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
                            <div className="shrink-0 mt-1">
                                <BookOpen className="w-5 h-5 text-success" /> 
                            </div>
                            <div>
                                <h5 className="font-bold text-textdark leading-tight">{edu.title}</h5>
                                {edu.inst && <p className="text-xs md:text-sm text-jungle font-semibold mt-1">{edu.inst}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Part 3: Funamu (Existing) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
           <div className="flex flex-col md:flex-row items-start gap-8">
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                    <img src={ASSETS.logos.ubuntu} alt="Ubuntu Logo" className="w-16 h-16 rounded-full object-cover border-2 border-gold" />
                    <div>
                        <h3 className="text-2xl font-bold text-textdark">FUNAMU</h3>
                        <span className="text-sm text-earth font-semibold">18 años de historia</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold text-jungle mb-4">Una historia de territorio y dignidad</h4>
                <p className="text-textmuted mb-4">
                    En 2007 fundé <strong>FUNAMU</strong>, una organización que ha tejido cultura, derechos humanos, 
                    liderazgo juvenil y empoderamiento de mujeres en el sur del país.
                </p>
                <p className="text-textmuted italic border-l-4 border-gold pl-4">
                   Esa historia es prueba de que sí se puede transformar el dolor en esperanza y el abandono en organización.
                </p>
             </div>
             <div ref={counterRef} className="w-full md:w-1/3 bg-jungle-light rounded-xl p-6 flex flex-col justify-center items-center text-center transform transition-transform hover:scale-105 duration-300">
                 <span className="text-6xl font-extrabold text-jungle mb-2">{count}</span>
                 <span className="text-lg font-bold text-textdark">Años Cumplidos</span>
                 <span className="text-sm text-textmuted mt-1">27 de abril de 2025</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;