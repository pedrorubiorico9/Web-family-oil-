
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541535881105-85cb966f10f4?auto=format&fit=crop&q=80&w=2000" 
          alt="Olivares andaluces" 
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-block text-white/80 uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-down">
          Desde el Corazón de Andalucía
        </span>
        <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8 drop-shadow-lg">
          Oro Líquido, <br />
          <span className="italic">Tradición Familiar</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Descubre el Aceite de Oliva Virgen Extra que ha unido a nuestra familia durante tres generaciones bajo el sol del sur.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#tienda" className="px-10 py-4 bg-white text-olive-900 rounded-full font-semibold hover:bg-olive-100 transition-colors">
            Explorar Tienda
          </a>
          <a href="#historia" className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
            Nuestra Historia
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;
