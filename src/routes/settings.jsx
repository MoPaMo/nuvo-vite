import React, { useState } from "react";
import {
  Settings,
  User,
  Shield,
  Users,
  Smartphone,
  Link2,
  Video,
  Gift,
  CreditCard,
  Palette,
  MessageSquare,
  Bell,
  X,
} from "lucide-react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "USER SETTINGS",
      items: [
        { name: "My Account", icon: <User size={20} />, path: "/account" },
        {
          name: "Privacy & Safety",
          icon: <Shield size={20} />,
          path: "/privacy",
        },
        { name: "Family Center", icon: <Users size={20} />, path: "/family" },
        { name: "Devices", icon: <Smartphone size={20} />, path: "/devices" },
        {
          name: "Connections",
          icon: <Link2 size={20} />,
          path: "/connections",
        },
      ],
    },
    {
      title: "BILLING SETTINGS",
      items: [
        { name: "Nitro", icon: <Bell size={20} />, path: "/nitro" },
        {
          name: "Subscriptions",
          icon: <CreditCard size={20} />,
          path: "/subscriptions",
        },
        { name: "Gift Inventory", icon: <Gift size={20} />, path: "/gifts" },
      ],
    },
    {
      title: "APP SETTINGS",
      items: [
        {
          name: "Appearance",
          icon: <Palette size={20} />,
          path: "/appearance",
        },
        { name: "Voice & Video", icon: <Video size={20} />, path: "/voice" },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-800 h-screen p-4">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 text-gray-200 rounded px-4 py-2 pl-8"
          />
          <Settings
            className="absolute left-2 top-2.5 text-gray-400"
            size={16}
          />
        </div>
      </div>

      {menuItems.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xs text-gray-400 font-semibold mb-2">
            {section.title}
          </h3>
          {section.items.map((item, itemIdx) => (
            <Link
              key={itemIdx}
              to={item.path}
              className={`flex items-center space-x-3 px-2 py-1.5 rounded mb-1 ${
                location.pathname === item.path
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

const UserProfile = () => {
  const [userDetails] = useState({
    displayName: "Mohohoritz",
    username: "itz.mo",
    email: "********@web.de",
    phone: "********0974",
  });

  return (
    <div className="p-6 max-w-4xl">
      <div className="bg-purple-200 h-32 rounded-t-lg relative">
        <div className="absolute -bottom-16 left-6">
          <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-gray-800 overflow-hidden">
            <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white">
              <User size={48} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 pt-20 rounded-b-lg mt-0">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-white text-2xl font-semibold">
              {userDetails.displayName}
            </h2>
            <div className="flex space-x-2 mt-2">
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                ✓
              </span>
              <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                #
              </span>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Edit User Profile
          </button>
        </div>

        <div className="space-y-6">
          {[
            { label: "DISPLAY NAME", value: userDetails.displayName },
            { label: "USERNAME", value: userDetails.username },
            { label: "EMAIL", value: userDetails.email },
            { label: "PHONE NUMBER", value: userDetails.phone },
          ].map((field, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div>
                <h3 className="text-xs text-gray-400 font-semibold mb-1">
                  {field.label}
                </h3>
                <p className="text-white">
                  {field.value}
                  {(field.label === "EMAIL" ||
                    field.label === "PHONE NUMBER") && (
                    <button className="text-blue-400 text-sm ml-2">
                      Reveal
                    </button>
                  )}
                </p>
              </div>
              <button className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600">
                Edit
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-white text-xl font-semibold mb-4">
            Password and Authentication
          </h2>
          <div className="flex items-center text-green-400 mb-4">
            <Shield size={16} className="mr-2" />
            <span className="text-sm">MULTI-FACTOR AUTHENTICATION ENABLED</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/account" element={<UserProfile />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
