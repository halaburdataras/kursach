import React from "react";

import * as s from "./style.module.scss";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div>
      <div className={isSidebarOpen ? `${s.sidebar} ${s.active}` : s.sidebar}>
        I am Sidebar!
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
