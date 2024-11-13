import React from 'react';
import { Search, Users, Compass } from 'lucide-react';

const Discover = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-700 p-5">
        <div className="flex items-center mb-6 cursor-pointer">
          <Users className="mr-3" />
          <span>Servers</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <Compass className="mr-3" />
          <span>Quests</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-8">
          <ul className="flex space-x-6 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Gaming</li>
            <li className="hover:text-white cursor-pointer">Music</li>
            <li className="hover:text-white cursor-pointer">Entertainment</li>
            <li className="hover:text-white cursor-pointer">Science & Tech</li>
            <li className="hover:text-white cursor-pointer">Education</li>
            <li className="hover:text-white cursor-pointer">Student Hubs</li>
          </ul>
          <div className="flex items-center bg-gray-700 rounded-lg p-2">
            <Search className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-gray-200"
            />
          </div>
        </nav>

        {/* Header */}
        <header className="bg-indigo-600 p-10 rounded-lg text-center mb-8">
          <h1 className="text-3xl font-bold">FIND YOUR COMMUNITY </h1>
          <p className="text-gray-300 mt-2">
            From gaming, to music, to learning, there's a place for you.
          </p>
        </header>

        {/* Featured Servers */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Servers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Server Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/300/150"
                alt="Midjourney"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Midjourney</h3>
                <p className="text-gray-400 text-sm mt-2">
                  The official server for Midjourney, a text-to-image AI where your imagination is the only limit.
                </p>
                <div className="text-gray-500 text-xs mt-4">
                  <span className="mr-2">🟢 974,614 Online</span> · <span>21,056,120 Members</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/300/152"
                alt="Genshin Impact Official"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Genshin Impact Official</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Welcome to Teyvat, Traveler! Discuss your favorite game: Genshin Impact!
                </p>
                <div className="text-gray-500 text-xs mt-4">
                  <span className="mr-2">🟢 358,897 Online</span> · <span>1,967,493 Members</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/300/151"
                alt="Honkai: Star Rail Official"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Honkai: Star Rail Official</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Hop aboard the Astral Express and explore the galaxy's wonders!
                </p>
                <div className="text-gray-500 text-xs mt-4">
                  <span className="mr-2">🟢 277,054 Online</span> · <span>1,240,951 Members</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Discover;
