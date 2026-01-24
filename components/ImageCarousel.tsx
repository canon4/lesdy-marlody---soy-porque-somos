import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Props = {
  images: string[];
  interval?: number;
};

export default function ImageCarousel({ images = [], interval = 5000 }: Props) {
  if (!Array.isArray(images) || images.length === 0) return null;

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, isPaused]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  // Función para alternar pausa manualmente al hacer clic/tap
  const togglePause = () => setIsPaused(!isPaused);

  return (
    <section className="w-full flex justify-center mt-4 mb-4">
      <div
        className="relative w-full max-w-[90vw] sm:max-w-[380px] md:max-w-[480px] overflow-hidden rounded-2xl shadow-xl group"
        // Desktop: Pausa al pasar el mouse
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        // Móvil: Pausa al tocar, reanuda al soltar
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-auto object-contain"
          onClick={togglePause} // Si hacen un tap rápido, alterna el estado
        />

        {/* Botón de estado visible para el usuario */}
        <button
          onClick={togglePause}
          className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full z-20"
        >
          {isPaused ? (
            <Play size={18} fill="white" />
          ) : (
            <Pause size={18} fill="white" />
          )}
        </button>

        {/* Controles de navegación */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indicador de progreso (Dots) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all ${current === idx ? "bg-white w-6" : "bg-white/40 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
