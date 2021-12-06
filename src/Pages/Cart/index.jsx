import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../components/EmptyCart";
import FilledCart from "../../components/FilledCart";
import { getCart } from "../../redux/cart/actions";

import * as s from "./style.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => ({
    cartItems: state.Cart.cart,
  }));

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className={s.cart}>
      {cartItems.length ? <FilledCart items={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
