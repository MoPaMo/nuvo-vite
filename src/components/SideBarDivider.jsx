import React from "react";

function SideBarDivider({ color = "gray-100" }) {
  return (
    <div className="flex flex-row justify-center">
      <hr className={`w-10 h-1 mx-auto ${color} border-0 rounded`} />
    </div>
  );
}

export default SideBarDivider;
