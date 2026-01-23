import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  interval?: number;
};

export default function ImageCarousel({ images = [], interval = 5000 }: Props) {
  if (!Array.isArray(images) || images.length === 0) return null;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="w-full flex justify-center mt-4 mb-4">
      <div
        className="
    relative
    w-full
    max-w-[90vw]
    sm:max-w-[380px]
    md:max-w-[480px]
    overflow-hidden
    rounded-2xl
    shadow-xl
  "
      >
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-auto object-contain"
        />

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
