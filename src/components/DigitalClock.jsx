import React, { useState, useEffect } from "react";
import * as dayjs from "dayjs";

export default function DigitalClock() {
  let localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);

  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format("LTS"));
    });
  }, []);
  return (
    <>
      <div
        className="p-6 bg-black w-[330px]  text-4xl text-indigo-400 font-bold font-serif
         flex items-center justify-center border-4 border-indigo-400 rounded-2xl "
      >
        <p id="time">{time}</p>
      </div>
    </>
  );
}
