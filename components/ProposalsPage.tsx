import React, { useEffect, useState, useRef } from 'react';
import { ASSETS } from '../constants';
import Button from './Button';
import { MessageCircle, CheckCircle, ArrowLeft, Heart, Leaf, Users, Rocket } from 'lucide-react';

interface ProposalsPageProps {
  onBack: () => void;
}

const ProposalsPage: React.FC<ProposalsPageProps> = ({ onBack }) => {
  const [resultsVisible, setResultsVisible] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResultsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (resultsRef.current) {
      observer.observe(resultsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reparationApproaches = [
    {
      title: "Reparación con dignidad",
      desc: "Reconocer el dolor, honrar la memoria y garantizar que las voces de las víctimas sean escuchadas. La reparación no es un trámite: es un camino de respeto y reconocimiento.",
      icon: <Heart className="text-white" size={28} />,
      color: "bg-jungle"
    },
    {
      title: "Reparación con territorio",
      desc: "La paz se siembra en la tierra. Lesdy promueve proyectos productivos, ambientales y culturales que devuelven vida y sentido a los espacios que fueron golpeados por la guerra.",
      icon: <Leaf className="text-white" size={28} />,
      color: "bg-earth"
    },
    {
      title: "Reparación con equidad",
      desc: "Las mujeres han sido doblemente afectadas por el conflicto y deben ser el corazón de la reconstrucción. Su liderazgo, su voz y su capacidad de sanar son fundamentales.",
      icon: <Users className="text-white" size={28} />,
      color: "bg-success"
    },
    {
      title: "Reparación con futuro",
      desc: "El propósito no es solo reparar el pasado, sino abrir oportunidades para las nuevas generaciones, fortaleciendo la educación, la autonomía económica y el liderazgo juvenil.",
      icon: <Rocket className="text-white" size={28} />,
      color: "bg-gold"
    }
  ];

  const proposals = [
    {
      id: 1,
      title: "Dignidad básica garantizada",
      objective: "Asegurar condiciones mínimas de vida para comunidades históricamente excluidas.",
      actions: [
        "Acceso digno a agua potable, saneamiento y energía.",
        "Fortalecimiento de atención primaria en salud en zonas rurales y dispersas.",
        "Atención diferencial para comunidades afro, víctimas y población rural."
      ],
      impact: "Más bienestar cotidiano y menos brechas entre regiones."
    },
    {
      id: 2,
      title: "Economía comunitaria y emprendimiento con identidad",
      objective: "Impulsar ingresos sostenibles y autonomía económica desde el territorio.",
      actions: [
        "Fomento de emprendimientos liderados por mujeres y jóvenes.",
        "Apoyo a iniciativas culturales, ambientales y turísticas comunitarias.",
        "Acceso a formación, redes de comercialización y acompañamiento técnico."
      ],
      impact: "Economías locales fuertes, con identidad y trabajo digno."
    },
    {
      id: 3,
      title: "Educación para la vida, la cultura y el futuro",
      objective: "Garantizar acceso y permanencia educativa con enfoque étnico y territorial.",
      actions: [
        "Educación pertinente para comunidades afro y rurales.",
        "Reconocimiento de la cultura y la historia afrocolombiana en los procesos educativos.",
        "Impulso a liderazgo juvenil y rutas de formación para el empleo."
      ],
      impact: "Más oportunidades para que las nuevas generaciones se queden, crezcan y lideren."
    },
    {
      id: 4,
      title: "Mujeres seguras, autónomas y protagonistas",
      objective: "Fortalecer la protección, el liderazgo y la independencia económica de las mujeres.",
      actions: [
        "Prevención de violencias basadas en género con rutas efectivas y cercanas.",
        "Programas de autonomía económica y emprendimiento femenino.",
        "Redes de liderazgo y formación política para mujeres en los territorios."
      ],
      impact: "Más seguridad, más voz pública y más poder económico para las mujeres."
    },
    {
      id: 5,
      title: "Derechos humanos y paz con territorio",
      objective: "Avanzar hacia una paz real con garantías para las comunidades.",
      actions: [
        "Protección de líderes y lideresas sociales.",
        "Fortalecimiento de mecanismos de participación y consulta.",
        "Enfoques de memoria, reparación y no repetición."
      ],
      impact: "Comunidades más protegidas, organizadas y escuchadas."
    },
    {
      id: 6,
      title: "Cultura e identidad como fuerza de país",
      objective: "Reconocer la cultura como eje de desarrollo social, económico y educativo.",
      actions: [
        "Apoyo a procesos culturales afrocolombianos y amazónicos.",
        "Programas de memoria, tradición, arte y patrimonio vivo.",
        "Impulso a circuitos culturales y economías creativas en regiones."
      ],
      impact: "Más orgullo, cohesión social y oportunidades con base cultural."
    },
    {
      id: 7,
      title: "Amazonía y biodiversidad con justicia social",
      objective: "Proteger la vida del territorio sin sacrificar la vida de la gente.",
      actions: [
        "Proyectos productivos sostenibles con comunidades.",
        "Educación ambiental y economía verde local.",
        "Políticas públicas que articulen conservación con empleo digno."
      ],
      impact: "Protección del territorio con bienestar humano."
    }
  ];

  const resultsList = [
    "Menos desigualdad regional",
    "Más ingresos en territorios afro y rurales",
    "Mujeres y juventudes con liderazgo real",
    "Cultura e identidad como potencia",
    "Una vida cotidiana más digna y feliz"
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.images.secondary} 
            alt="Lesdy Propuestas" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-jungle-dark/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Propuestas para una <br/>
            <span className="text-gold">vida digna y feliz</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Estas propuestas nacen del trabajo real en territorio, del diálogo con comunidades afrocolombianas y del compromiso con una Colombia donde la dignidad y la felicidad sean derechos posibles.
          </p>
        </div>
      </div>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-jungle font-bold tracking-wider uppercase text-sm mb-2">Enfoques de Acción</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-textdark">Reparación Integral</h3>
                <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reparationApproaches.map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gray-100 hover:border-gold transition-all duration-300 group">
                        <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform`}>
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-textdark mb-4">{item.title}</h4>
                        <p className="text-textmuted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {proposals.map((prop) => (
            <div key={prop.id} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0 animate-fade-in-up">
              <div className="shrink-0">
                <span className="text-6xl font-extrabold text-gray-100 block -mt-4">{prop.id.toString().padStart(2, '0')}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-jungle mb-3">{prop.title}</h3>
                <p className="text-textdark font-medium italic mb-6 border-l-4 border-gold pl-4 py-1 bg-gold/5 rounded-r-lg">
                  Objetivo: {prop.objective}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold text-textdark mb-3 text-sm uppercase tracking-wide">Líneas de acción</h4>
                    <ul className="space-y-3">
                      {prop.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-textmuted">
                          <CheckCircle className="w-5 h-5 text-jungle shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-success/10 p-6 rounded-xl self-start">
                     <h4 className="font-bold text-success mb-2 text-sm uppercase tracking-wide">Impacto esperado</h4>
                     <p className="text-textdark font-medium">{prop.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="relative py-20 bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${ASSETS.images.gallery[3]})` }}
        ref={resultsRef}
      >
        <div className="absolute inset-0 bg-jungle/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white drop-shadow-md">Resultados que se buscan</h2>
          <div className="flex flex-col items-center space-y-4">
            {resultsList.map((res, i) => (
              <div 
                key={i} 
                className={`w-full max-w-2xl px-8 py-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 font-semibold text-lg md:text-xl text-white hover:bg-white hover:text-jungle transition-all duration-500 transform cursor-default ${
                    resultsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {res}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-6">
             <img src={ASSETS.logos.ubuntu} alt="FUNAMU" className="h-56 w-auto object-contain" />
          </div>
          <h2 className="text-4xl font-extrabold text-textdark mb-6">Juntos transformamos.</h2>
          <p className="text-xl text-textmuted mb-10 leading-relaxed">
            Estas propuestas representan una ruta para que nuestras comunidades pasen del reconocimiento simbólico a la justicia real: 
            vivir con dignidad, vivir con felicidad y decidir el futuro desde el territorio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button 
                variant="earth" 
                onClick={() => window.open('https://wa.me/573107799507', '_blank')}
            >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablemos por WhatsApp
            </Button>
            <Button variant="outline" onClick={onBack}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al inicio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProposalsPage;