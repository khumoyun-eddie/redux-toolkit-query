import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items: cartItems, totalQuantity } = useSelector(
    (state) => state.cart
  );
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!totalQuantity && <p>Cart is empty</p>}
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
