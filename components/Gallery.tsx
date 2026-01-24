import React from "react";
import { ASSETS } from "../constants";
import Button from "./Button";
import { MessageCircle } from "lucide-react";

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-jungle-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <div className="text-center mb-12">
          <h2 className="text-earth font-bold tracking-wider uppercase text-sm mb-4">
            Hechos que hablan
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-textdark mb-6">
            Trabajo en Territorio
          </h3>
          <p className="max-w-3xl mx-auto text-textmuted text-lg">
            No venimos a improvisar. Venimos a sumar una vida de trabajo real al
            servicio de lo público. Cada imagen y cada encuentro son parte de
            una ruta construida con la gente.
          </p>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {/* Video Item - Spans 2 rows on large screens */}
          <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
            <video
              className="w-full h-full object-cover"
              poster={ASSETS.images.main} // Fallback
              controls
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={`${ASSETS.video}#t=1`} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Image Items */}
          {ASSETS.images.gallery.map((img, idx) => (
            <div
              key={idx}
              className="relative h-64 lg:h-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={img}
                alt={`Trabajo en territorio ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Stories Call to Action */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center border-t-4 border-jungle relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-textdark mb-4">
              Historias Reales
            </h3>
            <p className="text-textmuted mb-8 max-w-2xl mx-auto">
              Esta campaña no se construye en escritorios. Se construye con
              historias de mujeres que resisten, jóvenes que sueñan y
              comunidades que se organizan. Aquí también cabes tú.
            </p>
            <Button
              variant="primary"
              onClick={() =>
                window.open("https://wa.me/573107799507", "_blank")
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quiero compartir mi historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
