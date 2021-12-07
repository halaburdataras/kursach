import React from "react";
import { NavLink } from "react-router-dom";

import * as s from "./style.module.scss";

const ListItem = ({ title, key, link, action }) => {
  return (
    <li className={s.listItem} key={key}>
      <NavLink to={link} onClick={action}>
        {title}
      </NavLink>
    </li>
  );
};

export default ListItem;
