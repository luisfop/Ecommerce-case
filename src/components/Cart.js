import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {cartActions} from '../store/cart-slice';
import "./Cart.css";
const Cart = () => {

  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const handleShowCart = () => {
    dispatch(cartActions.showCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
