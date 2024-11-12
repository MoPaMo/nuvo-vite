import React from "react";

function ServerIcon({ src }) {
  return (
    <div className="pl-4">
      <img
        src={src}
        alt="img"
        className="rounded-3xl hover:rounded-md aspect-square transition-all ease-in-out duration-400 cursor-pointer w-12 "
      />
    </div>
  );
}

export default ServerIcon;
