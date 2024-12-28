import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartSummary() {
  const { cart } = useContext(CartContext);

  const totalPrice = (cart || []).reduce(
    (sum, dish) => sum + (dish.price || 0),
    0
  );

  return (
    <div>
      <h2>Preço Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default CartSummary;
