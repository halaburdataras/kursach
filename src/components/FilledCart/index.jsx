import React from "react";
import OrderTable from "./OrderTable";

import * as s from "./style.module.scss";

const FilledCart = ({ items }) => {
  return (
    <div className={s.root}>
      <div className={s.orderWrapper}>
        <div className={s.orderTable}>
          <OrderTable items={items} />
        </div>
      </div>
      <button className={s.whiteThemeButton}>Замовити</button>
    </div>
  );
};

export default FilledCart;
