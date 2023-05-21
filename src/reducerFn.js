const reducerFn = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }

  if (action.type === "ADD_QTY") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return { ...state, cart: newCart };
  }

  if (action.type === "MINUS_QTY") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return { ...state, cart: newCart };
  }

  return state;
};

export default reducerFn;
