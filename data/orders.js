export const mockOrders = [
  {
    id: 1,
    customerName: "Alice Johnson",
    items: [
      { id: "1", name: "Espresso", quantity: 1, price: 3.0 },
      { id: "7", name: "Black Tea", quantity: 2, price: 3.0 },
    ],
    status: "Completed",
    paymentMethod: "Cash",
    createdAt: new Date("2025-02-10T09:15:00Z"),
  },
  {
    id: 2,
    customerName: "Bob Smith",
    items: [
      { id: "3", name: "Latte", quantity: 1, price: 4.5 },
      { id: "23", name: "Chocolate Croissant", quantity: 1, price: 3.75 },
    ],
    status: "Completed",
    paymentMethod: "Card",
    createdAt: new Date("2025-02-15T14:45:00Z"),
  },
  {
    id: 3,
    customerName: "Emma Davis",
    items: [
      { id: "11", name: "Iced Coffee", quantity: 1, price: 3.5 },
      { id: "45", name: "Chocolate Chip Cookie", quantity: 2, price: 2.0 },
    ],
    status: "Pending",
    paymentMethod: "Mobile Payment",
    createdAt: new Date("2025-02-20T18:20:00Z"),
  },

  // 📆 March Orders
  {
    id: 1,
    customerName: "John Doe",
    items: [
      { id: "3", name: "Latte", quantity: 2, price: 4.5 },
      { id: "21", name: "Croissant", quantity: 1, price: 3.0 },
    ],
    status: "Pending",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-01T08:30:00Z"),
  },
  {
    id: 2,
    customerName: "Samantha Green",
    items: [
      { id: "16", name: "Matcha Latte", quantity: 1, price: 5.0 },
      { id: "50", name: "Cheesecake Slice", quantity: 1, price: 4.5 },
    ],
    status: "Completed",
    paymentMethod: "Cash",
    createdAt: new Date("2025-03-05T10:10:00Z"),
  },
  {
    id: 3,
    customerName: "Michael Brown",
    items: [
      { id: "13", name: "Iced Latte", quantity: 1, price: 4.5 },
      { id: "27", name: "Danish", quantity: 1, price: 3.25 },
    ],
    status: "Cancelled",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-10T13:30:00Z"),
  },
  {
    id: 4,
    customerName: "Olivia Taylor",
    items: [
      { id: "5", name: "Mocha", quantity: 1, price: 4.75 },
      { id: "26", name: "Banana Nut Muffin", quantity: 2, price: 2.75 },
    ],
    status: "Pending",
    paymentMethod: "Mobile Payment",
    createdAt: new Date("2025-03-18T09:45:00Z"),
  },
  {
    id: 5,
    customerName: "William Scott",
    items: [
      { id: "31", name: "Egg & Cheese Sandwich", quantity: 1, price: 5.5 },
      { id: "12", name: "Cold Brew", quantity: 1, price: 4.0 },
    ],
    status: "Completed",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-22T07:50:00Z"),
  },
  {
    id: 6,
    customerName: "John Doe",
    items: [
      { id: "3", name: "Latte", quantity: 2, price: 4.5 },
      { id: "21", name: "Croissant", quantity: 1, price: 3.0 },
    ],
    status: "Pending",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-19T08:30:00Z"),
  },
  {
    id: 7,
    customerName: "Jane Smith",
    items: [
      { id: "11", name: "Iced Coffee", quantity: 1, price: 4.0 },
      { id: "24", name: "Blueberry Muffin", quantity: 1, price: 3.5 },
    ],
    status: "In Progress",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-19T09:00:00Z"),
  },
  {
    id: 8,
    customerName: "Michael Lee",
    items: [
      { id: "2", name: "Americano", quantity: 1, price: 3.0 },
      { id: "29", name: "Bagel with Cream Cheese", quantity: 1, price: 4.5 },
    ],
    status: "Completed",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-19T09:30:00Z"),
  },
  {
    id: 9,
    customerName: "Emily Davis",
    items: [
      { id: "17", name: "Chai Latte", quantity: 1, price: 4.5 },
      { id: "34", name: "Oatmeal Bowl", quantity: 3, price: 4.0 },
    ],
    status: "Cancelled",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-19T10:00:00Z"),
  },
  {
    id: 10,
    customerName: "Chris Brown",
    items: [
      { id: "9", name: "Espresso", quantity: 1, price: 3.0 },
      { id: "45", name: "Chocolate Chip Cookie", quantity: 2, price: 2.0 },
    ],
    status: "Pending",
    paymentMethod: "Card",
    createdAt: new Date("2025-03-19T10:30:00Z"),
  },
];
