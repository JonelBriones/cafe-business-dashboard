import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItem } from "../schemas/order";
interface OrdersState {
  value: OrderItem[];
}
const initialState: OrdersState = {
  value: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    increment: (state) => {
      //   state.value += 1;
      console.log("adding", state.value);
    },
    addNewOrder: (state, action: PayloadAction<OrderItem>) => {
      let newOrder = {
        ...action.payload,
        id: state.value.length + 1,
        createdAt: new Date().toLocaleDateString(),
      };

      //   state.value = [...state.value, action.payload];
      state.value.push(newOrder);
    },
    decrement: (state) => {
      //   state.value -= 1;
      console.log("removing", state.value);
    },
  },
});
export const { increment, decrement, addNewOrder } = orderSlice.actions;
export default orderSlice.reducer;
