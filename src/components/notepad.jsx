import React, { useState } from "react";

export default function Notepad({ setShowNotepad }) {
  return (
    <div class="flex flex-col border-2 border-blue-700  rounded-t-lg w-96 h-480 flex flex-col ">
      <div class=" justify-between flex flex-row h-6 border border-b-blue-700 w-full row-span-1 self-start bg-gradient-to-b from-cyan-500 from-0% via-blue-700 via-10% to-blue-500 to-100% border-blue-500">
        <div class="flex flex-row">
          <img class=" mt-1 h-4 w-4" src="/images/notepad.png"></img>
          <text class=" select-none mt-0.5 ml-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] drop-shadow-lg text-sm text-white font-semibold ">
            Untitled - Notepad
          </text>
        </div>

        <div class="flex flex-row pt-0.5">
          <img class="resizebtn" src="/images/minimize.png"></img>
          <img class="resizebtn" src="/images/maximize.png"></img>
          <img
            onClick={() => setShowNotepad(false)}
            class="resizebtn"
            src="/images/close.png"
          ></img>
        </div>
      </div>
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start ">
        <button class="buttonarea">File</button>
        <button class="buttonarea">Edit</button>
        <button class="buttonarea">Format</button>
        <button class="buttonarea">View</button>
        <button class="buttonarea">Help</button>
      </div>
      <div class=" h-full">
        <textarea class="border border-top-blue-400 outline-none overflow-x-scroll overflow-y-scroll resize-none w-full h-full text-sm pl-0.5"></textarea>
      </div>
    </div>
  );
}
