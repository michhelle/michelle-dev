import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SubMenu from "../../components/submenu.jsx";
import Notepad from "../../components/notepad.jsx";
import Calculator from "../../components/Calculator/calculator.jsx";
import Test from "../../components/test.jsx";
import DragBox from "../../components/dragbox.jsx";
import Thumbnail from "../../components/thumbnail.jsx";
import FooterWindow from "../../components/FooterWindow.jsx";
import Window from "../../components/window.jsx";

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
  const [footerWindowList, setFooterWindowList] = useState([]);
  const [windowList, setWindowList] = useState([]);
  const [time, setTime] = useState(getTime);
  const [hideSubMenu, setHideSubMenu] = useState(false);
  const [nextWindowId, setNextWindowId] = useState(1); // Initialize a unique identifier
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const onMenuClick = () => {
    setHideSubMenu(!hideSubMenu);
  };

  const onAddFooterClick = (title, src, event) => {
    const id = nextWindowId; // Assign a unique identifier
    setNextWindowId(nextWindowId + 1); // Increment the unique identifier

    setFooterWindowList((prevList) => [
      ...prevList,
      <FooterWindow
        title={title}
        iconSrc={src}
        key={id}
        id={id} // Pass the unique identifier as a prop
        removeWindow={() => removeWindow(id)}
      />,
    ]);
  };

  const onNotepadClick = () => {
    const id = nextWindowId; // Assign a unique identifier
    setNextWindowId(nextWindowId + 1); // Increment the unique identifier

    setWindowList((prevList) => [
      ...prevList,
      <Notepad
        key={id}
        id={id} // Pass the unique identifier as a prop
        removeWindow={() => removeWindow(id)}
      />,
    ]);
  };

  const onCalculatorClick = () => {
    const id = nextWindowId; // Assign a unique identifier
    setNextWindowId(nextWindowId + 1); // Increment the unique identifier

    setWindowList((prevList) => [
      ...prevList,

      <Calculator
        key={id}
        id={id} // Pass the unique identifier as a prop
        removeWindow={() => removeWindow(id)}
      />,
    ]);
  };

  const removeWindow = (id) => {
    setWindowList((prevList) => {
      const newList = prevList.filter((window) => window.props.id !== id);
      return newList;
    });

    setFooterWindowList((prevList) => {
      const newList = prevList.filter((window) => window.props.id !== id);
      return newList;
    });
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div class="overflow-x-hidden">
        {windowList.map((window, index) => (
          <div key={index}>{window}</div>
        ))}
      <div
        class="bg-cover bg-no-repeat bg-center h-screen bg-local "
        style={{
          backgroundImage: "url(/images/xpellie.png)",
        }}

        // onClick={() => setActiveButtonIndex(0)}
      >
        <div id="apps" class="z-40 absolute bottom-20 left-20">
          <Thumbnail
            containerStyle="pl-1"
            title="Notepad"
            src="/images/icons/notepad.png"
            onDoubleClickHandler={() => {
              onNotepadClick();
              onAddFooterClick("Notepad", "/images/icons/notepad.png");
            }}
            onClickHandler={() => setActiveButtonIndex(1)}
          />

          <Thumbnail
            title="Calculator"
            src="/images/icons/calculator.png"
            onDoubleClickHandler={() => {
              onCalculatorClick();
              onAddFooterClick("Calculator", "/images/icons/calculator.png");
            }}
            onClickHandler={() => setActiveButtonIndex(1)}
          />
        </div>
        <div
          id="footer"
          class=" grid grid-cols-12 bg-blue-600 gap-3 fixed bottom-0 w-full h-7 bg-white border-t bg-gradient-to-b from-cyan-500 from-0% via-blue-600 via-10% to-blue-700 to-100% border-blue-500 z-50 "
        >
          <div id="start-menu" class="resize-none" ref={wrapperRef}>
            {hideSubMenu && (
              <div class="absolute bottom-7 z-50 left-0">
                <SubMenu></SubMenu>
              </div>
            )}
            <button
              type="button"
              class="w-full justify-self-start shadow-[inset_15px_20px_10px_-15px_rgba(0,0,0,0.3)] items-center justify-center bg-gradient-to-b from-green-300 from-0% to-green-600 to-10% hover:bg-gradient-to-b hover:from-green-300 from-0% hover:to-green-500 rounded-r-lg"
              onClick={onMenuClick}
            >
              <p class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-lg font-semibold text-white ">
                start
              </p>
            </button>
          </div>

          <div id="window_container" class="col-span-10 flex flex-row">
            {footerWindowList}
          </div>

          <div
            id="clock"
            class=" resize-none w-full border-l h-7 pt-0.5 border-cyan-500 bg-gradient-to-b from-cyan-400 from-0% via-cyan-600 via-10% to-cyan-600 to-100% group"
          >
            <div class="flex flex-row-reverse  justify-center pt-1 px-5">
              <p class=" whitespace-nowrap text-xs text-white ">{time}</p>
              <img
                class="mt-0.5 h-4 w-4 mr-1"
                src="/images/icons/volume_mixer.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
