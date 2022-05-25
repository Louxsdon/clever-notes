import React, { useState, useEffect } from "react";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import { tracks } from "../db";

export default function Music() {
  const [isPlaying, setisPlaying] = useState(false);
  const [track, setTrack] = useState(tracks[0]);
  const [audio] = useState(new Audio(require(`../assets/audio/${track.song}`)));

  function onPlaying() {
    audio.paused ? setisPlaying(false) : setisPlaying(true);
  }

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      onPlaying();
    } else {
      audio.play();
      onPlaying();
    }
  }

  function playTrack(id) {
    let track = tracks.filter((t) => t.id === id)[0];
    setTrack(track);
    audio.src = require(`../assets/audio/${track.song}`);

    audio.play();
    onPlaying();
  }

  function onNext() {
    let index = tracks.indexOf(track);
    let tr = tracks.length - 1 === index ? tracks[0] : tracks[index + 1];
    setTrack(tr);
    audio.src = require(`../assets/audio/${tr.song}`);

    audio.play();
    onPlaying();
  }

  function onPrev() {
    let index = tracks.indexOf(track);
    let tr = index === 0 ? tracks[tracks.length - 1] : tracks[index - 1];
    setTrack(tr);
    audio.src = require("../assets/audio/" + tr.song);
    audio.play();
    onPlaying();
  }

  useEffect(() => {
    audio.autoplay = true;
    setInterval(() => {
      onPlaying();
    });
  }, []);

  return (
    <div className="flex w-[90%] flex-col space-y-5 justify-center">
      {/* media player */}

      <div className={`${isPlaying && "flashi"} p-[3px] rounded-3xl`}>
        <div
          className="player w-full  space-x-10 flex 
      justify-between bg-[#7b95a0] bg-opacity-90 backdrop-blur-md 
      p-5 text-white rounded-3xl border-4 border-slate-200"
        >
          <div className="w-[30%]">
            <div
              className="cover-art w-[90px] h-[90px] rounded-full border-2
         overflow-hidden object-cover object-center"
            >
              <img
                className="object-cover object-center h-full transition-all delay-200"
                src={
                  track.art
                    ? require(`../assets/imgs/cover-arts/${track.art}`)
                    : require(`../assets/imgs/cover-arts/audio-art.png`)
                }
                alt=""
              />
            </div>
          </div>
          {/* control section */}
          <div className="controls w-[70%] flex flex-col items-center">
            <div className="titles text-center">
              <h2 className="text-base">{track.title}</h2>
              <h4 className="text-xs">{track.artist}</h4>
            </div>
            <div className="controllers flex space-x-4 mt-5">
              <ControlBtn onClick={onPrev} Icon={MdSkipPrevious} />
              <ControlBtn
                className="!bg-orange-500"
                onClick={togglePlay}
                Icon={isPlaying ? MdPause : MdPlayArrow}
              />
              <ControlBtn onClick={onNext} Icon={MdSkipNext} />
            </div>
          </div>
        </div>
      </div>
      {/* playlist section */}
      <div
        className="playlist bg-slate-500 bg-opacity-70 
      p-4 rounded-xl "
      >
        <div className=" space-y-4 overflow-auto h-[27vh] p-2">
          {tracks.map((audio, i) => (
            <div
              key={i}
              className={`flex justify-between items-center 
          bg-slate-600 py-2 px-4 rounded-xl
          drop-shadow-lg shadow-slate-900 ${
            audio.id === track.id && "bg-slate-900"
          }`}
            >
              <div className="titles text-white">
                <h2 className="text-sm">{audio.title}</h2>
                <h4 className="text-xs text-gray-300">{audio.artist}</h4>
              </div>
              <ControlBtn
                className="!bg-orange-500"
                onClick={
                  audio.id === track.id ? togglePlay : () => playTrack(audio.id)
                }
                Icon={
                  isPlaying && audio.id === track.id ? MdPause : MdPlayArrow
                }
                iconStyle="!text-xs"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ControlBtn({ Icon, className, onClick, iconStyle }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 bg-slate-500 rounded-full 
      shadow-lg shadow-slate-600 text-white ${className}`}
    >
      <Icon className={`text-lg ${iconStyle}`} />
    </button>
  );
}
