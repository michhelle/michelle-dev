import React, { useState, useRef } from "react";

const Window = ({ closeWindow, title, src, children, hprimary, wprimary }) => {

    const elemRef = useRef(null)
    const dragProps = useRef()

     const initialiseDrag = (event) => {
       const { target, clientX, clientY } = event;
       const { offsetTop, offsetLeft } = target;
       const { left, top } = elemRef.current.getBoundingClientRect();

       dragProps.current = {
         dragStartLeft: left - offsetLeft,
         dragStartTop: top - offsetTop,
         dragStartX: clientX,
         dragStartY: clientY,
       };
       window.addEventListener("mousemove", startDragging, false);
       window.addEventListener("mouseup", stopDragging, false);
     };

     const startDragging = ({ clientX, clientY }) => {
       elemRef.current.style.transform = `translate(${
         dragProps.current.dragStartLeft +
         clientX -
         dragProps.current.dragStartX
       }px, ${
         dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY
       }px)`;
     };

     const stopDragging = () => {
       window.removeEventListener("mousemove", startDragging, false);
       window.removeEventListener("mouseup", stopDragging, false);
     };

  return (
    <div
      ref={elemRef}
      id="windows"
      className={`${hprimary} ${wprimary} select-none flex border-2 border-blue-700 rounded-t-lg flex flex-col
      `}
    >
      <div
        onMouseDown={initialiseDrag}
        id="window_header"
        class=" justify-between flex flex-row h-6 border border-b-blue-700 w-full row-span-1 self-start bg-gradient-to-b from-cyan-500 from-0% via-blue-700 via-10% to-blue-500 to-100% border-blue-500"
      >
        <div class="flex flex-row">
          <img class=" mt-1 h-4 w-4" src={src}></img>
          <text class=" select-none mt-0.5 ml-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] drop-shadow-lg text-sm text-white font-semibold ">
            {title}
          </text>
        </div>

        <div class="flex flex-row pt-0.5">
          <img class="resizebtn" src="/images/vis_btns/minimize.png"></img>
          <img class="resizebtn" src="/images/vis_btns/maximize.png"></img>
          <img
            onClick={() => closeWindow(false)}
            class="resizebtn"
            src="/images/vis_btns/close.png"
          ></img>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Window;
