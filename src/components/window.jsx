import React, { useState, useRef, useEffect } from "react";

const Window = ({
  id,
  removeWindow,
  title,
  src,
  children,
  hprimary,
  wprimary,
  resizable,
}) => {
  const elemRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragProps = useRef({
    offsetX: 0,
    offsetY: 0,
  });


  const initialiseDrag = (event) => {
    event.preventDefault();

    const { clientX, clientY } = event;
    const { offsetLeft, offsetTop } = elemRef.current;

    dragProps.current = {
      offsetX: clientX - offsetLeft,
      offsetY: clientY - offsetTop,
    };

    isDraggingRef.current = true;

    // Set this window as the active window
    setActiveWindow();

    // Update the styles to set the initial position
    elemRef.current.style.left = `${offsetLeft}px`;
    elemRef.current.style.top = `${offsetTop}px`;
  };

  const startDragging = ({ clientX, clientY }) => {
    if (isDraggingRef.current && elemRef.current) {
      const { offsetX, offsetY } = dragProps.current;

      // Calculate the new position based on initial values and mouse movement
      const newLeft = clientX - offsetX;
      const newTop = clientY - offsetY;

      // Set the new position directly
      elemRef.current.style.left = `${newLeft}px`;
      elemRef.current.style.top = `${newTop}px`;
    }
  };

  const stopDragging = () => {
    isDraggingRef.current = false;
  };

  const setActiveWindow = () => {
    // Set window style to be dark blue when active,
    // Light blue when inactive
  };

  useEffect(() => {
    // Attach event listeners for dragging only when the component is mounted
    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);

    return () => {
      // Clean up event listeners when the component unmounts
      window.removeEventListener("mousemove", startDragging, false);
      window.removeEventListener("mouseup", stopDragging, false);
    };
  }, []);

  const handleRemoveClick = () => {
    removeWindow(id);
  };

  return (
    <div
      ref={elemRef}
      id="windows"
      className={`${hprimary} ${wprimary} overflow-hidden z-40 absolute select-none flex border-2 border-blue-700 rounded-t-lg flex flex-col`}
    >
      <div
        onMouseDown={initialiseDrag}
        id="window_header"
        className="justify-between flex flex-row h-6 border border-b-blue-700 w-full row-span-1 self-start bg-gradient-to-b from-cyan-500 from-0% via-blue-700 via-10% to-blue-500 to-100% border-blue-500"
      >
        <div className="flex flex-row">
          <img className="mt-1 h-4 w-4" src={src} alt={title}></img>
          <text className="select-none mt-0.5 ml-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] drop-shadow-lg text-sm text-white font-semibold">
            {title}
          </text>
        </div>

        <div className="flex flex-row pt-0.5">
          <img
            className="resizebtn"
            src="/images/vis_btns/minimize.png"
            alt="Minimize"
          ></img>
          {resizable === true ? (
            <img
              className="resizebtn"
              src="/images/vis_btns/maximize.png"
              alt="Maximize"
            ></img>
          ) : (
            <img
              className="resizebtn brightness-75 pointer-events-none"
              src="/images/vis_btns/maximize.png"
              alt="Maximize"
            ></img>
          )}

          <img
            onClick={handleRemoveClick}
            className="resizebtn"
            src="/images/vis_btns/close.png"
            alt="Close"
          ></img>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Window;
