import { MenuItem } from "./menu";

export interface OrderItem {
  createdAt: string;
  customerName?: string;
  paymentMethod: string;
  id: string;
  items: itemOrder[];
  status: string;
  total: number;
}
export interface itemOrder {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type CartInterface = {
  id: string;
  items: CartItems[];
  timestamp: string;
  paymentMethod: string;
  total: number;
  status: string;
  name: string;
};
export interface CartItems {
  name: string;
  quantity: number;
  price: number;
}

// export interface Order {
//   [category: string]: OrderItem[];
// }
