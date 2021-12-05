import React from "react";

import * as s from "./style.module.scss";

const ListItem = ({ title, key }) => {
  return (
    <li className={s.listItem} key={key}>
      {title}
    </li>
  );
};

export default ListItem;
