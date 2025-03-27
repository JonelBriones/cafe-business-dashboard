import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItem } from "../../../features/orders/schemas/order";
interface OrdersState {
  value: OrderItem[];
}
const initialState: OrdersState = {
  value: [
    {
      id: "924",
      orderNumber: "1",
      customerName: "Alice Johnson",
      items: [{ id: "1", name: "Espresso", quantity: 1, price: 3.0 }],
      status: "Pending",
      paymentMethod: "Cash",
      createdAt: new Date("2025-02-10T09:15:00Z").toString(),
    },
  ],
};

interface UpdateStatus {
  id: string;
  status: string;
}

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<OrderItem>) => {
      let newOrder = {
        ...action.payload,
        id: `${Math.floor(Math.random() * 1000)}`,
        orderNumber: (state.value.length + 1).toString(),
        createdAt: new Date().toLocaleDateString(),
      };

      //   state.value = [...state.value, action.payload];
      state.value.push(newOrder);
    },
    updateOrderStatus: (state, action: PayloadAction<UpdateStatus>) => {
      console.log("hello");

      state.value = state.value.map((order) =>
        order.id == action.payload.id
          ? { ...order, status: action.payload.status }
          : order
      );
    },
  },
});
export const { updateOrderStatus, addNewOrder } = orderSlice.actions;
export default orderSlice.reducer;
