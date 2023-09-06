import React, { useState } from "react";
import DisplayScreen from "./displayScreen";
import ButtonBox from "./buttonBox";
import Button from "./button";
import Window from "../window";

// function Calculator({ setShowCalculator }) {
const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const btnTopValues = ["Backspace", "CE", "C"];

const btnValues = [
  [7, 8, 9, "/", "sqrt"],
  [4, 5, 6, "*", "%"],
  [1, 2, 3, "-", "1/x"],
  [, 0, "+/-", ".", "+", "="],
];
const Calculator = ({removeWindow }) => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  //  button handlers

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const sqrtClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num = Math.sqrt(num)),
      res: (res = Math.sqrt(num)),
      sign: "",
    });
    };
    
      const reciprocalClickHandler = () => {
        let num = (1/calc.num) ;
        let res = (1/calc.res);

        setCalc({
          ...calc,
          num: num,
          res: res,
          sign: "",
        });
      };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "*"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Cannot divide by zero"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };



  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const backspacekClickHandler = () => {
      let num = parseInt(calc.num.toString().substring(0, calc.num.length - 1));
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;
    setCalc({
      ...calc,
      sign: "",
      num: num,
      res: res,
    });
  };

    const clearEntryClickHandler = () => {
        let num = 0;
        let res = calc.res;
    setCalc({
      ...calc,
      sign: "",
      num: num,
      res: res,
    });
  };

   const handleCloseClick = () => {
     removeWindow();
   };
  return (
    <Window
      wprimary={"w-80"}
      removeWindow={() => {
        handleCloseClick();
      }}
      title="Calculator"
      src="/images/icons/calculator.png"
      resizable={false}
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
                          _color="text-red-600"
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
                    <button class="calc-red text-red-600">MC</button>
                    <button class="calc-red text-red-600">MR</button>
                    <button class="calc-red text-red-600">MS</button>
                    <button class="calc-red text-red-600">M+</button>
                  </div>
                  <div class=" ml-2.5 grid grid-cols-5 w-full">
                    {btnValues.flat().map((btn, i) => {
                      return btn === "/" ||
                        btn === "*" ||
                        btn === "-" ||
                        btn === "+" ||
                        btn === "=" ? (
                        <Button
                          _color="text-red-600"
                          key={i}
                          id={btn === "=" ? "equals" : ""}
                          value={btn}
                          onClick={
                            btn === "C"
                              ? resetClickHandler
                              : btn === "+-"
                              ? invertClickHandler
                              : btn === "%"
                              ? percentClickHandler
                              : btn === "="
                              ? equalsClickHandler
                              : btn === "/" ||
                                btn === "*" ||
                                btn === "-" ||
                                btn === "+"
                              ? signClickHandler
                              : btn === "."
                              ? commaClickHandler
                              : btn === "sqrt"
                              ? sqrtClickHandler
                              : btn === "1/x"
                              ? reciprocalClickHandler
                              : numClickHandler
                          }
                        />
                      ) : (
                        <Button
                          _color="text-blue-600"
                          key={i}
                          id={btn === "=" ? "equals" : ""}
                          value={btn}
                          onClick={
                            btn === "C"
                              ? resetClickHandler
                              : btn === "+-"
                              ? invertClickHandler
                              : btn === "%"
                              ? percentClickHandler
                              : btn === "="
                              ? equalsClickHandler
                              : btn === "/" ||
                                btn === "*" ||
                                btn === "-" ||
                                btn === "+"
                              ? signClickHandler
                              : btn === "."
                              ? commaClickHandler
                              : btn === "sqrt"
                              ? sqrtClickHandler
                              : btn === "1/x"
                              ? reciprocalClickHandler
                              : numClickHandler
                          }
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
};
export default Calculator;
