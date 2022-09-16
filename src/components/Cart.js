import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  
  return (
    <div className="cartIcon">
      <h3 onClick={() => dispatch(cartActions.showCart())}>
        Cart: {quantity} Items
      </h3>
    </div>
  );
};

export default Cart;
