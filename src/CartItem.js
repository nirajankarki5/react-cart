import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CartItem = ({ title, price, quantity, img }) => {
  return (
    <div className="cart-item">
      <div className="item1">
        <img src={img} alt={title} />
        <div className="details">
          <h3>{title}</h3>
          <p>${price}</p>
          <button>remove</button>
        </div>
      </div>
      <div className="cart-qty-container">
        <IoIosArrowUp className="icon-btn" />
        <p>{quantity}</p>
        <IoIosArrowDown className="icon-btn" />
      </div>
    </div>
  );
};

export default CartItem;
