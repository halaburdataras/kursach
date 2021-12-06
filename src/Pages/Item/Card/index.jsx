import React, { useState } from "react";

import * as s from "./style.module.scss";

const Card = ({ item, handleAddToCart }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={s.card}>
      <img src={item.photo} alt={item.description} />
      <div className={s.shadow}>
        <div className={s.texts}>
          <p className={s.texts_name}>
            {item.name}
            {" - "}
            <span className={s.price}>{item.price.price1} грн</span>
          </p>
          <p className={s.texts_description}>{item.description}</p>
        </div>
        <div className={s.btnContainer}>
          <p className={s.btnContainer_price}></p>
          <button
            onMouseDown={() => {
              setActive(true);
            }}
            onMouseUp={() => {
              setActive(false);
            }}
            onClick={() => {
              handleAddToCart(item);
            }}
            className={active && s.active}
          >
            Додати в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
