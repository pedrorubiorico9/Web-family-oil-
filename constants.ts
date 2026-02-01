
import { Product, Post, Testimonial } from './types';

export const PRODUCTS: Product[] = [
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

export const BLOG_POSTS: Post[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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
