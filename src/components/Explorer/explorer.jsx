import React, { useState } from "react";
import Window from "../window";

const Explorer = ({ removeWindow }) => {
  const handleCloseClick = () => {
    removeWindow();
  };
  return (
    <Window
      resizable={true}
      wprimary={"w-[44rem]"}
      hprimary={"h-96"}
      removeWindow={() => {
        handleCloseClick();
      }}
      title="Internet Explorer"
      src="/images/icons/ie.png"
    >
      <div class="flex flex-row h-8 w-full bg-orange-50 self-start border border-b-stone-300 ">
        <button class="buttonarea">File</button>
        <button class="buttonarea">Edit</button>
        <button class="buttonarea">View</button>
        <button class="buttonarea">Favorites</button>
        <button class="buttonarea">Tools</button>
        <button class="buttonarea">Help</button>
      </div>
      <div class="flex flex-row h-10 w-full bg-orange-50 self-start">
        <div class="grayscale flex flex-row brightness-125">
          <button class="text-xs flex flex-row items-center text-gray-600 ">
            <img class="" src="/images/icons/back.png" />
            Back
            <div class="px-1 ml-1">
              <div class="triangle-down" />
            </div>
          </button>
          <button class="flex flex-row items-center">
            <img src="/images/icons/forward.png" />
            <div class="px-1  ">
              <div class="triangle-down" />
            </div>
          </button>
        </div>

        <button class="window-header-btn">
          <img src="/images/icons/explorer/stop.png" />
        </button>
        <button class="window-header-btn">
          <img src="/images/icons/explorer/refresh.png" />
        </button>
        <button class="window-header-btn">
          <img src="/images/icons/explorer/home.png" />
        </button>
        <div id="divider" class=" w-px mx-0.5 h-8 my-0.5 bg-stone-300" />
        <button class="window-header-btn">
          <img class="h-5 w-5" src="/images/icons/search.png" />
          <div class="pl-1">Search</div>
        </button>
        <button class="window-header-btn">
          <img
            class="h-6 w-6 mr-1"
            src="/images/icons/explorer/favorites.png"
          />
          Favorites
        </button>
        <button class="window-header-btn">
          <img src="/images/icons/explorer/history.png" />
        </button>
        <div id="divider" class=" w-px mx-0.5 h-8 my-0.5 bg-stone-300" />
        <button class="window-header-btn">
          <img src="/images/icons/explorer/mail.png" />

          <div
            class="w-0 h-0 
  border-l-4 border-l-transparent
  border-t-4 border-t-black
  border-r-4 border-r-transparent"
          />
        </button>
        <button class="window-header-btn">
          <img class="h-6 w-6" src="/images/icons/explorer/print.png" />
        </button>
        <button class=" my-0.5 px-0.5 shadow-sm  border border-transparent">
          <img class="h-6 w-6" src="/images/icons/explorer/edit.png" />
        </button>
        <button class="window-header-btn">
          <img class="h-6 w-6" src="/images/icons/explorer/msn.png" />
        </button>
      </div>
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start border border-stone-300 py-0.5 ">
        <p class=" px-1 text-xs w-1/8">Address</p>
        <div class="bg-white w-full border border-blue-500 px-1 text-xs flex flex-row">
          <img class="py-px pr-1" src="/images/icons/ie_paper.png"></img>
          {/* */}
        </div>
      </div>
      <div class="flex flex-row bg-white h-full"></div>
    </Window>
  );
};
export default Explorer;
