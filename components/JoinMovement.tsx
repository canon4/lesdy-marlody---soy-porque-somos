import React, { useState } from "react";
import Button from "./Button";
import { Send, MapPin, CheckCircle2 } from "lucide-react";
import { FormData } from "../types";

const JoinMovement: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    municipio: "",
    vereda: "",
    whatsapp: "",
    votaCurul: "",
    quiereApoyar: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelection = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the comprehensive message
    const message = `*NUEVO REGISTRO - CAMPAÑA LESDY MARLODY* 🗳️

👤 *Nombre:* ${formData.name}
📍 *Municipio:* ${formData.municipio}
🏡 *Vereda:* ${formData.vereda}
📱 *WhatsApp:* ${formData.whatsapp}

❓ *¿Vota Curul de Paz?:* ${formData.votaCurul || "Pendiente"}
🤝 *¿Quiere apoyar?:* ${formData.quiereApoyar || "Pendiente"}

_Este mensaje alimenta el sistema de gestión electoral._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573107799507?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="sumate" className="py-20 bg-jungle relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-earth opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-white pt-8">
            <h2 className="text-white font-bold tracking-wider uppercase text-sm mb-4">
              Únete al movimiento
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              Tu territorio cuenta
            </h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Para representar al Caquetá con dignidad, necesitamos conocerte.
              Ayúdanos a construir este mapa de esperanza completando tus datos.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl mb-1">Mapeo Territorial</h4>
                  <p className="text-sm text-white/80">
                    Tu información nos ayuda a identificar las necesidades
                    específicas de cada vereda y municipio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-textdark mb-6 border-b pb-4 border-gray-100">
              Registro de Apoyo
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre y WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-textdark mb-1"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jungle focus:border-transparent outline-none text-black bg-gray-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-bold text-textdark mb-1"
                  >
                    Número de WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jungle focus:border-transparent outline-none text-black bg-gray-50"
                  />
                </div>
              </div>

              {/* Ubicación */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="municipio"
                    className="block text-sm font-bold text-textdark mb-1"
                  >
                    Municipio
                  </label>
                  <input
                    type="text"
                    id="municipio"
                    name="municipio"
                    required
                    value={formData.municipio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jungle focus:border-transparent outline-none text-black bg-gray-50"
                    placeholder="Ej: Florencia"
                  />
                </div>
                <div>
                  <label
                    htmlFor="vereda"
                    className="block text-sm font-bold text-textdark mb-1"
                  >
                    Vereda / Barrio
                  </label>
                  <input
                    type="text"
                    id="vereda"
                    name="vereda"
                    required
                    value={formData.vereda}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-jungle focus:border-transparent outline-none text-black bg-gray-50"
                    placeholder="Ej: El Caraño"
                  />
                </div>
              </div>

              {/* Preguntas de Sí/No */}
              <div className="space-y-4 pt-2">
                <div>
                  <span className="block text-sm font-bold text-textdark mb-2">
                    ¿Vota Curul de Paz?
                  </span>
                  <div className="flex gap-4">
                    {["Si", "No"].map((opt) => (
                      <button
                        key={`vota-${opt}`}
                        type="button"
                        onClick={() => handleSelection("votaCurul", opt)}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 font-semibold transition-all ${
                          formData.votaCurul === opt
                            ? "bg-jungle text-white border-jungle"
                            : "bg-white text-gray-500 border-gray-200 hover:border-jungle/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-sm font-bold text-textdark mb-2">
                    ¿Quiere apoyar la campaña?
                  </span>
                  <div className="flex gap-4">
                    {["Si", "No"].map((opt) => (
                      <button
                        key={`apoya-${opt}`}
                        type="button"
                        onClick={() => handleSelection("quiereApoyar", opt)}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 font-semibold transition-all ${
                          formData.quiereApoyar === opt
                            ? "bg-gold text-white border-gold"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gold/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                {/* Checkbox de términos */}
                <label className="flex items-start gap-2 text-xs text-textmuted">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    Autorizo el tratamiento de mis datos personales conforme a
                    la{" "}
                    <a
                      href="/politica-de-privacidad"
                      target="_blank"
                      className="underline text-earth"
                    >
                      Política de Privacidad
                    </a>{" "}
                    y{" "}
                    <a
                      href="/terminos-y-condiciones"
                      target="_blank"
                      className="underline text-earth"
                    >
                      Términos y Condiciones
                    </a>
                    .
                  </span>
                </label>

                <Button type="submit" fullWidth className="mt-4">
                  Enviar Datos a WhatsApp
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                {/* Nota informativa */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-earth shrink-0 mt-0.5"
                  />
                  <p className="text-xs text-textmuted leading-tight">
                    <strong>Nota:</strong> Esto alimenta tu mapa de calor
                    electoral y el software de IA para optimizar nuestras
                    visitas al territorio.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
