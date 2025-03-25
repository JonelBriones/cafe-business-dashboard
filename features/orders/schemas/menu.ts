export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  ingredients: Ingredients[];
}
export interface Ingredients {
  name: string;
  quantity: number;
  unit: string;
}

export interface Menu {
  [category: string]: MenuItem[];
}

// use this
