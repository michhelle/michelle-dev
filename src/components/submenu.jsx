import React, { useState } from "react";

function SubMenu() {
  const leftApps = [{ url: "", name: "Internet" }];
  const rightApps = [
    {
      id: 1,
      url: "/images/icons/my_documents.png",
      name: "My Documents",
      hasApp: false,
    },
    {
      id: 2,
      url: "/images/icons/my_recent_documents.png",
      name: "My Recent Documents",
      hasApp: false,
    },
    {
      id: 3,
      url: "/images/icons/my_pictures.png",
      name: "My Pictures",
      hasApp: false,
    },
    {
      id: 4,
      url: "/images/icons/my_music.png",
      name: "My Music",
      hasApp: false,
    },
    {
      id:5,
      url: "/images/icons/my_computer.png",
      name: "My Computer",
      hasApp: true,
    },
  ];

  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };


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
        <div class="w-full bg-blue-100 pt-0.5">
          {rightApps.map((items, index) => {
            return (
              <div class="group flex flex-row m-0.5 mx-1 mb-1 p-0.5 hover:bg-[#2F71CD] ">
                <img src={items.url} style={{ width: 24, height: 24 }} />
                <div class="font-sans p-1 justify-self-center font-bold text-xs group-hover:text-white text-[#00135D]">
                  {items.name}
                </div>
              </div>
            );
          })}
          <hr class="h-px my-3 border-0  bg-gradient-to-r from-blue-100 from-0% via-blue-300 via-50% to-blue-100 to-100%"></hr>
        </div>
      </div>

      <div class="h-12 w-full row-span-3 self-end h-1/3 content-end bg-gradient-to-t from-blue-600 from-0% via-blue-600 via-50% to-blue-400 to-100% border-blue-500"></div>
    </div>
  );
}
export default SubMenu;
