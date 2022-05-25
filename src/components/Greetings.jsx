/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as dayjs from "dayjs";

export default function Greetings({ onSessionChange }) {
  const [datetime, setDatetime] = useState();
  const [day, setDay] = useState();
  const [greeting, setGreeting] = useState("Good Morning, ");
  const [followUpText, setFollowUpText] = useState("");

  let morningImg = () =>
    onSessionChange(require("../assets/imgs/morning/morning1.jpg"));
  let afternoonImg = () =>
    onSessionChange(
      require("../assets/imgs/federico-respini-sYffw0LNr7s-unsplash.jpg")
    );
  let eveningImg = () =>
    onSessionChange(require("../assets/imgs/evening1.jpg"));

  function getGreetings() {
    const hour = Number(dayjs().format("H"));
    if (hour < 12) {
      setGreeting("Good Mornings, ");
      setFollowUpText("What are your goals today?");
      morningImg();
    } else if (hour === 12) {
      setGreeting("Good Day, ");
      setFollowUpText("Have a pleasant day!");
      afternoonImg();
    } else if (hour < 16) {
      setGreeting("Good Afternoon, ");
      setFollowUpText("How is your day going?");
      afternoonImg();
    } else if (hour <= 20) {
      setGreeting("Good Evening, ");
      setFollowUpText("How was your day?");
      eveningImg();
    } else {
      setGreeting("Good Night, ");
      setFollowUpText("Have a good night and sound sleep!");
      eveningImg();
    }
  }

  useEffect(() => {
    getGreetings();
    setDatetime(dayjs().format("MMMM D"));
    setDay(dayjs().format("dddd"));
  }, []);

  return (
    <>
      <div className="clock flex items-center">
        <div className="date-time text-center text-white">
          <div className="space-x-2">
            <span id="day" className="text-5xl">
              {day}
            </span>
            <span className="text-3xl font-bold text-white uppercase">
              {datetime}
            </span>
            <hr className="my-2" />
          </div>
          <div className="greetings text-white">
            <div className="text-xl">
              <span>{greeting}</span>
              <span>Louxs Don</span>
            </div>
            <div>{followUpText}</div>
          </div>
          <hr className="my-2" />
        </div>
      </div>
    </>
  );
}
