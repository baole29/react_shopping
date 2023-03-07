let products = [
  {
    id: 1,
    productName: "Keyboard - Pro",
    productPrice: 2000,
    productAmount: 100,
    productType: "Keyboard",
    productColor: "Blue",
  },

  {
    id: 2,
    productName: "Mouse - Vip",
    productPrice: 1000,
    productType: "Mouse",
    productAmount: 100,
    productColor: "Green",
  },

  {
    id: 3,
    productName: "Monitor - Cay chay",
    productPrice: 15000,
    productType: "Monitor",
    productAmount: 100,
    productColor: "Black",
  },

  {
    id: 4,
    productName: "MousePad Ultra Max",
    productPrice: 100,
    productAmount: 100,
    productType: "MousePad",
    productColor: "White",
  },
];

let revenue = [
  {
    day: Array.from([...Array(30).keys()], (x) =>
      Math.floor(Math.random() * 1000) + 300
    ),
    month: [
      {
        product: products[0],
        amount: 300,
        revenue: 30 * products[0]["productPrice"],
      },
      {
        product: products[1],
        amount: 500,
        revenue: 50 * products[1]["productPrice"],
      },
      {
        product: products[2],
        amount: 1000,
        revenue: 100 * products[2]["productPrice"],
      },
      {
        product: products[3],
        amount: 400,
        revenue: 40 * products[3]["productPrice"],
      },
    ],
  },
];

localStorage.setItem("products", JSON.stringify(products));

const initState = {
  products: products,
  statistical: {
    revenue: revenue,
    widget1: [
      {
        title: "Customer",
        value: 32133,
        increment: "5,9%",
      },
      {
        title: "Order",
        value: 3123,
        increment: "8,9%",
      },
      {
        title: "Revenue",
        value: "10232311$",
        increment: "5,1%",
      },
      {
        title: "Growth",
        value: '20,3%',
        increment: "5,9%",
      },
    ],
    widget2: [
      {
        product: products[0],
        revenue: 1974124
      },
      {
        product: products[1],
        revenue: 892324
      },
      {
        product: products[2],
        revenue: 614124
      },
      {
        product: products[3],
        revenue: 114124
      }
    ],
    widget3: Array.from([...Array(4).keys()], (x) =>
      Math.floor(Math.random() * 1000) + 300
    ),
  },
};

function reducer(state, action) {
  const handle = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  switch (action.type) {
    case "add": {
      state.products.push(action.product);
      return {
        ...state,
      };
    }

    case "update": {
      const index = state.products.indexOf(action.preProduct);
      if (index !== -1) {
        state.products[index] = action.updatedProduct;
      }
      return {
        ...state,
      };
    }

    case "delete": {
      state.products.splice(action.index, 1);
      handle(state.products);
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}

export { initState };
export default reducer;
