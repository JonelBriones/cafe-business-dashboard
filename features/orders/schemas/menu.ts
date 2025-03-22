export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  stock: number;
  minStock: number;
}
export interface Menu {
  [category: string]: MenuItem[];
}
