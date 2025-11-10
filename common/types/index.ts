export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
  products: Product[];
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  colors: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Storage {
  id: string;
  value: string;
}
