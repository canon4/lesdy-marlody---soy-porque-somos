import React from 'react';
import { Quote } from 'lucide-react';

const PoliticalClosing: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative inline-block max-w-5xl mx-auto">
                <div className="absolute -top-10 -left-10 text-gold opacity-20 transform -scale-x-100">
                    <Quote size={100} />
                </div>
                <blockquote className="text-4xl md:text-6xl font-extrabold text-jungle leading-tight italic relative z-10 px-4 drop-shadow-sm">
                    “Una mujer que cumple su palabra no promete: responde.”
                </blockquote>
                 <div className="absolute -bottom-10 -right-10 text-earth opacity-20">
                    <Quote size={100} />
                </div>
            </div>
      </div>
    </section>
  );
};

export default PoliticalClosing;