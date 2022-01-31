import { Product } from './product';

export interface ProductsAPIResponse {
  stores: Store[];
  categories: Category[];
  products: Product[];
  orders: Order[];
  detailsOrders: DetailsOrder[];
}

export interface Category {
  id: number;
  name: string;
}

export interface DetailsOrder {
  id: number;
  orderId: number;
  quantity: number;
  productName: string;
}

export interface Order {
  id: number;
  name: string;
  date: string;
  shippingAddress: string;
  city: string;
  pickup: boolean;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  openingHours: string;
}
