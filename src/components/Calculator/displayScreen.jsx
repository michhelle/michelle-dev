import React from "react";

const DisplayScreen = ({ value }) => {
  return (
    <div id="calculator-container">
      <div id="number-box" class="border border-blue-300 mt-0.5 bg-white">
        <p class="text-right mr-2"> {value}.</p>
      </div>
    </div>
  );
};

export default DisplayScreen;