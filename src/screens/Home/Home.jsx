import React, { useState, useEffect } from "react";
import background from "../../images/background.jpg";

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
  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = getTime();
      newTime !== time && setTime(newTime);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <img
        class="h-screen w-screen"
        style={{ "pointer-events": "all" }}
        src={background}
      ></img>
      <div class="bg-windows-background"></div>
      <div class="fixed bottom-0 left-0 z-50 w-full h-7 bg-white border-t bg-gradient-to-b from-cyan-500 from-0% via-blue-600 via-10% to-blue-700 to-100% border-blue-500 ">
        <div class="grid h-full w-full grid-cols-2 font-medium ">
          <div>
            <button
              type="button"
              class="shadow-inner items-center justify-center bg-gradient-to-b from-green-300 from-0% to-green-600 to-10% hover:bg-green-500 group rounded-r-lg"
            >
              <span class=" p-4 pr-6 drop-shadow-lg text-lg text-white ">
                menu
              </span>
            </button>
          </div>

          <div class="justify-self-end">
            <button
              type="button"
              class="border-l h-full border-cyan-500 bg-gradient-to-b from-cyan-400 from-0% via-cyan-600 via-10% to-cyan-600 to-100% group"
            >
              <span class="p-5 text-sm text-white ">{time}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
