export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  ingredients: Ingredients[];
}
export interface Ingredients {
  id: string;
  name: string;
  quantity: number;
}

export interface Menu {
  [category: string]: MenuItem[];
}

// use this
