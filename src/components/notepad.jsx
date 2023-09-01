import React, { useState } from "react";
import Window from "./window";

function Notepad({ setShowNotepad }) {
   return (
     <>
       <Window
         hprimary={"h-480"}
         wprimary={"w-96"}
         closeWindow={() => setShowNotepad(false)}
         title="Untitled - Notepad"
         src="/images/icons/notepad.png"
       >
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
       </Window>
     </>
   );
}

export default Notepad;
