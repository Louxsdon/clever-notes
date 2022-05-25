import React, { useState } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import Greetings from "./Greetings";
import Music from "./Music";
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
      <main id="main-container">
        <div id="bg-overlay">
          <div className="container pt-12">
            <div
              id="datetime"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${sessionImage})`,
              }}
              className=""
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
            <div className="flex justify-between space-x-16">
              {/* Todo components */}
              <div className="w-[40%]">
                <Todo />
              </div>
              <div className="w-[40%]">
                <Music />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
