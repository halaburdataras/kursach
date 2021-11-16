import React, { useState } from "react";
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
          <div className={s.header_logo}>ProstoSki</div>
        </div>
        <div className={s.header_element}>
          <div className={s.header_element_block}>
            <p>UA</p>
          </div>
          <div className={s.header_element_block}>
            <i className="fas fa-user"></i>
          </div>
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
