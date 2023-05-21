import { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import { AppContext } from "./context";

const Navbar = () => {
  const { quantity } = useContext(AppContext);

  return (
    <nav>
      <h1>My Cart</h1>
      <div className="cart-icon-container">
        <p className="cart-qty">{quantity}</p>
        <AiFillShopping className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
