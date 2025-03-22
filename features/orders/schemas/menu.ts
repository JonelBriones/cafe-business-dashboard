export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}
export interface Menu {
  [category: string]: MenuItem[];
}
