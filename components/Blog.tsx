
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <span className="text-olive-500 font-semibold tracking-widest uppercase">Notas de Campo</span>
          <h2 className="text-4xl md:text-5xl font-serif text-olive-900 mt-4 italic">Cultura del AOVE</h2>
        </div>
        <button className="px-8 py-3 border border-olive-900 text-olive-900 rounded-full hover:bg-olive-900 hover:text-white transition-all uppercase text-sm font-bold tracking-widest">
          Ver todas las entradas
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl mb-8 aspect-video">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-bold underline underline-offset-4">Leer artículo completo</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-olive-500 font-bold">{post.date}</span>
              <h3 className="text-3xl font-serif text-olive-900 group-hover:text-olive-700 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-olive-700/70 text-lg">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
