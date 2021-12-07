import React, { useState } from "react";
import Modal from "../Modal";
import OrderTable from "./OrderTable";

import * as s from "./style.module.scss";

const FilledCart = ({ items }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className={s.root}>
      <div className={s.orderWrapper}>
        <div className={s.orderTable}>
          <OrderTable items={items} />
        </div>
      </div>
      <button
        className={s.whiteThemeButton}
        onClick={() => {
          setIsCartOpen(true);
        }}
      >
        Оформити замовлення
      </button>
      <Modal isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </div>
  );
};

export default FilledCart;
