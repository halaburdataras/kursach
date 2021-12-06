import React from "react";
import { useDispatch } from "react-redux";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

import * as s from "./style.module.scss";
import { removeFromCart } from "../../../redux/cart/actions";
import CartItem from "./CartItem";

const OrderTable = ({ items }) => {
  const dispatch = useDispatch();

  const onRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const cartItems = items.map((item) => (
    <CartItem onRemoveItem={onRemoveItem} item={item} />
  ));

  return (
    <div className={s.root}>
      <h2 className={s.titleWrapper}>Кошик</h2>
      <div className={s.table}>
        <Table>
          <TableHead>
            <TableRow
              classes={{
                root: s.tableHeader,
              }}
            >
              <TableCell>Товар</TableCell>
              <TableCell>Кількість днів</TableCell>
              <TableCell>Ціна за одиницю</TableCell>
              <TableCell>Кількість</TableCell>
              <TableCell>Загальна сума</TableCell>
              <TableCell>Дії</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{cartItems}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
