import React, { useState } from "react";
import Window from "./window";

const MyComputer = ({ removeWindow }) => {
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
      title="My Computer"
      src="/images/icons/my_computer.png"
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
            <div class="px-1 ">
              <div class="triangle-down" />
            </div>
          </button>
        </div>

        <button class="window-header-btn">
          <img src="/images/icons/up.png" />
        </button>
        <div id="divider" class=" w-px mx-0.5 h-8 my-0.5 bg-stone-300" />
        <button class="window-header-btn">
          <img class="h-5 w-5" src="/images/icons/search.png" />
          <div class="pl-1">Search</div>
        </button>
        <button class="window-header-btn">
          <img src="/images/icons/folders.png" />
          Folders
        </button>
        <div id="divider" class=" w-px mx-0.5 h-8 my-0.5 bg-stone-300" />
        <button class="window-header-btn">
          <img class="h-6 w-6" src="/images/icons/views.png" />
        </button>
      </div>
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start border border-stone-300 py-0.5 ">
        <p class=" px-1 text-xs w-1/8">Address</p>
        <div class="bg-white w-full border border-blue-500 px-1 text-xs flex flex-row">
          <img
            class="py-px pr-1"
            src="/images/icons/mycomputer/computer.png"
          ></img>
          My Computer
        </div>
      </div>
      <div class="flex flex-row bg-white h-full">
        <div id="left-side" class="w-64 h-full">
          <div class="flex flex-col h-full bg-gradient-to-t from-blue-500 from-0 to-blue-400 to-100% ">
            <div class=" m-2 rounded ">
              <div class="flex flex-row rounded-t-sm text-blue-900 text-sm font-bold text-0.5 hover:text-blue-600  justify-between pl-2 py-0.5 bg-gradient-to-r from-indigo-50 from-0 to-indigo-300 to-100%">
                <div class="">System Tasks</div>
                <img class="pr-0.5" src="/images/icons/mycomputer/pullup.png" />
              </div>

              <div
                id="subclass"
                class="grid grid-rows-3 pl-2 bg-gradient-to-l py-2 from-indigo-200 from-0% to-indigo-300 to-100%"
              >
                <text class="text-xs text-blue-900 hover:underline hover:text-blue-500">
                  View system information
                </text>

                <text class="text-xs text-blue-900 hover:underline hover:text-blue-500">
                  Add or remove programs
                </text>

                <text class="text-xs text-blue-900 hover:underline hover:text-blue-500">
                  Change a setting
                </text>
              </div>
            </div>
            {/* <div>z</div>
            <div>z</div> */}
          </div>
        </div>
        <div class="grid grid-rows-3">
          <div>
            <div class="text-sm font-bold pl-4">About Me</div>
            <hr class="h-px border-0 w-64 bg-gradient-to-r from-blue-300 from-0% via-blue-300 via-30% to-blue-50 to-100%"></hr>
            <p class="text-md pl-2">{/*About me here*/}</p>
          </div>
          <div>
            <div class="text-sm font-bold pl-4">Resume/Projects</div>
            <hr class="h-px border-0 w-64 bg-gradient-to-r from-blue-300 from-0% via-blue-300 via-30% to-blue-50 to-100%"></hr>
          </div>
          <div>
            <div class="text-sm font-bold pl-4">Links</div>
            <hr class="h-px border-0 w-64 bg-gradient-to-r from-blue-300 from-0% via-blue-300 via-30% to-blue-50 to-100%"></hr>
          </div>
        </div>
      </div>
    </Window>
  );
};
export default MyComputer;
