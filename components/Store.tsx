
import React from 'react';
import { PRODUCTS } from '../constants';

const Store: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <span className="text-olive-500 font-semibold tracking-widest uppercase">Selección Gourmet</span>
        <h2 className="text-4xl md:text-5xl font-serif text-olive-900 mt-4">Nuestros Productos</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/5] bg-cream-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase text-olive-900">
                {product.size}
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-serif text-olive-900 group-hover:text-olive-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-olive-500 font-medium text-sm mt-1 uppercase tracking-widest">{product.size}</p>
              </div>
              <span className="text-2xl font-serif text-olive-900 font-bold">{product.price.toFixed(2)}€</span>
            </div>
            
            <p className="text-olive-700/70 mb-8 leading-relaxed">
              {product.description}
            </p>
            
            <button className="w-full py-4 bg-olive-900 text-cream-50 rounded-xl font-semibold transition-all hover:bg-olive-700 hover:shadow-lg active:scale-95">
              Añadir a la Cesta
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
