import { InventoryItem } from "@/data/_types/inventory";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { inventory } from "@/data/inventory";
import { menuItems } from "@/data/menuItems";
import { MenuItem } from "@/features/orders/schemas/menu";
interface Inventory {
  value: InventoryItem[];
}
const initialState: Inventory = {
  value: inventory,
};

interface NewOrderItems {
  id: string;
  qty: number;
}
const menu: MenuItem[] = Object.values(menuItems).flat();

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    onNewOrderUpdateStock: (state, actions: PayloadAction<NewOrderItems[]>) => {
      // console.log("payload", actions.payload);
      console.log("updating stock");
      let updatedInventory = inventory;
      for (let item of actions.payload) {
        let products = menu.find((menuItem) => menuItem.id === item.id);

        if (!products) return;

        for (let product of products.ingredients) {
          updatedInventory = inventory.map((inventoryProduct) =>
            inventoryProduct.id === product.id
              ? {
                  ...inventoryProduct,
                  totalStock:
                    inventoryProduct.totalStock - product.quantity * item.qty,
                }
              : inventoryProduct
          );
        }
      }
      state.value = updatedInventory;
      console.log("updated inventory", updatedInventory);
      // const updatedInventory = inventory.map((item)=> item.id === actions.payload.id)
    },
  },
});
export const { onNewOrderUpdateStock } = inventorySlice.actions;

export default inventorySlice.reducer;
