import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../redux/cart/actions";
import { stuffSelector } from "../../redux/selectors/stuff.selectors";
import { getStuffByCategory } from "../../redux/stuff/actions";
import Card from "./Card";

import * as s from "./style.module.scss";

const Item = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { category } = params;

  const { items, loading } = useSelector(stuffSelector);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getStuffByCategory(category));
  }, [dispatch, category]);

  const cards = items.map((item) => (
    <Card item={item} handleAddToCart={handleAddToCart} />
  ));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.item}>
      <div className={s.item_grid}>{cards}</div>
    </div>
  );
};

export default Item;
