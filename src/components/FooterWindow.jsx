import React, { useState, useRef, useEffect } from "react";

const FooterWindow = ({ iconSrc, title, removeWindow}) => {
  const handleRemoveClick = () => {
    removeWindow("footer");
  };

  return (
    <div id="footer" class="select-none flex flex-row rounded-sm hover:brightness-125 border w-40 mt-1 mb-0.5 border-blue-400 p-0.5 bg-blue-500">
      <img class="mt-0.5 h-3 w-3" src={iconSrc} />
      <p class="text-white text-xs pl-1 ">{title}</p>
    </div>
  );
};

export default FooterWindow;
