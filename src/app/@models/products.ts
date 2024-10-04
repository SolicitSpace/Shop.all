export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

type Rating = {
  count: number;
  rate: number;
};

export interface BannerProduct {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string; // Assuming the image can be a URL or a relative path
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: 'INSTOCK' | 'OUTOFSTOCK' | 'DISCONTINUED'; // Use string literals for predefined statuses
  rating: number;
}
