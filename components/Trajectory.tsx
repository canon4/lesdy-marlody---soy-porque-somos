import React from 'react';
import { Heart, Sprout, Palette } from 'lucide-react';

const Trajectory: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-jungle/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
           <h2 className="text-earth font-bold tracking-wider uppercase text-sm mb-4">Trayectoria</h2>
           <h3 className="text-3xl md:text-5xl font-extrabold text-textdark mb-6">"Cumplir la Palabra"</h3>
           <p className="text-xl text-textmuted font-semibold max-w-3xl mx-auto">
             Una trayectoria que respalda la palabra.
           </p>
           <div className="mt-6 p-6 bg-offwhite inline-block rounded-xl border-l-4 border-jungle shadow-sm max-w-3xl">
             <p className="text-textdark text-lg leading-relaxed">
               Aquí no hay cargos para exhibir. Hay <strong className="text-jungle">resultados</strong>, procesos sostenidos y comunidades que dan testimonio.
             </p>
           </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Reparation */}
            <div className="bg-offwhite rounded-2xl p-8 border-t-4 border-jungle shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-jungle/10 text-jungle rounded-full flex items-center justify-center mb-6 self-center md:self-start">
                    <Heart size={28} />
                </div>
                <h4 className="text-xl font-bold text-textdark mb-6 text-center md:text-left">
                    Reparación y víctimas
                </h4>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-jungle rounded-full mt-2 shrink-0"></span>
                        <span>Profesional y asesora en la <strong>Unidad para las Víctimas</strong> (hasta 2025)</span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-jungle rounded-full mt-2 shrink-0"></span>
                        <span>Trabajo directo en procesos de <strong>reparación integral</strong>, con enfoque psicosocial y de dignificación</span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-jungle rounded-full mt-2 shrink-0"></span>
                        <span><strong>Reconocida por la UARIV</strong> como símbolo de empoderamiento de la mujer afro en el sur del país</span>
                    </li>
                </ul>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="text-sm italic text-gray-600">
                        "Su labor ha estado centrada en sanar, acompañar y devolver la voz a quienes fueron silenciados por la violencia."
                    </p>
                </div>
            </div>

            {/* Card 2: Development */}
            <div className="bg-offwhite rounded-2xl p-8 border-t-4 border-success shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-success/10 text-success rounded-full flex items-center justify-center mb-6 self-center md:self-start">
                    <Sprout size={28} />
                </div>
                <h4 className="text-xl font-bold text-textdark mb-6 text-center md:text-left">
                    Desarrollo y territorio
                </h4>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 shrink-0"></span>
                        <span>Coordinadora de <strong>programas étnicos en CORPOAMAZONIA</strong></span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 shrink-0"></span>
                        <span>Consultora para <strong>WWF</strong></span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 shrink-0"></span>
                        <span>Coordinadora de <strong>proyectos productivos y comunitarios</strong></span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 shrink-0"></span>
                        <span>Impulsora del <strong>liderazgo juvenil amazónico</strong> – DALE AMAZONÍA</span>
                    </li>
                </ul>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="text-sm italic text-gray-600">
                        "Ha trabajado para que el desarrollo del territorio sea sostenible, inclusivo y construido desde las comunidades."
                    </p>
                </div>
            </div>

            {/* Card 3: Culture */}
            <div className="bg-offwhite rounded-2xl p-8 border-t-4 border-gold shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6 self-center md:self-start">
                    <Palette size={28} />
                </div>
                <h4 className="text-xl font-bold text-textdark mb-6 text-center md:text-left">
                    Cultura y educación
                </h4>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                        <span>Fundadora de <strong>FUNAMU</strong> (desde 2007)</span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                        <span>Creadora de <strong>SAMEE</strong> – moda con identidad afroamazónica</span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                        <span>Educadora en <strong>SENA</strong>, <strong>Secretaría de Educación</strong> y <strong>COMFACA</strong></span>
                    </li>
                    <li className="text-sm text-textmuted flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                        <span>Investigadora de la <strong>Comisión de la Verdad</strong></span>
                    </li>
                </ul>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="text-sm italic text-gray-600">
                        "La cultura y la educación han sido herramientas para la memoria, la identidad y la transformación social."
                    </p>
                </div>
            </div>

        </div>

        {/* Closing */}
        <div className="mt-20 text-center animate-fade-in-up">
            <h3 className="text-2xl md:text-4xl font-extrabold text-textdark mb-4">
                No hablo de promesas:
            </h3>
             <span className="inline-block px-8 py-3 bg-jungle text-white text-xl md:text-3xl font-bold rounded-full shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                ¡Hablo de hechos!
            </span>
        </div>

      </div>
    </section>
  );
};

export default Trajectory;