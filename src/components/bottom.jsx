import React, { useState } from 'react';
import { 
  Settings,
  User,
  Copy,
  ChevronRight,
  Edit3,
  Github,
  MessageCircle,
  Music
} from 'lucide-react';

const ProfilePopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    name: "Mohohoritz",
    username: "itz.mo",
    pronouns: "he/him",
    links: {
      spotify: "https://f.mopamo.social/spot",
      github: "https://f.mopamo.social/gh",
      instagram: "https://f.mopamo.social/insta"
    },
    isOnline: true
  };

  return (
    <div className="font-sans">
      {/* Bottom Button Row */}
      <div className="bg-gray-800 p-2 flex items-center gap-2">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center bg-gray-700 rounded p-2 hover:bg-gray-600 transition-colors"
        >
          <div className="relative">
            <img
              src="/api/placeholder/32/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-700"></div>
          </div>
          <span className="ml-2 text-white font-medium">{user.name}</span>
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-200">
          <Settings size={20} />
        </button>
      </div>

      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-16 left-2 w-72 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header/Banner */}
          <div className="h-20 bg-purple-400" />
          
          {/* Profile Section */}
          <div className="px-4 pb-4">
            <div className="relative -mt-6 mb-3">
              <div className="relative inline-block">
                <img
                  src="/api/placeholder/80/80"
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-8 border-gray-800"
                />
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-800"></div>
              </div>
            </div>

            {/* User Info */}
            <div className="text-white mb-4">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold">{user.name}</h2>
              </div>
              <div className="text-gray-400 text-sm">
                {user.username} • {user.pronouns}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2 mb-4">
              <a href={user.links.spotify} className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Music size={16} />
                <span>Spotify</span>
              </a>
              <a href={user.links.github} className="flex items-center gap-2 text-gray-300 hover:text-white">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href={user.links.instagram} className="flex items-center gap-2 text-gray-300 hover:text-white">
                <MessageCircle size={16} />
                <span>Instagram</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-white">
                <div className="flex items-center gap-2">
                  <Edit3 size={16} />
                  <span>Edit Profile</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-white">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span>Online</span>
                </div>
                <ChevronRight size={16} />
              </button>
              <button className="w-full flex items-center justify-between px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-white">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Switch Accounts</span>
                </div>
                <ChevronRight size={16} />
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-white">
                <Copy size={16} />
                <span>Copy User ID</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopover;