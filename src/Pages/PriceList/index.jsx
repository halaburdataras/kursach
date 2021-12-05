import React from "react";
import TableItem from "../../components/TableItem";

import * as s from "./style.module.scss";

const PriceList = () => {
  return (
    <div className={s.priceList}>
      <div className={s.priceList_content}>
        <TableItem />
      </div>
    </div>
  );
};

export default PriceList;
