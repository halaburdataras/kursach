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

  console.log(cartItems);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className={s.cart}>
      {cartItems.length ? <FilledCart items={cartItems} /> : <EmptyCart />}
    </div>
  );
  // cartItems.length ? <FilledCart items={cartItems} /> :
  //   return (
  //     <div className={s.cart}>
  //       <div className={s.cart_wrapper}>
  //         <div className={s.cart_header}>
  //           <NavLink to="/" className={s.exit}>
  //             <i class="fas fa-times"></i>
  //           </NavLink>
  //         </div>
  //         <div className={s.cart_container}></div>
  //       </div>
  //     </div>
  //   );
};

export default Cart;
