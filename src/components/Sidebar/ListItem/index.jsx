import React from "react";
import { NavLink } from "react-router-dom";

import * as s from "./style.module.scss";

const ListItem = ({ title, key, link }) => {
  return (
    <li className={s.listItem} key={key}>
      <NavLink to={link}>{title}</NavLink>
    </li>
  );
};

export default ListItem;
