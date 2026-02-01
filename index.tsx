
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- TYPES & CONSTANTS ---
interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  description: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Edición Especial Cosecha Temprana",
    size: "500ml",
    price: 18.50,
    description: "Un aceite equilibrado con notas de hierba recién cortada y almendra amarga.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbadcbaf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Formato Familiar Tradición",
    size: "2 Litros",
    price: 42.00,
    description: "Nuestra reserva familiar ideal para realzar cada plato de tu cocina diaria.",
    image: "https://images.unsplash.com/photo-1543073398-9bcc393b22ba?auto=format&fit=crop&q=80&w=800"
  }
];

const BLOG_POSTS: Post[] = [
  {
    id: 1,
    title: "El Secreto de la Longevidad: Dieta Mediterránea",
    excerpt: "Descubre cómo el AOVE actúa como un elixir de juventud en tu organismo...",
    date: "12 Mar, 2024",
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efbe75?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Maridajes Perfectos: Aceite y Queso",
    excerpt: "Aprende a combinar diferentes variedades de aceituna con los quesos más exquisitos...",
    date: "05 Mar, 2024",
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena Martínez",
    role: "Chef de Repostería",
    comment: "La calidad de este aceite es inigualable. Lo uso para mis bizcochos y el aroma que desprende es pura Andalucía.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: 2,
    name: "Javier Ruiz",
    role: "Amante del buen comer",
    comment: "El envío llegó impecable. Se nota el cariño en el embalaje y la historia familiar que hay detrás.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=javier"
  }
];

// --- COMPONENTS ---

const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => (
  <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
    <div className="container mx-auto px-6 flex justify-between items-center">
      <a href="#" className={`text-2xl font-serif font-bold transition-colors ${scrolled ? 'text-olive-900' : 'text-white'}`}>
        Esencia del Sur
      </a>
      <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest">
        {['Historia', 'Tienda', 'Opiniones', 'Blog'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className={`hover:opacity-60 transition-opacity ${scrolled ? 'text-olive-900' : 'text-white'}`}>
            {item}
          </a>
        ))}
      </div>
      <button className={`px-6 py-2 border rounded-full text-sm font-medium transition-all ${scrolled ? 'border-olive-900 text-olive-900 hover:bg-olive-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-olive-900'}`}>
        Contacto
      </button>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1541535881105-85cb966f10f4?auto=format&fit=crop&q=80&w=2000" alt="Olivares" className="w-full h-full object-cover animate-subtle-zoom" />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
      <span className="inline-block text-white/80 uppercase tracking-[0.3em] text-sm mb-6">Desde el Corazón de Andalucía</span>
      <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8 drop-shadow-lg">Oro Líquido, <br /><span className="italic">Tradición Familiar</span></h1>
      <p className="text-lg md:text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">Descubre el Aceite de Oliva Virgen Extra que ha unido a nuestra familia durante tres generaciones bajo el sol del sur.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="#tienda" className="px-10 py-4 bg-white text-olive-900 rounded-full font-semibold hover:bg-olive-100 transition-colors">Explorar Tienda</a>
        <a href="#historia" className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">Nuestra Historia</a>
      </div>
    </div>
  </div>
);

const Story: React.FC = () => (
  <div className="container mx-auto px-6 py-24 md:py-32">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-olive-100 rounded-full -z-10"></div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1594488311342-475220c3866d?auto=format&fit=crop&q=80&w=600" alt="Cosecha" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl transform translate-y-8" />
          <img src="https://images.unsplash.com/photo-1464961775871-c3d77e127ec1?auto=format&fit=crop&q=80&w=600" alt="Familia" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl" />
        </div>
      </div>
      <div className="order-1 md:order-2 space-y-8">
        <span className="text-olive-500 font-semibold tracking-widest uppercase">Nuestra Herencia</span>
        <h2 className="text-4xl md:text-5xl font-serif text-olive-900 leading-tight">Tres Generaciones, <br /><span className="italic">Una Sola Pasión por el Sur</span></h2>
        <p className="text-olive-700/80 leading-relaxed text-lg">Todo comenzó con el abuelo Manuel en las colinas de Jaén. Hoy, mantenemos viva la promesa de llevar a tu mesa un aceite que es historia viva de nuestra tierra.</p>
        <button className="flex items-center space-x-4 text-olive-900 font-bold group">
          <span className="pb-1 border-b-2 border-olive-900">Saber más</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  </div>
);

const Store: React.FC = () => (
  <div className="container mx-auto px-6 py-24 bg-white">
    <div className="text-center mb-20">
      <span className="text-olive-500 font-semibold tracking-widest uppercase">Selección Gourmet</span>
      <h2 className="text-4xl md:text-5xl font-serif text-olive-900 mt-4">Nuestros Productos</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
      {PRODUCTS.map(p => (
        <div key={p.id} className="group">
          <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/5] bg-cream-50">
            <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase text-olive-900">{p.size}</div>
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-serif text-olive-900 group-hover:text-olive-600 transition-colors">{p.name}</h3>
            <span className="text-2xl font-serif text-olive-900 font-bold">{p.price.toFixed(2)}€</span>
          </div>
          <p className="text-olive-700/70 mb-8 leading-relaxed">{p.description}</p>
          <button className="w-full py-4 bg-olive-900 text-cream-50 rounded-xl font-semibold transition-all hover:bg-olive-700">Añadir a la Cesta</button>
        </div>
      ))}
    </div>
  </div>
);

