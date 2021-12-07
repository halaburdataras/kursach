import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/actions";
import * as s from "./style.module.scss";

const Modal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleCreateCheckout = () => {
    dispatch(clearCart());
    setIsOpen(false);
  };
  return (
    <div
      className={isOpen ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className={isOpen ? `${s.modal_content} ${s.active}` : s.modal_content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p>Щоб підтвердити покупку, введіть свої дані</p>
        <div className={s.inputs}>
          <TextField
            id="outlined-basic"
            fullWidth
            label="Ім'я"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Прізвище"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Мобільний номер"
            variant="outlined"
          />
        </div>
        <button className={s.whiteThemeButton} onClick={handleCreateCheckout}>
          Замовити
        </button>
      </div>
    </div>
  );
};

export default Modal;
