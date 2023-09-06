import React, { useState } from "react";
import Window from "./window";

const MyComputer = () => {
  return (
    <Window
      resizable={true}
      wprimary={"w-2/3"}
      hprimary={"h-96"}
      //   closeWindow={() => setShowCalculator(false)}
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
      <div class="flex flex-row h-12 w-full bg-orange-50 self-start">
        <button class="text-s hover:rounded">Back</button>
        <button class="">Forward</button>
        <button class="">View</button>
        <button class="">Search</button>
        <button class="">Folders</button>
        <button class="">Help</button>
      </div>
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start">
        <p class=" px-1 text-xs w-1/8">Address</p>
        <div class="bg-white w-full border border-blue-500 px-1 text-xs">
          My Computer
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-1/3 h-">
          <div class=" h-full bg-gradient-to-t from-blue-500 from-0 to-blue-400 to-100% "></div>
        </div>
        <div>
          <div>Files Stored on This Computer</div>
        </div>
      </div>
    </Window>
  );
};
export default MyComputer;
