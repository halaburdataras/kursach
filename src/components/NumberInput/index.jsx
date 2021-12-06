import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import * as s from "./style.module.scss";

const NumberInput = ({ onChangeQuantity, quantity, setInputValue }) => {
  const setQuantityFromInput = (e) => {
    let num;
    if (e.target.value.match(/\D/g)) {
      num = 1;
    } else if (e.target.value < 1) {
      num = 1;
    } else if (e.target.value > 1000) {
      num = 1000;
    } else {
      num = e.target.value;
    }
    setInputValue(Number(num));
    onChangeQuantity(Number(num));
  };

  return (
    <div className={s.root} data-cy="cart-item-quantity">
      <Button
        className={s.button}
        onClick={() => {
          onChangeQuantity(quantity - 1);
          setInputValue(quantity - 1);
        }}
        disabled={quantity <= 1}
      >
        <RemoveIcon />
      </Button>
      <TextField
        type="string"
        value={quantity}
        id="filled-basic"
        variant="outlined"
        onChange={setQuantityFromInput}
        inputProps={{
          style: { textAlign: "center", width: "20px", height: "3px" },
        }}
      />
      <Button
        className={s.button}
        onClick={() => {
          onChangeQuantity(quantity + 1);
          setInputValue(quantity + 1);
        }}
        disabled={quantity >= 1000}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default NumberInput;
