// src/components/ChannelItem.js
import React from "react";
import { Hash, Bot, Volume2, CircleHelp } from "lucide-react";

function ChannelItem({ label, type, mid }) {
  const getIcon = () => {
    switch (type) {
      case "text":
        return <Hash size={24} strokeWidth={2} />;
      case "bots":
        return <Bot size={24} strokeWidth={2} />;
      case "voice":
        return <Volume2 size={24} strokeWidth={2} />;
      default:
        return <CircleHelp size={24} strokeWidth={2} />;
    }
  };
    const { slug } = useParams();
    const isActive = slug == mid;
    return (
      <Link href={`/server/${mid}`}>
    <div
      className={`channel flex items-center p-2 text-gray-300 cursor-pointer rounded hover:bg-gray-600 transition duration-200 ${
        isActive ? "bg-gray-700" : ""
      }`}
    >
      <span className="channel-icon mr-2">{getIcon()}</span>
      {label}
            </div>
        </Link>
  );
}

export default ChannelItem;
