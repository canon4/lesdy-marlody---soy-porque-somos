import React from "react";
import { ASSETS, CONTENT } from "../constants";
import Button from "./Button";
import { MessageCircle, HelpCircle, Hand, CheckSquare } from "lucide-react";
interface HeroProps {
  onNavigate: (view: "home" | "proposals" | "curul" | "recognitions") => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div
      className="relative h-[200px] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet={ASSETS.images.main} />
          {/* <img
            src={ASSETS.images.heroBgMobile}
            alt="Lesdy Marlody"
            className="w-full h-full object-cover object-center"
          /> */}
        </picture>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-[300px] flex flex-col items-center justify-center text-center">
        {/* Name
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2 drop-shadow-2xl text-white tracking-tight">
            {CONTENT.hero.title}
          </h1>
           */}
        {/* Slogan
        <h2 className="text-2xl md:text-4xl font-bold text-gold mb-8 drop-shadow-lg italic">
          {CONTENT.hero.titleHighlight}
        </h2> */}

        {/* Divider
        <div className="w-24 h-1.5 bg-white/80 mx-auto mb-8 rounded-full shadow-lg"></div> */}

        {/* Role Block
        <div className="mb-8 space-y-2">
          <p className="text-xl md:text-3xl text-white font-bold uppercase tracking-wider drop-shadow-md">
            {CONTENT.hero.role}
          </p>
          <p className="text-lg md:text-2xl text-jungle-light font-medium drop-shadow-md">
            {CONTENT.hero.region}
          </p>
        </div> */}

        {/* Message Box
        <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-12 max-w-4xl shadow-2xl">
          <p className="text-lg md:text-2xl font-medium text-white leading-relaxed">
            {CONTENT.hero.description}
          </p>
        </div> */}

        {/* Buttons CTA Grid */}
        <div className="flex flex-row flex-wrap gap-3 justify-center items-center w-full max-w-6xl">
          {/* WhatsApp */}
          <Button
            variant="whatsapp"
            onClick={() => window.open("https://wa.me/573107799507", "_blank")}
            className="shadow-md hover:shadow-lg px-4 py-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            WhatsApp
          </Button>

          {/* Votar */}
          <Button
            variant="secondary"
            onClick={() => onNavigate("curul")}
            className="shadow-md hover:shadow-lg px-4 py-2 text-sm"
          >
            <HelpCircle className="w-4 h-4 mr-1" />
            ¿Cómo votar?
          </Button>

          {/* Súmate */}
          <Button
            variant="outline"
            className="!text-jungle !border-white hover:!bg-white hover:!text-jungle shadow-md px-4 py-2 text-sm"
            onClick={() =>
              document
                .getElementById("sumate")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Hand className="w-4 h-4 mr-1" />
            Súmate
          </Button>

          {/* CITREP
          <div className="bg-offwhite text-textdark px-4 py-2 rounded-full font-bold text-sm border-2 border-gold shadow-md flex items-center justify-center">
            <CheckSquare className="w-4 h-4 mr-1 text-gold" />
            CITREP
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
