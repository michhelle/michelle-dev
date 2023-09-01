import React, { useState } from "react";
import DisplayScreen from "./displayScreen";
import ButtonBox from "./buttonBox";
import Button from "./button";
import Window from "../window";

function Calculator({ setShowCalculator }) {
  const btnTopValues = ["Backspace", "CE", "C"];

  const btnValues = [
    [7, 8, 9, "/", "sqrt"],
    [4, 5, 6, "*", "%"],
    [1, 2, 3, "-", "1/x"],
    [, 0, "+/-", ".", "+", "="],
  ];

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const backspacekClickHandler = () => {
    console.log("Backspace Clicked");
  };

  const clearEntryClickHandler = () => {
    console.log("CE Clicked");
  };

  return (
    <Window
      wprimary={"w-80"}
      closeWindow={() => setShowCalculator(false)}
      title="Calculator"
      src="/images/icons/calculator.png"
    >
      <div class="flex flex-row h-6 w-full bg-orange-50 self-start">
        <button class="buttonarea">Edit</button>
        <button class="buttonarea">View</button>
        <button class="buttonarea">Help</button>
      </div>
      <hr class=" h-px border-white" />
      <div class="bg-orange-50 h-full">
        <div id="calculator-container" class="mx-2">
          {/* <div id="number-box" class="border border-blue-300 mt-0.5 bg-white">
            <p class="text-right mr-2"> {display}.</p>
          </div> */}
          <DisplayScreen value={calc.num ? calc.num : calc.res} />
          <ButtonBox>
            <div>
              <div class="  mt-1 mb-1">
                <div class="flex flex-row mt-4 ml-2 justify-between">
                  <div class="h-8 w-8 border-2 border-t-gray-400 border-l-gray-400 border-r-white border-b-white" />
                  <div
                    id="top-line"
                    class="grid grid-cols-3 flex justify-between"
                  >
                    {btnTopValues.flat().map((btn, i) => {
                      return (
                        <Button
                          key={i}
                          id={btn === "=" ? "equals" : ""}
                          value={btn}
                          onClick={
                            btn === "Backspace"
                              ? backspacekClickHandler
                              : btn === "CE"
                              ? clearEntryClickHandler
                              : btn === "C"
                              ? resetClickHandler
                              : ""
                          }
                        />
                      );
                    })}
                  </div>
                </div>
                <div class="flex flex-row">
                  <div
                    id="left-line"
                    class=" flex flex-col justify-around ml-px w-[3.09rem]"
                  >
                    <button class="calc-red">MC</button>
                    <button class="calc-red">MR</button>
                    <button class="calc-red">MS</button>
                    <button class="calc-red">M+</button>
                  </div>
                  <div class=" ml-2.5 grid grid-cols-5 w-full">
                    {btnValues.flat().map((btn, i) => {
                      return (
                        <Button
                          key={i}
                          id={btn === "=" ? "equals" : ""}
                          value={btn}
                          // onClick={
                          //   btn === "C"
                          //     ? resetClickHandler
                          //     : btn === "+-"
                          //     ? invertClickHandler
                          //     : btn === "%"
                          //     ? percentClickHandler
                          //     : btn === "="
                          //     ? equalsClickHandler
                          //     : btn === "/" ||
                          //       btn === "X" ||
                          //       btn === "-" ||
                          //       btn === "+"
                          //     ? signClickHandler
                          //     : btn === "."
                          //     ? commaClickHandler
                          //     : numClickHandler
                          // }
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ButtonBox>
        </div>
      </div>
    </Window>
  );
}
export default Calculator;
