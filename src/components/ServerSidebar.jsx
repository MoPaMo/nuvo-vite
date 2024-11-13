// src/components/ServerSidebar.js

import React from "react";
import ChannelItem from "./ChanneItem";
import ChannelSection from "./ChannelSection";

function ServerSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 flex flex-col p-2 select-none">
      {/* Server Name */}
      <div className="server-name text-white text-lg font-bold mb-4">
        DummeLeuteDieSchachSpiele
      </div>

      {/* Scrollable Content */}
      <div className="overflow-scroll flex-grow">
        {/* Goal Section */}
        <div className="goal text-gray-500 text-sm mb-4">GOAL: LVL 1</div>
        <div className="goal-bar h-1 bg-gray-700 rounded relative mb-3">
          <div className="goal-progress h-full w-1/2 bg-blue-600 rounded"></div>
        </div>

        {/* Events Section */}
        <div className="section-title text-gray-500 text-xs uppercase mt-5 mb-2">
          Events
        </div>
        <div className="channel flex items-center p-2 text-gray-300 cursor-pointer rounded hover:bg-gray-600">
          Online Members
        </div>
        <div className="channel flex items-center p-2 text-gray-300 cursor-pointer rounded hover:bg-gray-600">
          Humans: 5
        </div>

        {/* Text Channels */}
        <ChannelSection name="Textkanäle">
          <ChannelItem label="allgemein" type="text" mid="a" />
          <ChannelItem label="clips-und-highlights" type="text" mid="b" />
          <ChannelItem label="docs" type="text" mid="c" />
          <ChannelItem label="links" type="text" mid="d" />
          <ChannelItem label="ankündigungen" type="text" mid="e" />
          <ChannelItem label="kanal-für-xp-spammen" type="text" mid="f" />
          <ChannelItem label="privat" type="text" mid="g" />
          <ChannelItem label="moritz-stats" type="text" mid="h" />
          <ChannelItem label="git-changes" type="text" mid="i" />
          <ChannelItem label="img" type="text" mid="j" />
        </ChannelSection>

        {/* Voice Channels */}
        <ChannelSection name="Sprachkanäle">
          <ChannelItem label="allgemein" type="voice" isActive />
          <ChannelItem label="clips-und-highlights" type="bots" />
          <ChannelItem label="docs" type="text" />
          <ChannelItem label="links" type="text" />
          <ChannelItem label="ankündigungen" type="text" />
          <ChannelItem label="kanal-für-xp-spammen" type="text" />
          <ChannelItem label="privat" type="text" />
          <ChannelItem label="moritz-stats" type="text" />
          <ChannelItem label="git-changes" type="text" />
          <ChannelItem label="img" type="text" />
        </ChannelSection>
        {/* Bots Section */}
        <div className="section-title text-gray-500 text-xs uppercase mt-5 mb-2">
          Bots
        </div>
        <div className="bot-channels">
          <ChannelItem label="music" type="text" />
          <ChannelItem label="carl-bot" type="text" />
          <ChannelItem label="rollen" type="text" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile flex items-center p-2 bg-gray-800 text-gray-300 mt-auto rounded">
        <img
          src="https://via.placeholder.com/24"
          alt="Profile Picture"
          className="rounded-full w-6 h-6 mr-2"
        />
        <div>
          <div className="font-semibold">Mohoritz</div>
          <div className="profile-status text-gray-500 text-xs">
            What is it good for?
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerSidebar;
