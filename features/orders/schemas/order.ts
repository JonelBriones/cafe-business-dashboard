import { MenuItem } from "./menu";

export interface OrderItem {
  createdAt: string;
  customerName: string;
  id: string;
  items: MenuItem[];
  status: string;
  total: number;
}
// export interface Order {
//   [category: string]: OrderItem[];
// }
