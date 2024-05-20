import "./css/r.css";
import img from "../../assets/medias/toby.jpg";

import { useState } from "react";
import { addBgR } from "../functionJs/bgR.js";
import { FaItunesNote } from "react-icons/fa";

import { BsChatDots, BsChevronDown } from "react-icons/bs";
import Range from "./btnContoller/range.jsx";
import Back_btn from "./btnContoller/back.jsx";
import PlayPause from "./btnContoller/Button.jsx";
import Next_btn from "./btnContoller/next.jsx";
import Like from "../Button/like.jsx";
import { DataProvider, useDataContext } from "../dataProvider/context";
import SongCountTime from "./btnContoller/songCountTime.jsx";
import SongTime from "./btnContoller/songTime.jsx";
export default function PlayingResponsive() {
  const { togglePlayResponsive, responsive_play,cover,playingSong, isLike, basename ,artiste } =
    useDataContext();
  useState(() => {
    let interval;
    interval = setInterval(() => {
      addBgR();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [addBgR]);

  return (
    <>
      <div
        id="playing-responsive"
        className={
          responsive_play
            ? "playing-responsive  item-bg-res-playing active "
            : "playing-responsive  item-bg-res-playing "
        }
      >
        <div className="item item-bg-res-playing">
          <div className="top">
            <div className="arrow-bak">
              <BsChevronDown onClick={togglePlayResponsive} className="icons" />
            </div>
            <div className="infos">
              <small> HGroove playing-Now</small>
              <h3>{artiste ? artiste:"hgroove"}</h3>
            </div>
            <div className="op">back</div>
          </div>
          <div className="img-item">
          {/* <img src={img} className="getColor-res " alt="" /> */}
            <img src={cover ? cover :img}  alt="" />
            <img style={{width:"40px",height:"40px",display:"none"}} src={cover ? cover :img} className="getColor-res " alt="" />

          </div>
          <div className="items"></div>
          <div className="bottom-m">
            <div className="bottom-top">
              <marquee behavior="" direction="" scrollamount={2}>
                <h5>{playingSong?basename(playingSong):""}</h5>
              </marquee>
              <Range />
              <div className="flexTimeR">
                <>
                  <SongCountTime/>
                  <SongTime/>
                </>
              </div>
              <div className="flex-btn-manipulation">
                {/* <div className="controls cont cont1">
                  <BsShuffle className="icons" />
                </div> */}

                <div className="controls1 controls">
                  <Back_btn />
                </div>

                <div className="iconsP">
                  <PlayPause />
                </div>
                <div className="controls">
                  <Next_btn />
                </div>
                {/* <div className="controls cont">
                  <BsArrowRepeat className="icons" />
                </div> */}
              </div>
              <div className="flex-icons-bottom">
                <div className="flex-icons">
                  <FaItunesNote className="icons" />
                  <small>10</small>
                </div>
                <div className="flex-icons">
                  <Like isLiked={isLike}  />
                  <small>10</small>
                </div>
                <div className="flex-icons">
                  <BsChatDots className="icons" />
                  <small>10</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </>
  );
}
