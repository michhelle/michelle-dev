import React, { useState } from "react";
import Window from "./window";

const MyComputer = ({ removeWindow }) => {
  const handleCloseClick = () => {
    removeWindow();
  };
  return (
    <Window
      resizable={true}
      wprimary={"w-2/3"}
      hprimary={"h-96"}
      removeWindow={() => {
        handleCloseClick();
      }}
      title="My Computer"
      src="/images/icons/my_computer.png"
    >
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start">
        <button class="buttonarea">File</button>
        <button class="buttonarea">Edit</button>
        <button class="buttonarea">View</button>
        <button class="buttonarea">Favorites</button>
        <button class="buttonarea">Tools</button>
        <button class="buttonarea">Help</button>
      </div>
      <div class="flex flex-row h-10 w-full bg-orange-50 self-start">
        <div class="grayscale flex flex-row">
          <button class="text-xs flex flex-row items-center">
            <img src="/images/icons/back.png" />
            Back
          </button>
          <button>
            <img src="/images/icons/forward.png" />
          </button>
        </div>

        <button class="my-0.5 px-0.5 border border-transparent shadow-sm hover:rounded hover:border-stone-300">
          <img src="/images/icons/up.png" />
        </button>
        <div id="divider" class=" w-px mx-0.5 h-8 mt-1 bg-stone-400" />
        <button class="text-xs flex flex-row items-center my-0.5 px-0.5 shadow-sm  border border-transparent hover:rounded hover:border-stone-300">
          <img class="h-5 w-5" src="/images/icons/search.png" />
          <div class="pl-1">Search</div>
        </button>
        <button class="text-xs flex flex-row items-center my-0.5 px-0.5 shadow-sm  border border-transparent hover:rounded hover:border-stone-300">
          <img src="/images/icons/folders.png" />
          Folders
        </button>
        <div id="divider" class=" w-px mx-0.5 h-8 mt-1 bg-stone-400" />
        <button class="my-0.5 px-0.5 shadow-sm border border-transparent hover:rounded hover:border-stone-300">
          <img class="h-6 w-6" src="/images/icons/views.png" />
        </button>
      </div>
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start">
        <p class=" px-1 text-xs w-1/8">Address</p>
        <div class="bg-white w-full border border-blue-500 px-1 text-xs">
          My Computer
        </div>
      </div>
      <div class="flex flex-row bg-white h-full">
        <div id="left-side" class="w-64 h-100%">
          <div class="flex flex-col bg-gradient-to-t from-blue-500 from-0 to-blue-400 to-100% ">
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
