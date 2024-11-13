import React from "react";
import LeftSidebar from "../components/MainSide";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex">
      <LeftSidebar />
      <Outlet />
    </div>
  );
}
