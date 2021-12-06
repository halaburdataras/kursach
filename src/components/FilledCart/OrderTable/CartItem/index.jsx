import React, { useEffect, useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { TableCell, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import * as s from "./style.module.scss";
import NumberInput from "../../../NumberInput";
import { setQuantity } from "../../../../redux/cart/actions";
import { useDispatch } from "react-redux";

const CartItem = ({ onRemoveItem, item }) => {
  const [inputValue, setInputValue] = useState(item.quantity);
  const [basePrice, setBasePrice] = useState(item.price.price1);
  const [sum, setSum] = useState(basePrice * item.quantity);
  const [days, setDays] = useState(1);
  const dispatch = useDispatch();

  const onChangeQuantity = (value) =>
    dispatch(setQuantity({ id: item.id, value: +value }));
  const onChangeDays = (value) => {
    console.log(value);
    switch (value) {
      case 1:
        setBasePrice(item.price.price1);
        break;
      case 2:
        setBasePrice(item.price.price2);
        break;
      case 3:
        setBasePrice(item.price.price3);
        break;
      case 4:
        setBasePrice(item.price.price4);
        break;
      default:
        const pr = item.price.price4 + item.price.priceAdditional * (value - 4);
        setBasePrice(pr);
        break;
    }
  };

  useEffect(() => {
    setSum(basePrice * item.quantity);
  }, [basePrice, item.quantity]);

  return (
    <TableRow classes={{ root: s.root }} data-cy="cart-item">
      <TableCell classes={{ root: s.product }} data-cy="cart-item-img">
        <img className={s.itemImg} src={item.photo} alt="product-img" />
        <div className={s.text}>
          <span className={s.itemName}>{item.name}</span>

          <div className={s.itemDescription}>{item.description}</div>
        </div>
      </TableCell>
      <TableCell className={s.quantityWrapper}>
        <NumberInput
          quantity={days}
          onChangeQuantity={onChangeDays}
          setInputValue={setDays}
        />
      </TableCell>
      <TableCell classes={{ root: s.price }} data-cy="cart-item-description">
        <div>
          {Math.round(basePrice)}
          грн
        </div>
      </TableCell>
      <TableCell className={s.quantityWrapper}>
        <NumberInput
          quantity={inputValue}
          onChangeQuantity={onChangeQuantity}
          setInputValue={setInputValue}
        />
      </TableCell>
      <TableCell classes={{ root: s.price }}>
        <div className={s.priceWrapper}>
          <div>
            {Math.round(sum)}
            грн
          </div>
        </div>
      </TableCell>
      <TableCell classes={{ root: s.delete }}>
        <span className={s.deleteIcon}>
          <DeleteIcon
            onClick={() => {
              onRemoveItem(item.id);
            }}
            fontSize="default"
          />
        </span>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
