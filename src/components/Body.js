import React from "react";
import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Body;
