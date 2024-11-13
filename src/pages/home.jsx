import {
  User,
  Search,
  Bell,
  HelpCircle,
  MoreVertical,
  Popcorn,
  Users,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full  text-white">
      {/* Sidebar */}
      <div className="w-60 flex flex-col bg-gray-700 p-4 space-y-4">
        <input
          type="text"
          placeholder="Find or start a conversation"
          className="bg-gray-700 p-2 rounded text-sm text-white placeholder-gray-400"
        />

        <div className="space-y-2">
          <button className="flex items-center text-gray-400 hover:text-white">
            <User className="w-5 h-5 mr-2" />
            Friends
          </button>
          <button className="flex items-center text-gray-400 hover:text-white">
            <Popcorn className="w-5 h-5 mr-2" />
            Shop
          </button>
        </div>

        <div className="flex flex-row pt-4 pb-0 text-gray-400 text-sm">
          <div className=" ">DIRECT MESSAGES</div>
          <div className="grow"></div>
          <div>+</div>
        </div>
        <div className="space-y-2">
          {["Melonhero", "Paulus", "MonkGyatso", "corvus", "Pro37HD"].map(
            (name, idx) => (
              <button
                key={idx}
                className="flex items-center hover:bg-gray-700 p-2 pt-0 rounded w-full"
              >
                <User className="w-8 h-8 rounded-full bg-gray-600 p-1 mr-2" />
                <span>{name}</span>
              </button>
            )
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
            <div className="flex items-center justify-between bg-gray-700 p-4 sticky ">
              <div className="flex items-center space-x-4">
                <span className="flex items-center p-2 rounded text-gray-400">
                  <Users className="w-5 h-5 mr-2" /> Friends
                </span>
                <button className="bg-gray-700 p-2 rounded text-sm text-gray-400 hover:text-white">
                  Online
                      </button>
                <button className="bg-gray-700 p-2 rounded text-sm text-gray-400 hover:text-white">
                  All
                </button>
                <button className="bg-gray-700 p-2 rounded text-sm text-gray-400 hover:text-white">
                  Pending
                </button>
                <button className="bg-gray-700 p-2 rounded text-sm text-gray-400 hover:text-white">
                  Blocked
                </button>
                <button className="bg-green-500 p-2 rounded text-sm">
                  Add Friend
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-gray-400 hover:text-white" />
                <Bell className="w-5 h-5 text-gray-400 hover:text-white" />
                <HelpCircle className="w-5 h-5 text-gray-400 hover:text-white" />
              </div>
            </div>

            {/* Friends List */}
        <div className="flex-1 bg-gray-800 p-4 flex ">
          {/* Online friends */}
          <div className="flex-1 space-y-2 ">
            <div className="text-gray-400">ONLINE — 2</div>
            <div className="flex items-center justify-between hover:bg-gray-700 p-2 rounded">
              <div className="flex items-center">
                <User className="w-8 h-8 rounded-full bg-gray-600 p-1 mr-2" />
                <span>Nemo</span>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-400 hover:text-white" />
            </div>
            <div className="flex items-center justify-between hover:bg-gray-700 p-2 rounded">
              <div className="flex items-center">
                <User className="w-8 h-8 rounded-full bg-gray-600 p-1 mr-2" />
                <span>Pro37HD</span>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-400 hover:text-white" />
            </div>
          </div>

          {/* Activity panel */}
          <div className="w-64 bg-gray-800 p-4 text-center border-l-2 border-0 border-gray-900 border-rounded">
            <div className="text-gray-500">No new activity.</div>
            <div className="text-gray-400 text-sm">
              If a friend invites us to play a game or chat on voice, we’ll
              definitely let you know!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
