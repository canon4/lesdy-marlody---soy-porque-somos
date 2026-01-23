import React from "react";
import {
  BookOpen,
  Map,
  Feather,
  TrendingUp,
  ShieldCheck,
  Gavel,
  Quote,
} from "lucide-react";
import { ASSETS } from "../constants";

const Pillars: React.FC = () => {
  const pillars = [
    {
      title: "EDUCACIÓN",
      icon: (
        <img
          src={ASSETS.logos.educacion}
          alt="Descripción"
          className="w-full h-full object-contain "
        />
      ),
      color: "jungle", // Violeta
      items: [
        "Incidencia legislativa para una mayor inversión en educación rural.",
        "Defensa de becas y acceso a educación superior para víctimas del conflicto.",
        "Promoción de una educación con enfoque territorial, étnico y cultural.",
      ],
    },
    {
      title: "TURISMO RURAL SOSTENIBLE",
      icon: (
        <img
          src={ASSETS.logos.turismo}
          alt="Turismo Rural Sostenible"
          className="w-full h-full object-contain "
        />
      ),
      color: "success", // Verde
      items: [
        "Posicionar al Caquetá en la agenda nacional del turismo.",
        "Impulsar el turismo como motor económico de paz.",
        "Gestión de incentivos nacionales para economías rurales sostenibles.",
      ],
    },
    {
      title: "CULTURA",
      icon: (
        <img
          src={ASSETS.logos.cultura}
          alt="Cultura"
          className="w-full h-full object-contain "
        />
      ),
      color: "gold", // Naranja/Dorado
      items: [
        "Defensa de la cultura como economía, identidad y herramienta de reconciliación.",
        "Protección legislativa de los saberes afro, campesinos e indígenas.",
        "Promoción de la visibilidad nacional del talento amazónico.",
      ],
    },
    {
      title: "DESARROLLO ECONÓMICO",
      icon: (
        <img
          src={ASSETS.logos.desarrollo}
          alt="Desarrollo Económico"
          className="w-full h-full object-contain "
        />
      ),
      color: "earth", // Azul
      items: [
        "Impulso legislativo a las economías comunitarias.",
        "Apoyo a emprendimientos rurales y de mujeres.",
        "Garantizar acceso real a programas nacionales de fortalecimiento económico.",
      ],
    },
    {
      title: "REPARACIÓN A VÍCTIMAS",
      icon: (
        <img
          src={ASSETS.logos.reparacion}
          alt="Reparación a Víctimas"
          className="w-full h-full object-contain "
        />
      ),
      color: "jungle", // Violeta (Repite para énfasis)
      items: [
        "Defensa irrestricta de los derechos de las víctimas.",
        "Seguimiento político al cumplimiento de las obligaciones del Estado.",
        "Garantizar la participación real de las víctimas en la toma de decisiones.",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "jungle":
        return "bg-jungle/10 text-jungle border-jungle";
      case "success":
        return "bg-success/10 text-success border-success";
      case "gold":
        return "bg-gold/10 text-gold-dark border-gold";
      case "earth":
        return "bg-earth/10 text-earth border-earth";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-offwhite relative">
      {/* Legislative Badge Background Decoration */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-5 pointer-events-none">
        <Gavel size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-jungle text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-4 shadow-md">
            Versión Cámara de Representantes
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-textdark mb-6">
            PILARES DE CAMPAÑA
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-textdark mb-2">
              Mis compromisos con el Caquetá desde el Congreso
            </h3>
            <p className="text-textmuted text-lg">
              Cada compromiso está pensado desde la{" "}
              <strong className="text-jungle">incidencia legislativa</strong>,
              el control político y la representación nacional del territorio.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const colorClass = getColorClasses(pillar.color);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClass} border-2 overflow-hidden flex-shrink-0`}
                >
                  {pillar.icon}
                </div>

                <h4 className="text-xl font-bold text-textdark mb-6 border-b pb-4 border-gray-100">
                  {pillar.title}
                </h4>
                <ul className="space-y-4">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`w-2 h-2 rounded-full mt-2 shrink-0 ${pillar.color === "jungle" ? "bg-jungle" : pillar.color === "success" ? "bg-success" : pillar.color === "earth" ? "bg-earth" : "bg-gold"}`}
                      ></span>
                      <span className="text-textmuted font-medium text-sm md:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Political Closing */}
        <div className="text-center">
          <div className="relative inline-block max-w-4xl mx-auto">
            <div className="absolute -top-6 -left-6 text-gold opacity-30">
              <Quote size={60} />
            </div>
            <blockquote className="text-3xl md:text-5xl font-extrabold text-jungle leading-tight italic relative z-10 px-4">
              “Una mujer que cumple su palabra no promete: responde.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
