
import React from 'react';

const Shipping: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-olive-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-olive-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif">Embalaje Protegido</h3>
          <p className="text-cream-100/60 font-light">
            Utilizamos materiales biodegradables reforzados para asegurar que el vidrio llegue intacto a tu hogar.
          </p>
        </div>

        <div className="space-y-4 border-y md:border-y-0 md:border-x border-olive-800 py-12 md:py-0 md:px-12">
          <div className="w-16 h-16 bg-olive-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-olive-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif">Envío 24/48h</h3>
          <p className="text-cream-100/60 font-light">
            Entregas rápidas en toda la península. Desde nuestra almazara directamente a tu cocina.
          </p>
        </div>

        <div className="space-y-4">
          <div className="w-16 h-16 bg-olive-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-olive-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif">Sostenibilidad</h3>
          <p className="text-cream-100/60 font-light">
            Certificado de huella de carbono neutra. Amamos el campo y lo cuidamos para el futuro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
