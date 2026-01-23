import React from "react";
import { ASSETS, CONTENT } from "../constants";
import Button from "./Button";
import {
  MessageCircle,
  HelpCircle,
  Hand,
  CheckSquare,
  Divide,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";

interface HeroProps {
  onNavigate: (view: "home" | "proposals" | "curul" | "recognitions") => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-[200px] lg:h-[420px] overflow-hidden" id="hero">
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

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* DESKTOP */}
        <div className="hidden lg:flex h-full items-center justify-between gap-12">
          {/* IZQUIERDA: Carrusel
          <div className="w-1/2 flex justify-center">
            <ImageCarousel
              images={ASSETS.images.imageCarousel}
              interval={4000}
            />
          </div> */}

          {/* DERECHA: Elementos en vertical */}
          <div className="w-full flex flex-row items-center gap-4 text-left justify-center flex-wrap h-auto">
            {/* Name
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2 drop-shadow-2xl text-white tracking-tight">
              {CONTENT.hero.title}
            </h1>
            */}

            {/* Slogan
            <h2 className="text-2xl md:text-4xl font-bold text-gold mb-8 drop-shadow-lg italic">
              {CONTENT.hero.titleHighlight}
            </h2>
            */}

            {/* Divider
            <div className="w-24 h-1.5 bg-white/80 mb-8 rounded-full shadow-lg"></div>
            */}

            {/* Role Block
            <div className="mb-8 space-y-2">
              <p className="text-xl md:text-3xl text-white font-bold uppercase tracking-wider drop-shadow-md">
                {CONTENT.hero.role}
              </p>
              <p className="text-lg md:text-2xl text-jungle-light font-medium drop-shadow-md">
                {CONTENT.hero.region}
              </p>
            </div>
            */}

            {/* Message Box
            <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 mb-12 max-w-4xl shadow-2xl">
              <p className="text-lg md:text-2xl font-medium text-white leading-relaxed">
                {CONTENT.hero.description}
              </p>
            </div>
            */}

            {/* Buttons CTA */}
            <Button
              variant="whatsapp"
              onClick={() =>
                window.open("https://wa.me/573107799507", "_blank")
              }
              className="shadow-md hover:shadow-lg px-4 py-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>

            <Button
              variant="secondary"
              onClick={() => onNavigate("curul")}
              className="shadow-md hover:shadow-lg px-4 py-2 text-sm"
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              ¿Cómo votar?
            </Button>

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
            </div>
            */}
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden h-full flex-col items-center justify-center text-center">
          {/* Buttons CTA Grid */}
          <div className="flex flex-row flex-wrap gap-3 justify-center items-center w-full max-w-6xl">
            <Button
              variant="whatsapp"
              onClick={() =>
                window.open("https://wa.me/573107799507", "_blank")
              }
              className="shadow-md hover:shadow-lg px-4 py-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>

            <Button
              variant="secondary"
              onClick={() => onNavigate("curul")}
              className="shadow-md hover:shadow-lg px-4 py-2 text-sm"
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              ¿Cómo votar?
            </Button>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
