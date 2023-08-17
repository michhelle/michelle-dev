import React, { useState } from "react";


function SubMenu() {
  return (
    <div class=" border border-blue-500  rounded-t-lg w-96 h-480 flex flex-col drop-shadow-[1px_2px_2px_rgba(0,0,0,2)] ">
      <div class="  h-1/6 w-full row-span-1 self-start h-1/3 bg-gradient-to-b from-cyan-500 from-0% via-blue-600 via-10% to-blue-400 to-100% border-blue-500">
        <div class="my-2 pl-1 flex flex-row">
          <img
            class="border-2 border-blue-200 rounded"
            src="/images/ellie_shark.png"
            style={{ width: 48, height: 48 }}
          />
          <text class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pt-3 pl-2 drop-shadow-lg text-md text-white font-semibold ">
            Michelle Vu
          </text>
        </div>
      </div>
      <div class="flex h-full border border-blue-600 ">
        <div class=" w-full bg-white border border-r-blue-400">test</div>
        <div class="w-full bg-blue-100">right</div>
      </div>

      <div class="h-12 w-full row-span-3 self-end h-1/3 content-end bg-gradient-to-t from-blue-600 from-0% via-blue-600 via-50% to-blue-400 to-100% border-blue-500">
        123
      </div>
    </div>
  );
}
export default SubMenu;
