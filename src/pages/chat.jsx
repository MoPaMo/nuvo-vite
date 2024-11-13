import React from "react";
import {
  MessageCircle,
  Bell,
  Users,
  Search,
  Gift,
  SmilePlus,
  SendHorizontal,
  Hash,
} from "lucide-react";

const TextChannel = () => {
  return (
    <div className="bg-gray-800 h-screen w-full flex flex-col">
      {/* Top Navigation Bar */}
      <div className="flex items-center px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-gray-200 font-medium"># zocken</span>
        </div>
        <div className="flex-1 flex items-center justify-end space-x-4">
          <MessageCircle className="w-5 h-5 text-gray-400" />
          <Bell className="w-5 h-5 text-gray-400" />
          <Users className="w-5 h-5 text-gray-400" />
          <div className="relative   border-transparent focus:border-transparent focus:ring-0 focus:border-0 border-0">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-900 text-gray-200 px-3 py-1 rounded text-sm w-40   border-transparent focus:border-transparent focus:ring-0 focus:border-0"
            />
            <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end overflow-y-auto px-4 py-4">
        {/* Welcome Message */}
        <div className="mb-6">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl text-gray-200">
              <Hash />
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-200 mb-2">
            Welcome to #zocken!
          </h1>
          <p className="text-gray-400">
            This is the start of the #zocken channel.
          </p>
          <div className="text-xs text-gray-500 mt-2">August 17, 2022</div>
        </div>

        {/* Message */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex-shrink-0" />
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-400 font-medium">Hexenjäger</span>
              <span className="text-xs text-gray-500">8/17/22, 5:16 PM</span>
            </div>
            <p className="text-gray-300">moin</p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="px-4 py-4 border-t border-gray-700">
        <div className="bg-gray-700 rounded-lg flex items-center p-2">
          <button className="p-2 text-gray-400 hover:text-gray-300">
            <SmilePlus className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Message #zocken"
            className="bg-transparent flex-1 mx-2 text-gray-200 placeholder-gray-400 focus:outline-none"
          />
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-300">
              <Gift className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-300">
              <SendHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextChannel;
