import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SubMenu from "../../components/submenu.jsx";
import Notepad from "../../components/notepad.jsx";
import Calculator from "../../components/calculator.jsx";

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
  const [showCalculator, setShowCalculator] = useState(false);

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const onMenuClick = () => {
    setHideSubMenu(!hideSubMenu);
  };

  const onNotepadClick = () => {
    setShowNotepad(true);
    setActiveButtonIndex(0);
  };

  const onCalculatorClick = () => {
    setShowCalculator(true);
    setActiveButtonIndex(0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveButtonIndex(0);
          // might run into bugs with hiding sub-menu on every click
          setHideSubMenu(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div
      class="bg-cover h-screen bg-local"
      style={{
        backgroundImage: "url(/images/background.jpg)",
      }}

      // onClick={() => setActiveButtonIndex(0)}
    >
      <div id="apps" class="z-40 absolute top-20 left-20">
        <div>
          <button
            id="notepad"
            onClick={() => setActiveButtonIndex(1)}
            class="flex flex-row grid grid-rows-2 ml-1 mb-6 "
            ref={wrapperRef}
          >
            <img
              onDoubleClick={onNotepadClick}
              className={`justify-self-center ${
                activeButtonIndex === 1 ? "brightness-75  " : ""
              }`}
              src="/images/icons/notepad.png"
            />
            <button
              onDoubleClick={onNotepadClick}
              className={`icon-text ${
                activeButtonIndex === 1 ? "bg-blue-600 " : ""
              }`}
            >
              Notepad
            </button>
          </button>

          <button
            id="calculator"
            onClick={() => setActiveButtonIndex(2)}
            class="flex flex-row grid grid-rows-2"
            ref={wrapperRef}
          >
            <img
              onDoubleClick={onCalculatorClick}
              className={`justify-self-center ${
                activeButtonIndex === 2 ? "brightness-75  " : ""
              }`}
              src="/images/icons/calculator.png"
            />
            <button
              onDoubleClick={onCalculatorClick}
              className={`icon-text ${
                activeButtonIndex === 2 ? "bg-blue-600 " : ""
              }`}
            >
              Calculator
            </button>
          </button>
        </div>
      </div>
      <div class="fixed bottom-0 w-full h-7 bg-white border-t bg-gradient-to-b from-cyan-500 from-0% via-blue-600 via-10% to-blue-700 to-100% border-blue-500 ">
        <div class="font-medium">
          <div id="start-menu" ref={wrapperRef} class="w-20 z-50 fixed left-0">
            {hideSubMenu && (
              <div class="absolute bottom-7 z-40 left-0">
                <SubMenu></SubMenu>
              </div>
            )}
            <button
              type="button"
              class="shadow-[inset_15px_20px_10px_-15px_rgba(0,0,0,0.3)] items-center justify-center bg-gradient-to-b from-green-300 from-0% to-green-600 to-10% hover:bg-gradient-to-b hover:from-green-300 from-0% hover:to-green-500 rounded-r-lg"
              onClick={onMenuClick}
            >
              <span class=" p-6 pr-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg text-white ">
                start
              </span>
            </button>
          </div>

          <div class="fixed right-0">
            <div class="  w-24 border-l h-7 pt-0.5 border-cyan-500 bg-gradient-to-b from-cyan-400 from-0% via-cyan-600 via-10% to-cyan-600 to-100% group">
              <span class="p-5 text-sm text-white ">{time}</span>
            </div>
          </div>
        </div>
      </div>

      {showNotepad && (
        <div class="absolute top-60 left-80">
          <Notepad setShowNotepad={setShowNotepad} />
        </div>
      )}

      {showCalculator && (
        <div class="absolute top-60 left-80">
          <Calculator setShowCalculator={setShowCalculator} />
        </div>
      )}
    </div>
  );
}

export default Home;
