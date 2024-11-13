import React from 'react';
import {
  Users,
  Grid,
  Share,
  Mic,
  PhoneOff,
  Maximize2,
  SunMedium,
  SmilePlus,
  ChevronDown,
  MessageSquare
} from 'lucide-react';

const VideoCallUI = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Top bar */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <SunMedium className="h-5 w-5" />
          <span className="font-medium">Social Space</span>
        </div>
        <div className="flex items-center gap-4">
          <Users className="h-5 w-5" />
          <Grid className="h-5 w-5" />
          <div className="relative">
            <div className="h-2 w-2 bg-red-500 rounded-full absolute -top-1 -right-1" />
            <MessageSquare className="h-5 w-5" />
          </div>
          <button className="p-1 hover:bg-gray-700 rounded">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto mt-8 px-4">
        {/* User card */}
        <div className="bg-[#d4c4b5] rounded-lg aspect-video mb-4 relative">
          <div className="absolute bottom-4 left-4 bg-gray-800/80 px-3 py-1 rounded-md">
            <span className="text-sm">UserName</span>
          </div>
        </div>

        {/* Empty state */}
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/api/placeholder/120/80"
              alt="Empty state illustration"
              className="w-32"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            You're the only one here
          </h2>
          <p className="text-gray-400 mb-6">
            Invite others to join you in this space
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Invite Friends</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md flex items-center gap-2">
              <Share className="h-5 w-5" />
              <span>Choose an Activity</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <SunMedium className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <SmilePlus className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
            <Share className="h-6 w-6" />
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
            <Users className="h-6 w-6" />
          </button>
          <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full">
            <Share className="h-6 w-6" />
          </button>
          <button className="p-3 bg-white hover:bg-gray-100 rounded-full">
            <Mic className="h-6 w-6 text-black" />
          </button>
          <button className="p-3 bg-red-500 hover:bg-red-600 rounded-full">
            <PhoneOff className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <Maximize2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCallUI;
