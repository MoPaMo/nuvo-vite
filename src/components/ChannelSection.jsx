import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function ChannelSection({ name, children }) {
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);
  return (
    <>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsChannelsOpen(!isChannelsOpen)}
      >
        <div className="section-title text-gray-500 text-xs uppercase mt-5 mb-2 flex items-center">
          <span className=" text-gray-500 text-xs mr-1">
            {isChannelsOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
          {name}
        </div>
      </div>
      {isChannelsOpen && <div className="text-channels">{children}</div>}
    </>
  );
}
