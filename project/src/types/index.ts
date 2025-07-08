export type UserRole = 'viewer' | 'uploader';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

export interface Product {
  id: string;
  category: 'recipe' | 'food' | 'artwork' | 'homedesign';
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  uploaderId: string;
  uploaderName: string;
  createdAt: string;
  rating: number;
  ratingCount: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Rating {
  userId: string;
  productId: string;
  value: number;
}