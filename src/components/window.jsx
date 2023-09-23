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

   const [active, setActive] = useState(false);


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
    setActive(true);
  };

  useEffect(() => {
    // Attach event listeners for dragging only when the component is mounted
    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      // Clean up event listeners when the component unmounts
      window.removeEventListener("mousemove", startDragging, false);
      window.removeEventListener("mouseup", stopDragging, false);
       document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleRemoveClick = () => {
    removeWindow(id);
  };

  const handleBodyClick = (event) => {
    // Check if the clicked element is not within the window component
    if (elemRef.current && !elemRef.current.contains(event.target)) {
      setActive(false); // Set the window as inactive
    }
  };

  

  return (
    <div
      ref={elemRef}
      id="windows"
      className={`${hprimary} ${wprimary} overflow-hidden absolute select-none flex border-2 rounded-t-lg flex flex-col  ${
        active ? "z-50 border-blue-700 z-50" : " border-blue-400 z-40 "
      } `}
    >
      <div
        onMouseDown={initialiseDrag}
        id="window_header"
        className={`${
          active
            ? "z-50 bg-gradient-to-b from-cyan-500 from-0% via-blue-700 via-10% to-blue-500 to-100% border-blue-700"
            : "z-40 saturate-[.75] bg-gradient-to-b from-blue-300 from-0% via-blue-500 via-10% to-blue-300 to-100% border-blue-400 z-40 "
        } justify-between flex flex-row h-6 border w-full row-span-1 self-start  `}
      >
        <div className="flex flex-row">
          <img className="mt-1 h-4 w-4" src={src} alt={title}></img>
          <text className="select-none mt-0.5 ml-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] drop-shadow-lg text-sm text-white font-semibold">
            {title}
          </text>
        </div>

        <div
          className={`${
            active ? "" : "saturate-[.5] brightness-125"
          } flex flex-row pt-0.5`}
        >
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
