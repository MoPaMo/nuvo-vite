import React from "react";
import ServerIcon from "./ServerIcon";
import SideBarDivider from "./SideBarDivider";
import LeftSidebarButton from "./LeftSidebarButton";
import { Link } from "react-router-dom";

let imageSources = [
  "https://picsum.photos/400",
  "https://picsum.photos/500",
  "https://picsum.photos/600",
  "https://picsum.photos/700",
  "https://picsum.photos/400?a",
];

function LeftSidebar() {
  return (
    <div className="h-screen bg-gray-800 flex flex-col p-2 gap-2 pr-4">
      {/* Logo Button */}

      {/* Server List */}
      <div className="flex flex-col gap-2 overflow-scroll grow [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Link to="/">
          <div className="pl-4">
            <div className="rounded-3xl hover:rounded-md aspect-square transition-all ease-in-out duration-400 cursor-pointer w-12 h-12 bg-blue-600 "></div>
          </div>
        </Link>
        {/* Divider */}
        <div className="pl-4">
          <SideBarDivider color="bg-red-400" />
        </div>
        {imageSources.map((src, index) => (
          <Link to="/chat" key={index}>
            <ServerIcon src={src} />
          </Link>
        ))}

        {/* Add Button */}
        <LeftSidebarButton icon="add" />

        {/* Divider */}
        <div className="pl-4">
          <SideBarDivider color="bg-gray-400" />
        </div>

        {/* Download Button */}
        <LeftSidebarButton icon="download" />
      </div>

      {/* Explore Button */}
      <Link to="/discover">
        <LeftSidebarButton icon="explore" />
      </Link>
    </div>
  );
}

export default LeftSidebar;