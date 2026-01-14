
export enum AppView {
  HOME = 'home',
  CATEGORY = 'category',
  COMMUNITY = 'community',
  DESIGN_LAB = 'design_lab',
  MY = 'my',
  PRODUCT_DETAIL = 'product_detail',
  CART = 'cart',
  SEARCH = 'search'
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  discountRate: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  badge?: string;
}

export interface Post {
  id: string;
  author: string;
  authorImage: string;
  date: string;
  petInfo: string;
  title: string;
  content: string;
  mainImage: string;
  images: string[];
  likes: number;
  comments: number;
}
