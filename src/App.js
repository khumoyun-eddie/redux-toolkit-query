import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

// let isInitial = true;
const App = () => {
  const [isInitial, setIsInitial] = useState(true);
  const { cartVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      // isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
