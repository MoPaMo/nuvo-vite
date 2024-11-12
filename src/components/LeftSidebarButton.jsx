import React from "react";
import { Compass, Plus, ArrowDownToLine } from "lucide-react";

function LeftSidebarButton({ icon }) {
  return (
    <div>
      <div className="rounded-3xl hover:rounded-xl aspect-square transition-all ease-in-out duration-400 cursor-pointer w-12 h-12 bg-slate-600 flex items-center justify-center text-green-300 hover:text-white hover:bg-green-500 ml-4">
        <span className="">
          {icon === "explore" && <Compass />}
          {icon === "add" && <Plus />}
          {icon === "download" && <ArrowDownToLine />}
        </span>
      </div>
    </div>
  );
}

export default LeftSidebarButton;
