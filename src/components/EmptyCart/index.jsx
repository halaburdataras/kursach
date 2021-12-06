import React from "react";
import { NavLink } from "react-router-dom";

import * as s from "./style.module.scss";

const EmptyCart = () => {
  return (
    <>
      <div className={s.root}>
        <h2 className={s.whiteThemeTitle}>Ваш кошик пустий!</h2>
        <img
          className={s.image}
          src="https://res.cloudinary.com/didw9zkq6/image/upload/v1638820527/Ski/pngfind.com-cart-png-2727925_cz4ds8.png"
        />
        <NavLink to="/catalog">
          <button className={s.whiteThemeButton}>В каталог</button>
        </NavLink>
      </div>
    </>
  );
};

export default EmptyCart;
