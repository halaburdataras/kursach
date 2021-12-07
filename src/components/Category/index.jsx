import React from "react";
import { NavLink } from "react-router-dom";

import * as s from "./style.module.scss";

const Category = ({ title, photo, path, style = {} }) => {
  return (
    <NavLink to={path} style={{ ...style }} className={s.category}>
      <img alt={title} src={photo} />
      <div className={s.category_shadow}>
        <p>{title}</p>
      </div>
    </NavLink>
  );
};

export default Category;