const Shipping: React.FC = () => (
  <div className="bg-olive-900 text-cream-100 py-24">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
      <div>
        <div className="w-16 h-16 bg-olive-800 rounded-full flex items-center justify-center mx-auto mb-6">📦</div>
        <h3 className="text-2xl font-serif mb-4">Embalaje Protegido</h3>
        <p className="text-cream-100/60 font-light text-sm">Protección reforzada y biodegradable.</p>
      </div>
      <div className="border-y md:border-y-0 md:border-x border-olive-800 py-12 md:py-0 md:px-12">
        <div className="w-16 h-16 bg-olive-800 rounded-full flex items-center justify-center mx-auto mb-6">🚚</div>
        <h3 className="text-2xl font-serif mb-4">Envío 24/48h</h3>
        <p className="text-cream-100/60 font-light text-sm">Directo de la almazara a tu casa.</p>
      </div>
      <div>
        <div className="w-16 h-16 bg-olive-800 rounded-full flex items-center justify-center mx-auto mb-6">🌿</div>
        <h3 className="text-2xl font-serif mb-4">Sostenibilidad</h3>
        <p className="text-cream-100/60 font-light text-sm">Respeto total por el medio ambiente.</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="container mx-auto px-6 py-32">
    <h2 className="text-4xl md:text-5xl font-serif text-olive-900 text-center mb-16">Lo que dicen de nosotros</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {TESTIMONIALS.map(t => (
        <div key={t.id} className="bg-white p-10 rounded-[2rem] shadow-sm border border-olive-50 relative">
          <p className="text-olive-700 italic text-lg leading-relaxed mb-8">"{t.comment}"</p>
          <div className="flex items-center space-x-4">
            <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" alt="" />
            <div>
              <h4 className="font-bold text-olive-900">{t.name}</h4>
              <p className="text-sm text-olive-500 uppercase tracking-wide">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Blog: React.FC = () => (
  <div className="bg-olive-50 py-32">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-olive-900">Cultura del AOVE</h2>
        <button className="hidden md:block px-8 py-3 border border-olive-900 text-olive-900 rounded-full hover:bg-olive-900 hover:text-white transition-all text-sm font-bold tracking-widest uppercase">Ver todo</button>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-3xl mb-8 aspect-video">
              <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
            </div>
            <span className="text-xs uppercase tracking-widest text-olive-500 font-bold">{post.date}</span>
            <h3 className="text-3xl font-serif text-olive-900 group-hover:text-olive-700 transition-colors mt-4">{post.title}</h3>
            <p className="text-olive-700/70 text-lg mt-4">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  </div>
);

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [history, setHistory] = useState<{role:'user'|'ai', text:string}[]>([]);
  const [loading, setLoading] = useState(false);

  const ask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim() || loading) return;
    const userMsg = msg;
    setMsg('');
    setHistory(p => [...p, {role:'user', text:userMsg}]);
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: { systemInstruction: 'Eres un sommelier experto en aceite de oliva "Esencia del Sur". Sé amable, elegante y breve.' }
      });
      setHistory(p => [...p, {role:'ai', text: res.text || 'Sin respuesta.'}]);
    } catch {
      setHistory(p => [...p, {role:'ai', text: 'Error en la conexión.'}]);
    } finally { setLoading(false); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-80 md:w-96 border border-olive-100 overflow-hidden flex flex-col">
          <div className="bg-olive-900 p-4 text-cream-100 flex justify-between items-center">
            <span className="font-serif">Experto Esencia</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-olive-50/20">
            {history.map((h, i) => (
              <div key={i} className={`flex ${h.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl text-sm ${h.role === 'user' ? 'bg-olive-700 text-white' : 'bg-white shadow-sm'}`}>{h.text}</div>
              </div>
            ))}
            {loading && <div className="text-xs text-olive-400">Escribiendo...</div>}
          </div>
          <form onSubmit={ask} className="p-4 border-t"><input value={msg} onChange={e => setMsg(e.target.value)} placeholder="Tu pregunta..." className="w-full p-2 bg-olive-50 rounded-xl text-sm outline-none" /></form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-olive-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">💬</button>
      )}
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t py-20">
    <div className="container mx-auto px-6 text-center md:text-left grid md:grid-cols-3 gap-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-serif text-olive-900">Esencia del Sur</h2>
        <p className="text-olive-700/70 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">Tradición familiar andaluza desde 1964. Oro líquido directamente de nuestra tierra a tu mesa.</p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Contacto</h4>
        <p className="text-sm text-olive-700/70">info@esenciadelsur.com<br />+34 953 123 456</p>
      </div>
      <div className="text-xs text-olive-400 uppercase tracking-widest flex items-center justify-center md:justify-end">
        © 2024 Esencia del Sur
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', s);
    return () => window.removeEventListener('scroll', s);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <Hero />
      <section id="historia"><Story /></section>
      <section id="tienda"><Store /></section>
      <section id="envios"><Shipping /></section>
      <section id="opiniones"><Testimonials /></section>
      <section id="blog"><Blog /></section>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
