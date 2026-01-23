import React from "react";
import { ASSETS } from "../constants";
import { Instagram, Facebook, Twitter } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import TiktokIcon from "./TiktokIcon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-jungle text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-gray-700 pb-12">
          <div className="text-center md:text-left">
            <img
              src={ASSETS.logos.white}
              alt="Lesdy Logo"
              className="h-32 mb-4 mx-auto md:mx-0 brightness-0 invert"
            />
            <h3 className="text-xl font-bold">
              Lesdy Marlody Rodríguez Quiñones
            </h3>
            <p className="text-gray-400 mt-2">
              Mujer afroamazónica • Madre • Lideresa social
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#quien-soy"
                  className="hover:text-gold transition-colors"
                >
                  Quién soy
                </a>
              </li>
              <li>
                <a href="#sumate" className="hover:text-gold transition-colors">
                  Únete al movimiento
                </a>
              </li>
            </ul>

            <div className="flex justify-center md:justify-end space-x-4 mt-6">
              <a
                href="https://www.instagram.com/marlodyrodriguezq/"
                className="p-2 bg-gray-800 rounded-full hover:bg-jungle transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1KXFkSq1Z6/"
                className="p-2 bg-gray-800 rounded-full hover:bg-jungle transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@marlodyrodriguezq"
                className="p-2 bg-gray-800 rounded-full hover:bg-jungle transition-colors"
              >
                <TiktokIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-gold-500">
          <p className="italic mb-2">
            Para sumarte al movimiento, recibir información o ser voluntaria/o,
            escríbenos por WhatsApp.
          </p>
          <p>
            © {new Date().getFullYear()} Lesdy Marlody. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
