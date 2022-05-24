import React, { useState } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import Greetings from "./Greetings";
import Todo from "./Todo";

export default function DateTime() {
  const [toggleClock, setToggleClock] = useState(false);
  const [sessionImage, setSessionImage] = useState(
    require("../assets/imgs/morning/morning1.jpg")
  );

  function changeSessionImage(img) {
    setSessionImage(img);
  }

  return (
    <>
      <div className="max-w-[100%] p-16 m-auto">
        <div
          id="datetime"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${sessionImage})`,
          }}
          className="!bg-cover !bg-no-repeat !bg-center !text-white h-[330px]
          flex items-center justify-between rounded-2xl relative"
        >
          <div className="clock flex flex-col items-center w-1/2 ">
            {!toggleClock ? <AnalogClock /> : <DigitalClock />}

            {/* button to toggle clocks */}
            <button
              onClick={() => setToggleClock(!toggleClock)}
              className="px-4 py-2 mt-5 inline-block absolute bottom-3 text-sm bg-purple-200 text-purple-700 rounded-md"
            >
              {!toggleClock ? "Digital Clock" : "Analog Clock"}
            </button>
          </div>
          <div className="greeting-section w-1/2 flex flex-col items-center">
            <Greetings onSessionChange={changeSessionImage} />
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex justify-between">
          {/* Todo components */}
          <div className="w-1/3">
            <Todo />
          </div>
          <div className="musics"></div>
        </div>
      </div>
    </>
  );
}
