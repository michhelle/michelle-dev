import React, { UseState } from "react";

function Calculator({setShowCalculator}) {
  return (
    <div class="flex flex-col border-2 border-blue-700  rounded-t-lg w-80  flex flex-col">
      <div class=" justify-between flex flex-row h-6 border border-b-blue-700 w-full row-span-1 self-start bg-gradient-to-b from-cyan-500 from-0% via-blue-700 via-10% to-blue-500 to-100% border-blue-500">
        <div class="flex flex-row">
          <img class=" mt-1 h-4 w-4" src="/images/icons/calculator.png"></img>
          <text class=" select-none mt-0.5 ml-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] drop-shadow-lg text-sm text-white font-semibold">
            Calculator
          </text>
        </div>

        <div class="flex flex-row pt-0.5">
          <img class="resizebtn" src="/images/vis_btns/minimize.png"></img>
          <img
            class="mr-0.5 h-5 w-5 opacity-50"
            src="/images/vis_btns/maximize.png"
          ></img>
          <img
            onClick={() => setShowCalculator(false)}
            class="resizebtn"
            src="/images/vis_btns/close.png"
          ></img>
        </div>
      </div>
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start">
        <button class="buttonarea">Edit</button>
        <button class="buttonarea">View</button>
        <button class="buttonarea">Help</button>
      </div>
      <hr class=" h-px border-white" />
      <div class="bg-orange-50 h-full">
        <div id="calculator-container" class="mx-2">
          <div id="number-box" class="border border-blue-300 mt-0.5 bg-white">
            <p class="text-right mr-2"> 0.</p>
          </div>
          <div class="flex flex-row mt-4 ml-2 justify-between">
            <div class="h-8 w-8 border-2 border-t-gray-400 border-l-gray-400 border-r-white border-b-white" />
            <div id="top-line" class="grid grid-cols-3 flex justify-between">
              <button class="calc-red">Backspace</button>
              <button class="calc-red">CE</button>
              <button class="calc-red">C</button>
            </div>
          </div>
          <div class="grid grid-cols-6 mt-1 mb-1">
            <div class="grid grid-rows-4 mr-2.5">
              <button class="calc-red">MC</button>
              <button class="calc-red">MR</button>
              <button class="calc-red">MS</button>
              <button class="calc-red">M+</button>
            </div>

            <div class="grid grid-rows-4 ml-1">
              <button class="calc-blue">7</button>
              <button class="calc-blue">4</button>
              <button class="calc-blue">1</button>
              <button class="calc-blue">0</button>
            </div>
            <div class="grid grid-rows-4 ml-1">
              <button class="calc-blue">8</button>
              <button class="calc-blue">5</button>
              <button class="calc-blue">2</button>
              <button class="calc-blue">+/-</button>
            </div>
            <div class="grid grid-rows-4 ml-1">
              <button class="calc-blue">9</button>
              <button class="calc-blue">6</button>
              <button class="calc-blue">3</button>
              <button class="calc-blue">.</button>
            </div>
            <div class="grid grid-rows-4 ml-1">
              <button class="calc-red">/</button>
              <button class="calc-red">*</button>
              <button class="calc-red">-</button>
              <button class="calc-red">+</button>
            </div>
            <div class="grid grid-rows-4 ml-1">
              <button class="calc-blue">sqrt</button>
              <button class="calc-blue">%</button>
              <button class="calc-blue">1/x</button>
              <button class="calc-red">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
