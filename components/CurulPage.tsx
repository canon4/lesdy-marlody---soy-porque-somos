import React, { useEffect } from 'react';
import { ASSETS } from '../constants';
import Button from './Button';
import { ArrowLeft, CheckCircle2, Shield, Users, Megaphone, AlertCircle } from 'lucide-react';

interface CurulPageProps {
  onBack: () => void;
}

const CurulPage: React.FC<CurulPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-48 pb-20">
      
      {/* 1. Header Section: How to Vote (Striking) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in-up">
        <div className="text-center mb-8">
            <span className="bg-gold text-textdark px-4 py-1.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-md mb-4 inline-block">
                Pedagogía Electoral
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-jungle leading-tight">
                ¿Cómo votar por la <br /><span className="text-textdark">Curul de Paz?</span>
            </h1>
        </div>

        {/* Prominent Image Container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden border-4 border-gold/30">
            <picture>
                <source media="(min-width: 768px)" srcSet={ASSETS.images.heroDesktop} />
                <img 
                    src={ASSETS.images.howToVote} 
                    alt="Cómo marcar el tarjetón Curul de Paz" 
                    className="w-full h-auto object-cover"
                />
            </picture>
        </div>
        
        {/* Step by Step Text */}
        <div className="max-w-4xl mx-auto mt-12 bg-offwhite p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-textdark mb-6 border-b pb-4 border-gray-200">
                Pasos para votar correctamente:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-jungle text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">1</span>
                    <div>
                        <h4 className="font-bold text-textdark text-lg">Identifica</h4>
                        <p className="text-textmuted">Solicita el tarjetón especial de la Curul de Paz (CITREP). Es diferente al de Cámara territorial.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-jungle text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">2</span>
                    <div>
                        <h4 className="font-bold text-textdark text-lg">Busca</h4>
                        <p className="text-textmuted">Ubica la casilla con la foto y nombre de Lesdy Marlody o el logo de FUNAMU.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-jungle text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">3</span>
                    <div>
                        <h4 className="font-bold text-textdark text-lg">Marca</h4>
                        <p className="text-textmuted">Marca con una X clara sobre la casilla. No te salgas del recuadro.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-jungle text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">4</span>
                    <div>
                        <h4 className="font-bold text-textdark text-lg">Verifica</h4>
                        <p className="text-textmuted">Asegúrate de marcar una sola opción para no anular tu voto.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. What is it? */}
      <section className="bg-jungle/5 py-16 mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <div className="w-16 h-16 bg-white text-jungle rounded-2xl flex items-center justify-center mb-6 shadow-md border border-jungle/10">
                        <Megaphone size={36} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-textdark mb-4">¿Qué es la Curul de Paz?</h2>
                    <p className="text-lg text-textmuted leading-relaxed mb-6">
                        Las <strong>Curules de Paz</strong> son escaños especiales en la Cámara de Representantes diseñados para garantizar la participación política de las víctimas del conflicto armado y las comunidades históricamente excluidas.
                    </p>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-jungle shadow-sm">
                        <h4 className="font-bold text-jungle mb-2 flex items-center gap-2">
                            <Shield className="w-5 h-5" /> Propósito
                        </h4>
                        <p className="text-textmuted text-sm">
                            Buscan que los territorios más afectados por la violencia tengan voz directa en el Congreso para promover la verdad, la justicia, la reparación y la no repetición.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                     <h3 className="font-bold text-xl mb-6 text-center">¿Quiénes votan?</h3>
                     <div className="space-y-6">
                         <div className="flex items-start gap-4">
                             <div className="bg-earth/10 p-3 rounded-full text-earth">
                                 <Users size={24} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-textdark">Habitantes PDET</h4>
                                 <p className="text-sm text-textmuted mt-1">
                                     Están habilitadas para votar todas las personas inscritas en los municipios que conforman los <strong>Territorios PDET</strong>.
                                 </p>
                             </div>
                         </div>
                         
                         <div className="bg-gold/10 p-4 rounded-xl flex gap-3 items-start border border-gold/20">
                             <AlertCircle className="text-gold-dark shrink-0 mt-0.5" />
                             <div>
                                 <h4 className="font-bold text-gold-dark text-sm">Nota Aclaratoria</h4>
                                 <p className="text-xs text-textdark mt-1 leading-snug">
                                     No es obligatorio estar registrado como víctima para votar, pero es indispensable pertenecer a estos municipios definidos por la ley.
                                 </p>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Why is it important? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-extrabold text-center text-textdark mb-12">
            ¿Por qué es importante votar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Fortalecer la democracia", desc: "Empoderando a los territorios que fueron silenciados.", color: "bg-earth" },
                { title: "Dar voz", desc: "Permite que las víctimas y comunidades rurales sean escuchadas sin intermediarios.", color: "bg-jungle" },
                { title: "Defensa de derechos", desc: "Apoya los derechos humanos y la implementación real del Acuerdo de Paz.", color: "bg-success" },
                { title: "Transformación", desc: "Ayuda a convertir el dolor del conflicto en propuestas y soluciones reales.", color: "bg-gold" }
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-gray-100 hover:scale-105 transition-transform duration-300">
                    <div className={`w-3 h-3 ${item.color} rounded-full mb-4`}></div>
                    <h3 className="text-xl font-bold text-textdark mb-3">{item.title}</h3>
                    <p className="text-textmuted text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Footer / Back Button */}
      <div className="text-center px-4">
        <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
        </Button>
      </div>

    </div>
  );
};

export default CurulPage;