export const menuItems = {
  // ☕ Coffee
  coffee: [
    {
      id: "1",
      name: "Espresso",
      price: 3.0,
      ingredients: [{ id: "I-001", name: "Coffee Beans", quantity: 15 }],
      image: "/images/coffee/espresso.jpg",
    },
    {
      id: "2",
      name: "Americano",
      price: 3.5,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-006", name: "Water", quantity: 15 },
      ],
      image: "/images/coffee/americano.jpg",
    },
    {
      id: "3",
      name: "Latte",
      price: 4.5,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-003", name: "Milk", quantity: 200 },
      ],
      image: "/images/coffee/latte.jpg",
    },
    {
      id: "4",
      name: "Cappuccino",
      price: 4.0,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-003", name: "Milk", quantity: 200 },
        { id: "I-004", name: "Milk Foam", quantity: 30 },
      ],
      image: "/images/coffee/cappuccino.jpg",
    },
    {
      id: "5",
      name: "Mocha",
      price: 4.75,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-003", name: "Milk", quantity: 150 },
        { id: "I-005", name: "Chocolate Syrup", quantity: 20 },
      ],
      image: "/images/coffee/mocha.jpg",
    },
    {
      id: "6",
      name: "Macchiato",
      price: 4.25,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-004", name: "Milk Foam", quantity: 30 },
      ],
      image: "/images/coffee/macchiato.jpg",
    },
  ],

  // 🍵 Tea
  // tea: [
  //   {
  //     id: "7",
  //     name: "Black Tea",
  //     price: 3.0,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/tea/black_tea.jpg",
  //   },
  //   {
  //     id: "8",
  //     name: "Green Tea",
  //     price: 3.0,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/tea/green_tea.jpg",
  //   },
  //   {
  //     id: "9",
  //     name: "Chai",
  //     price: 3.5,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/tea/chai.jpg",
  //   },
  //   {
  //     id: "10",
  //     name: "Herbal Tea",
  //     price: 3.5,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/tea/herbal_tea.jpg",
  //   },
  // ],

  // ❄️ Iced Beverages
  icedBeverages: [
    {
      id: "11",
      name: "Iced Americano",
      price: 3.5,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-006", name: "Water", quantity: 15 },
        { id: "I-007", name: "Ice", quantity: 100 },
      ],
      image: "/images/iced/iced_coffee.jpg",
    },
    {
      id: "12",
      name: "Cold Brew",
      price: 4.0,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-006", name: "Water", quantity: 15 },
        { id: "I-007", name: "Ice", quantity: 100 },
      ],
      image: "/images/iced/cold_brew.jpg",
    },
    {
      id: "13",
      name: "Iced Latte",
      price: 4.5,
      ingredients: [
        { id: "I-001", name: "Coffee Beans", quantity: 15 },
        { id: "I-003", name: "Milk", quantity: 200 },
        { id: "I-007", name: "Ice", quantity: 100 },
      ],
      image: "/images/iced/iced_latte.jpg",
    },
  ],

  // 🌟 Specialty Drinks
  specialtyDrinks: [
    {
      id: "16",
      name: "Matcha Latte",
      price: 5.0,
      ingredients: [
        {
          id: "I-002",
          name: "Matcha Powder",
          quantity: 2,
          unit: "g",
          costPerUnit: 0.2,
        }, // $0.40
        { id: "I-003", name: "Milk", quantity: 200 },
        { id: "I-006", name: "Water", quantity: 15 },

        { id: "I-008", name: "Sweetener", quantity: 5 },
      ],
      image: "/images/specialty/matcha_latte.jpg",
    },
    // {
    //   id: "17",
    //   name: "Chai Latte",
    //   price: 4.75,
    //   ingredients: [
    //     {name: "", quantity: 0, unit: "",costPerUnit: 0}
    //   ],
    //   image: "/images/specialty/chai_latte.jpg",
    // },
    // {
    //   id: "18",
    //   name: "Frappuccino",
    //   price: 5.5,
    //   ingredients: [
    //     {name: "", quantity: 0, unit: "",costPerUnit: 0}
    //   ],
    //   image: "/images/specialty/frappuccino.jpg",
    // },
    // {
    //   id: "19",
    //   name: "Smoothie",
    //   price: 5.0,
    //   ingredients: [
    //     {name: "", quantity: 0, unit: "",costPerUnit: 0}
    //   ],
    //   image: "/images/specialty/smoothie.jpg",
    // },
    // {
    //   id: "20",
    //   name: "Milkshake",
    //   price: 5.25,
    //   ingredients: [
    //     {name: "", quantity: 0, unit: "",costPerUnit: 0}
    //   ],
    //   image: "/images/specialty/milkshake.jpg",
    // },
  ],

  // 🥐 Bakery & Pastries
  // bakery: [
  //   {
  //     id: "21",
  //     name: "Plain Croissant",
  //     price: 3.0,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/plain_croissant.jpg",
  //   },
  //   {
  //     id: "22",
  //     name: "Almond Croissant",
  //     price: 3.75,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/almond_croissant.jpg",
  //   },
  //   {
  //     id: "23",
  //     name: "Chocolate Croissant",
  //     price: 3.75,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/chocolate_croissant.jpg",
  //   },
  //   {
  //     id: "24",
  //     name: "Blueberry Muffin",
  //     price: 2.5,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/blueberry_muffin.jpg",
  //   },
  //   {
  //     id: "25",
  //     name: "Chocolate Chip Muffin",
  //     price: 2.5,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/chocolate_chip_muffin.jpg",
  //   },
  //   {
  //     id: "26",
  //     name: "Banana Nut Muffin",
  //     price: 2.75,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/banana_nut_muffin.jpg",
  //   },
  //   {
  //     id: "27",
  //     name: "Danish",
  //     price: 3.25,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/danish.jpg",
  //   },
  //   {
  //     id: "28",
  //     name: "Scone",
  //     price: 3.25,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/scone.jpg",
  //   },
  //   {
  //     id: "29",
  //     name: "Bagel with Cream Cheese",
  //     price: 3.5,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/bagel.jpg",
  //   },
  //   {
  //     id: "30",
  //     name: "Avocado Toast",
  //     price: 5.5,
  //     ingredients: [
  //       {name: "", quantity: 0, unit: "",costPerUnit: 0}
  //     ],
  //     image: "/images/bakery/avocado_toast.jpg",
  //   },
  // ],

  sandwiches: [
    {
      id: "20",
      name: "Ham & Cheese Sandwich",
      price: 9.0,
      ingredients: [
        { id: "I-009", name: "Bread", quantity: 2 },
        { id: "I-016", name: "Ham", quantity: 50 },
        { id: "I-011", name: "Cheese", quantity: 20 },
      ],
      image: "/images/bakery/avocado_toast.jpg",
    },
    {
      id: "21",
      name: "Turkey & Swiss Sandwich",
      price: 10.5,
      ingredients: [
        { id: "I-009", name: "Bread", quantity: 2 },
        { id: "I-010", name: "Turkey", quantity: 50 },
        { id: "I-011", name: "Swiss Cheese", quantity: 20 },
      ],
      image: "/images/bakery/avocado_toast.jpg",
    },
    {
      id: "22",
      name: "Veggie Sandwich",
      price: 8.0,
      ingredients: [
        {
          id: "I-009",
          name: "Bread",
          quantity: 2,
          unit: "slices",
          costPerUnit: 0.5,
        },
        { id: "I-012", name: "Lettuce", quantity: 10 },
        { id: "I-013", name: "Tomato", quantity: 15 },
        { id: "I-014", name: "Cucumber", quantity: 10 },
        { id: "I-015", name: "Mayonnaise", quantity: 15 },
      ],
      image: "/images/bakery/avocado_toast.jpg",
    },
  ],
};
