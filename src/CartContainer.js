import CartItem from "./CartItem";
import data from "./data";

const CartContainer = () => {
  return (
    <main>
      <div className="cart-container">
        {data.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr />
      <div className="total-container">
        <h2>Total:</h2>
        <h2>$1099.99</h2>
      </div>
      <div className="clear-cart-btn">
        <button>Clear Cart</button>
      </div>
    </main>
  );
};

export default CartContainer;
