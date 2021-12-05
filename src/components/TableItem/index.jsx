import React from "react";

import * as s from "./style.module.scss";

const TableItem = () => {
  return (
    <div className={s.tableRow}>
      <div className={s.tableRow_item}>1</div>
      <div className={s.tableRow_item}>2</div>
      <div className={s.tableRow_item}>3</div>
      <div className={s.tableRow_item}>4</div>
      <div className={s.tableRow_item}>5</div>
      <div className={s.tableRow_item}>6</div>
    </div>
  );
};

export default TableItem;
