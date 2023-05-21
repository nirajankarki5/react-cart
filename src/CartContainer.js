import { useContext } from "react";
import CartItem from "./CartItem";
import { AppContext } from "./context";

const CartContainer = () => {
  const { isLoading, cart, clearCart } = useContext(AppContext);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (cart.length === 0) {
    return <h1>No items in cart</h1>;
  }

  return (
    <main>
      <div className="cart-container">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <div className="total-container">
        <h2>Total:</h2>
        <h2>$1099.99</h2>
      </div>
      <div className="clear-cart-btn">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </main>
  );
};

export default CartContainer;
