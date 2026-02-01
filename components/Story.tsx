
import React from 'react';

const Story: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-olive-100 rounded-full -z-10"></div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1594488311342-475220c3866d?auto=format&fit=crop&q=80&w=600" 
              alt="Cosecha tradicional" 
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl transform translate-y-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1464961775871-c3d77e127ec1?auto=format&fit=crop&q=80&w=600" 
              alt="Familia en el campo" 
              className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-white shadow-2xl rounded-lg max-w-[200px] text-center">
            <span className="block text-4xl font-serif font-bold text-olive-600">60+</span>
            <span className="text-xs uppercase tracking-widest text-olive-400">Años de Tradición</span>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <span className="text-olive-500 font-semibold tracking-widest uppercase">Nuestra Herencia</span>
          <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight">
            Tres Generaciones, <br />
            <span className="italic">Una Sola Pasión por el Sur</span>
          </h2>
          <p className="text-olive-700/80 leading-relaxed text-lg">
            Todo comenzó con el abuelo Manuel, quien plantó el primer olivo en las colinas de Jaén. Hoy, sus hijos y nietos mantenemos viva la promesa de llevar a tu mesa un aceite que no solo es alimento, sino historia viva de nuestra tierra.
          </p>
          <p className="text-olive-700/80 leading-relaxed text-lg">
            Cosechamos cada aceituna a mano, respetando los ciclos naturales y asegurando que cada gota conserve la esencia pura del mediterráneo.
          </p>
          <div className="pt-4">
            <button className="flex items-center space-x-4 text-olive-900 font-bold group">
              <span className="pb-1 border-b-2 border-olive-900">Saber más sobre nosotros</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
