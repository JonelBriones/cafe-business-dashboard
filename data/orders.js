export const mockOrders = [
  {
    id: "ORD001",
    customerName: "John Doe",
    items: [
      { id: "1", name: "Latte", quantity: 2, price: 4.5 },
      { id: "2", name: "Croissant", quantity: 1, price: 3.0 },
    ],
    total: 12.0,
    status: "Pending",
    createdAt: "2025-03-19T08:30:00Z",
  },
  {
    id: "ORD002",
    customerName: "Jane Smith",
    items: [
      { id: "3", name: "Iced Coffee", quantity: 1, price: 4.0 },
      { id: "4", name: "Blueberry Muffin", quantity: 1, price: 3.5 },
    ],
    total: 7.5,
    status: "In Progress",
    createdAt: "2025-03-19T09:00:00Z",
  },
  {
    id: "ORD003",
    customerName: "Michael Lee",
    items: [
      { id: "5", name: "Americano", quantity: 1, price: 3.0 },
      { id: "6", name: "Bagel with Cream Cheese", quantity: 1, price: 4.5 },
    ],
    total: 7.5,
    status: "Completed",
    createdAt: "2025-03-19T09:30:00Z",
  },
  {
    id: "ORD004",
    customerName: "Emily Davis",
    items: [
      { id: "7", name: "Chai Latte", quantity: 1, price: 4.5 },
      { id: "8", name: "Oatmeal", quantity: 1, price: 5.0 },
    ],
    total: 9.5,
    status: "Cancelled",
    createdAt: "2025-03-19T10:00:00Z",
  },
  {
    id: "ORD005",
    customerName: "Chris Brown",
    items: [
      { id: "9", name: "Espresso", quantity: 1, price: 3.0 },
      { id: "10", name: "Chocolate Chip Cookie", quantity: 2, price: 2.5 },
    ],
    total: 8.0,
    status: "Pending",
    createdAt: "2025-03-19T10:30:00Z",
  },
];
