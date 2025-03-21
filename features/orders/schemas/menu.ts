export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}
export interface Menu {
  [category: string]: MenuItem[];
}
