import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import Burger from "./Burger";

import * as s from "./style.module.scss";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={s.root}>
      <header className={s.header}>
        <div className={s.header_element}>
          <Burger
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <NavLink to="/" className={s.header_logo}>
            ProstoSki
          </NavLink>
        </div>
        <div className={s.header_element}>
          <div className={s.header_element_block}>
            <p>UA</p>
          </div>
          <NavLink to="/cart" className={s.header_element_block}>
            <i class="fas fa-shopping-cart"></i>
          </NavLink>
        </div>
      </header>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </div>
  );
};

export default Header;
