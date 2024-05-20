import PlayPause from "./btnContoller/Button";
import Back_btn from "./btnContoller/back";
import Next_btn from "./btnContoller/next";
import Range from "./btnContoller/range";
import img from "../../assets/medias/R.jpg";
import s from "../../assets/songs/Dèf Fondamantal - Dèf Note (Odyo Ofisyèl)(M4A_128K).mp3";
import "./css/bottom.css";
import Like from "../Button/like";
import SongTime from "./btnContoller/songTime";
import SongCountTime from "./btnContoller/songCountTime";
import { useDataContext } from "../dataProvider/context";
import Volume from "./btnContoller/volume";
import { useLocation } from "react-router-dom";
import Maquee from "./maquee";
import AudioVisualizer from "../visualizer/visualizer";
import Shuffle from "./btnContoller/suffle";
import WaveForm from "../visualizer/WaveForm";
import { useEffect } from "react";
export default function Bottom() {
  const {
    audioElement,
    playingSong,
    cover,
    title,
    basename,
    onEnded,
    localisation,
    id,
    isLike,
    isPlaying
  } = useDataContext();
  const pathname = useLocation();
 
  return (
    <div id="bottom" className={localisation(pathname) ? "none" : ""}>
      <audio
        src={playingSong ? playingSong : s}
        ref={audioElement}
        preload="auto"
        onEnded={onEnded}
      ></audio>
      {/* <AudioVisualizer s={s} /> */}
      {/* <WaveForm/> */}
      <div className="itemTop">
        <div className="left-top">
          <img src={cover ? cover : img} alt="" />
          <div className="infos">
            <small id="title">{title ? title : "Hgroove"}</small>
            <Maquee />
          </div>
        </div>
        <div className="center">
          <div className="controls cont cont1">
            <Shuffle />
          </div>
          <div className="controls1 controls">
            <Back_btn />
          </div>
          <div className="iconsP">
            <PlayPause active={isPlaying ? "active isPlay" : "active"}/>
          </div>
          <div className="controls">
            <Next_btn />
          </div>
          <div className="controls cont">
            <Like isLiked={isLike} id={id} />
          </div>
        </div>

        <Volume />
      </div>

      <div id="range">
        <div className="flexTimeR">
          <SongCountTime />
        </div>
        <Range />
        <div className="flexTimeR">
          <>
            <SongTime />
          </>
        </div>
      </div>
    </div>
  );
}
