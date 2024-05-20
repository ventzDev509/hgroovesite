import { BsFillCaretRightFill, BsFillPauseFill } from "react-icons/bs";
import { DataProvider, useDataContext } from "../../dataProvider/context";
import React, { useEffect } from "react";
import { useDataContextSong } from "../../dataProvider/getSong";
export default function PlayPause({ active, Song, index }) {
  const {
    processAndPlayAudio,
    isPlaying,
    isLike
  } = useDataContext();
  const { getNewAdd } = useDataContextSong();

  const play = () => {
    getNewAdd();
    processAndPlayAudio();
    
  };

  return (
    <>
      {isPlaying ? (
        <BsFillPauseFill
          className={`play-btn ${active}`}
          onClick={() => {
            play();
          }}
        />
      ) : (
        <BsFillCaretRightFill
          className={`play-btn ${active}`}
          onClick={() => {
            play();
          }}
        />
      )}
    </>
  );
}
