import React from "react";

import { texts } from "./constants";
import * as s from "./style.module.scss";

const TableItem = () => {
  return texts.map((el) => {
    return (
      <div className={s.tableRow}>
        {el.map((item) => (
          <div className={s.tableRow_item}>{item}</div>
        ))}
      </div>
    );
  });
};

export default TableItem;
