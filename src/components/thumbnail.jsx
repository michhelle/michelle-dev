import React, { useState, useRef, useEffect } from "react";

const Thumbnail = ({
  title,
  containerStyle,
  src,
  onClickHandler,
  onDoubleClickHandler,
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActiveButtonIndex(0);
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
    <button
      ref={wrapperRef}
      id="thumbnail"
      onClick={() => setActiveButtonIndex(1)}
      className={` ${containerStyle} flex flex-row grid grid-rows-2 ml-1 mb-6 z-30 `}
      // ref={wrapperRef}
    >
      <img
        onDoubleClick={() => {
          onDoubleClickHandler();
          setActiveButtonIndex(0);
        }}
        className={`justify-self-center ${
          activeButtonIndex === 1 ? "brightness-75  " : ""
        }`}
        src={src}
      />
      <button
        onDoubleClick={onDoubleClickHandler}
        className={`icon-text ${activeButtonIndex === 1 ? "bg-blue-600 " : ""}`}
      >
        {title}
      </button>
    </button>
  );
};

export default Thumbnail;
