"use client";
import React, { useEffect } from "react";

import TextChannel from "./chat";
import ServerSidebar from "../components/ServerSidebar";
import { Outlet } from "react-router-dom";

export default function Server({ children }) {
    return (
      <div className="flex flex-row h-screen bg-slate-800 w-full">
        <ServerSidebar />
        <Outlet />
      </div>
    );
}
  
