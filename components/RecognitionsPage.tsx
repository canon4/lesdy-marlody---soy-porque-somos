import React, { useEffect } from 'react';
import { ASSETS } from '../constants';
import Button from './Button';
import { ArrowLeft, Award, ExternalLink, Video, Mic, Calendar, Building2, Tv, History } from 'lucide-react';

interface RecognitionsPageProps {
  onBack: () => void;
}

const RecognitionsPage: React.FC<RecognitionsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const institutional = [
    {
      title: "Gobernación del Caquetá",
      date: "Marzo 2022",
      description: "Reconocimiento otorgado por su dedicación, vocación de servicio y esfuerzo diario como creadora de la Fundación FUNAMU y la Marca SAMEE (prendas con identidad).",
      link: "https://www.instagram.com/p/CbyMLxeJJxS/?igshid=NTc4MTIwNjQ2YQ==",
      linkText: "Ver en Instagram",
      icon: <Building2 className="w-8 h-8 text-white" />,
      color: "bg-jungle"
    },
    {
      title: "Defensoría del Pueblo Regional Caquetá",
      date: "10 de diciembre 2021",
      description: "Estímulo a la vocación y defensa de los derechos de las poblaciones más vulnerables de la región.",
      link: "https://www.facebook.com/100000137762650/posts/pfbid02uERGcChBjvG9JfhtrLHwyh6XR3NoBXZqXnWVZoUQw2GofurbN1jfuexqe4eH8mTrl/?d=w&mibextid=qC1gEa",
      linkText: "Ver en Facebook",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-gold"
    },
    {
      title: "Unidad para la Atención y Reparación Integral de las Víctimas (UARIV)",
      date: "21 de mayo 2020",
      description: "Contexto: Día de la Afrocolombianidad. Reconocimiento a Marlody como símbolo de empoderamiento de la mujer afro en el sur de Colombia.",
      link: "https://www.unidadvictimas.gov.co/es/reparacion/marlody-simbolo-de-empoderamiento-de-la-mujer-afro-en-el-sur-de-colombia/57035",
      linkText: "Leer artículo",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-earth"
    }
  ];

  const media = [
    {
      title: "Nota Periodística: Fundación FUNAMU",
      date: "26 de noviembre 2020",
      description: "Cobertura sobre la entrega del componente de autoconsumo a familias beneficiarias.",
      link: "https://fb.watch/3sam2vay7y/",
      linkText: "Ver video",
      type: "Nota",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: 'Canal 13: "Así suena la comida en el Caquetá"',
      date: "Febrero 2020",
      description: "Producción especial del canal regional.",
      link: "https://www.youtube.com/watch?v=RmtCX5UDrK4",
      linkText: "Ver en YouTube",
      type: "Documental",
      icon: <Tv className="w-6 h-6" />
    },
    {
      title: 'Canal 13: "El poder de las negritudes"',
      date: "2019",
      description: "Programa Somos Región.",
      link: "https://www.youtube.com/watch?v=D_TlcZHO2mg",
      linkText: "Ver en YouTube",
      type: "Entrevista",
      icon: <Tv className="w-6 h-6" />
    }
  ];

  const memory = [
    {
      title: "Diálogo Nacional (Presidencia de la República)",
      date: "7 de diciembre 2019",
      description: "Intervención ante el presidente Iván Duque en Cali, Valle del Cauca.",
      link: "https://www.facebook.com/100000137762650/posts/3080216515326244/",
      linkText: "Ver intervención",
      icon: <Mic className="w-6 h-6 text-gold" />
    },
    {
      title: "Centro Nacional de Memoria Histórica (CNMH)",
      date: "2016",
      description: "Video resultado del proceso de iniciativas de memoria y paz realizado con el apoyo del CNMH.",
      link: "https://www.youtube.com/watch?v=b85YByRFQvY",
      linkText: "Ver en YouTube",
      icon: <History className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <div className="relative pt-32 md:pt-48 pb-20 px-4 sm:px-6 lg:px-8 bg-jungle text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src={ASSETS.images.gallery[1]} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <span className="bg-gold text-textdark px-4 py-1.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-md mb-6 inline-block">
                Trayectoria y Reconocimiento
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                Reconocimientos a su Labor
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                Una vida dedicada al servicio, la cultura y la defensa de los derechos humanos deja huella.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-20">
        
        {/* Section 1: Institutional */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <Award className="text-jungle w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold text-textdark">Reconocimientos Institucionales</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {institutional.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                        <div className={`${item.color} p-6 flex justify-center`}>
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                {item.icon}
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-2 text-sm text-textmuted mb-2 font-semibold">
                                <Calendar size={14} /> {item.date}
                            </div>
                            <h3 className="text-xl font-bold text-textdark mb-3 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-textmuted text-sm leading-relaxed mb-6 flex-1">
                                {item.description}
                            </p>
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center text-jungle font-bold hover:text-jungle-dark transition-colors group"
                            >
                                {item.linkText}
                                <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Section 2: Media */}
        <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
                <Tv className="text-earth w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold text-textdark">Medios de Comunicación</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {media.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-earth hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-earth/10 text-earth px-3 py-1 rounded-full text-xs font-bold uppercase">
                                {item.type}
                            </span>
                            <div className="text-jungle">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="font-bold text-lg text-textdark mb-2">{item.title}</h3>
                        <p className="text-xs text-textmuted font-semibold mb-3">{item.date}</p>
                        <p className="text-sm text-textmuted mb-4">{item.description}</p>
                        <a 
                             href={item.link} 
                             target="_blank" 
                             rel="noreferrer"
                             className="text-earth font-bold text-sm hover:underline flex items-center gap-1"
                        >
                            {item.linkText} <ExternalLink size={12} />
                        </a>
                    </div>
                 ))}
            </div>
        </div>

        {/* Section 3: National Participation */}
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
                <Mic className="text-gold w-8 h-8" />
                <h2 className="text-2xl md:text-3xl font-bold text-textdark">Participación Nacional y Memoria</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {memory.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-6 bg-offwhite p-6 rounded-2xl border border-gray-200">
                        <div className="shrink-0 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-sm text-gold border border-gold/20">
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-textdark mb-1">{item.title}</h3>
                            <span className="text-sm text-gold-dark font-semibold block mb-2">{item.date}</span>
                            <p className="text-textmuted text-sm mb-4">{item.description}</p>
                            <Button 
                                variant="outline" 
                                onClick={() => window.open(item.link, '_blank')}
                                className="!py-2 !px-4 !text-sm"
                            >
                                {item.linkText}
                                <ExternalLink size={14} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* Back Button */}
      <div className="text-center px-4 mt-12">
        <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
        </Button>
      </div>

    </div>
  );
};

export default RecognitionsPage;