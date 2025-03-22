export const mockOrders = [
  {
    id: "1",
    customerName: "John Doe",
    items: [
      { id: "3", name: "Latte", quantity: 2, price: 4.5 },
      { id: "21", name: "Croissant", quantity: 1, price: 3.0 },
    ],
    total: 12.0,
    status: "Pending",
    paymentMethod: "Card",
    createdAt: "2025-03-19T08:30:00Z",
  },
  {
    id: "2",
    customerName: "Jane Smith",
    items: [
      { id: "11", name: "Iced Coffee", quantity: 1, price: 4.0 },
      { id: "24", name: "Blueberry Muffin", quantity: 1, price: 3.5 },
    ],
    total: 7.5,
    status: "In Progress",
    paymentMethod: "Card",
    createdAt: "2025-03-19T09:00:00Z",
  },
  {
    id: "3",
    customerName: "Michael Lee",
    items: [
      { id: "2", name: "Americano", quantity: 1, price: 3.0 },
      { id: "29", name: "Bagel with Cream Cheese", quantity: 1, price: 4.5 },
    ],
    total: 7.5,
    status: "Completed",
    paymentMethod: "Card",
    createdAt: "2025-03-19T09:30:00Z",
  },
  {
    id: "4",
    customerName: "Emily Davis",
    items: [
      { id: "17", name: "Chai Latte", quantity: 1, price: 4.5 },
      { id: "34", name: "Oatmeal Bowl", quantity: 1, price: 4.0 },
    ],
    total: 9.5,
    status: "Cancelled",
    paymentMethod: "Card",
    createdAt: "2025-03-19T10:00:00Z",
  },
  {
    id: "5",
    customerName: "Chris Brown",
    items: [
      { id: "9", name: "Espresso", quantity: 1, price: 3.0 },
      { id: "45", name: "Chocolate Chip Cookie", quantity: 2, price: 2.0 },
    ],
    total: 8.0,
    status: "Pending",
    paymentMethod: "Card",
    createdAt: "2025-03-19T10:30:00Z",
  },
];
