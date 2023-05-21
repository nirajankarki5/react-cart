import React, { useReducer } from "react";
import reducerFn from "./reducerFn";
import initialData from "./data";

const initialState = {
  isLoading: false,
  cart: initialData,
  total: 0,
  quantity: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const addQty = (id) => {
    dispatch({ type: "ADD_QTY", id: id });
  };

  const minusQty = (id) => {
    dispatch({ type: "MINUS_QTY", id: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, removeItem, addQty, minusQty }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
