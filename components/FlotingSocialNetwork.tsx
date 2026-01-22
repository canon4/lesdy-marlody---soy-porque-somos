import React from "react";
import TiktokIcon from "./TiktokIcon";
import { Instagram, Facebook } from "lucide-react";

const FlotingSocialNetwork = () => {
  return (
    <div className="fixed bottom-24 right-6 z-[90] flex flex-col gap-3">
      <a
        href="https://www.instagram.com/marlodyrodriguezq/"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-jungle transition-all hover:scale-110 shadow-xl"
      >
        <Instagram size={22} />
      </a>

      <a
        href="https://www.facebook.com/share/1KXFkSq1Z6/"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-jungle transition-all hover:scale-110 shadow-xl"
      >
        <Facebook size={22} />
      </a>

      <a
        href="https://www.tiktok.com/@marlodyrodriguezq"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-jungle transition-all hover:scale-110 shadow-xl"
      >
        <TiktokIcon size={22} />
      </a>
    </div>
  );
};

export default FlotingSocialNetwork;
