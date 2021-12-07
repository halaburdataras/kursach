import React from "react";

import * as s from "./style.module.scss";
import { titles } from "./constants";
import ListItem from "./ListItem";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const sidebarElements = titles.map((el, index) => (
    <ListItem
      title={el.title}
      link={el.link}
      key={index}
      action={handleCloseSidebar}
    />
  ));

  return (
    <div>
      <div className={isSidebarOpen ? `${s.sidebar} ${s.active}` : s.sidebar}>
        <ul className={s.sidebar_menu}>{sidebarElements}</ul>
      </div>
      <div
        className={
          isSidebarOpen ? `${s.blackScreen} ${s.active}` : s.blackScreen
        }
        onClick={handleCloseSidebar}
      />
    </div>
  );
};

export default Sidebar;
