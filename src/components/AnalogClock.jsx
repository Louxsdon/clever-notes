/* eslint-disable react-hooks/exhaustive-deps */
import React, { createRef, useEffect } from "react";

export default function AnalogClock() {
  let second = createRef();
  let minute = createRef();
  let hour = createRef();

  function tick() {
    setInterval(() => {
      const day = new Date();
      const deg = 6;
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      if (second.current && minute.current && hour.current) {
        hour.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        minute.current.style.transform = `rotateZ(${mm}deg)`;
        second.current.style.transform = `rotateZ(${ss}deg)`;
      }
    });
  }

  tick();

  // useEffect(() => {
  //   tick();
  // }, []);

  return (
    <>
      <div className="analog-container">
        <div ref={second} className="sec"></div>
        <div ref={minute} className="min"></div>
        <div ref={hour} className="hr"></div>
      </div>
    </>
  );
}
