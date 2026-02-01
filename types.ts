
export interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  description: string;
  image: string;
}

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}
