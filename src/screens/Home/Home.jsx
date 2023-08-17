import React, { useState, useEffect, useRef } from "react";
import SubMenu from "../../components/submenu.jsx";
import Notepad from "../../components/notepad.jsx";

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  let hourPostFix = "AM";
  let min = date.getMinutes();
  if (hour >= 12) {
    hour -= 12;
    hourPostFix = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return `${hour}:${min} ${hourPostFix}`;
};

function Home() {
  const [time, setTime] = useState(getTime);
  const [hideSubMenu, setHideSubMenu] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);

  const onMenuClick = () => {
    setHideSubMenu(!hideSubMenu);
  };

  const onNotepadClick = () => {
    setShowNotepad(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div
      class="bg-cover h-screen  bg-local"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <div id="apps" class="z-40 absolute top-20 left-20">
        <div class="flex flex-row grid grid-rows-2">
          <img
            onDoubleClick={onNotepadClick}
            class="justify-self-center"
            src="/images/notepad.png"
          ></img>
          <div
            onDoubleClick={onNotepadClick}
            class="pt-1 justify-self-center drop-shadow-[0_1.2px_0.5px_rgba(0,0,0,0.8)] text-xs text-white"
          >
            Notepad
          </div>
        </div>
      </div>
      <div class="fixed bottom-0 left-0 z-50 w-full h-7 bg-white border-t bg-gradient-to-b from-cyan-500 from-0% via-blue-600 via-10% to-blue-700 to-100% border-blue-500 ">
        <div class="grid h-full w-full grid-cols-2 font-medium ">
          <div>
            <button
              type="button"
              class="shadow-[inset_15px_20px_10px_-15px_rgba(0,0,0,0.3)] items-center justify-center bg-gradient-to-b from-green-300 from-0% to-green-600 to-10% hover:bg-gradient-to-b hover:from-green-300 from-0% hover:to-green-500 rounded-r-lg"
              onClick={onMenuClick}
            >
              <span class=" p-4 pr-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg text-white ">
                menu
              </span>
            </button>
          </div>

          <div class="justify-self-end">
            <div class="border-l h-full border-cyan-500 bg-gradient-to-b from-cyan-400 from-0% via-cyan-600 via-10% to-cyan-600 to-100% group">
              <span class="p-5 text-sm text-white ">{time}</span>
            </div>
          </div>
        </div>
      </div>
      {hideSubMenu && (
        <div class="absolute bottom-7 z-50 left-0">
          <SubMenu></SubMenu>
        </div>
      )}

      {showNotepad && (
        <div class="absolute top-60 left-80">
          <Notepad setShowNotepad={setShowNotepad} />
        </div>
      )}
    </div>
  );
}

export default Home;
