import React from "react";
import TopBar from "../components/globalcomponents/topbar/TopBar";
import SideBar from "../components/globalcomponents/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
