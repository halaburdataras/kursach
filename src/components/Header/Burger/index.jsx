import React, { useEffect, useRef } from "react";

import menuAnim from "../../../animations/menu.anim";
import * as s from "./style.module.scss";

const Burger = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    menuAnim(isSidebarOpen, menuRef.current.childNodes);
  });

  return (
    <div ref={menuRef} className={s.burger} onClick={handleMenuClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
