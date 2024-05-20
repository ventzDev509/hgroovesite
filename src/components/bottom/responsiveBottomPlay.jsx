import "./css/bottomR.css";
import "./css/r.css";
import img from "../../assets/medias/toby.jpg";

import { useLocation } from "react-router-dom";
import Range from "./btnContoller/range";
import PlayPause from "./btnContoller/Button";
import { DataProvider, useDataContext } from "../dataProvider/context";
export default function ResponsiveBottomPlay() {
  const {
    togglePlayResponsive,
    cover,
    playingSong,
    title,
    localisation,
    basename,
    artiste,
  } = useDataContext();
  const showPlayingResponsive = () => {
    togglePlayResponsive();
  };
  const pathname = useLocation();

  return (
    <>
      <div id="all-bottom" className={localisation(pathname) ? "none" : ""}>
        <div id="playing-res">
          <div id="rangeR">
            <Range />
          </div>
          <div className="items">
            <div className="show" onClick={showPlayingResponsive}></div>
            <div className="left-playing">
              <img src={cover ? cover : img} alt="" />
            </div>

            <div className="center-playing">
              <p>
                {artiste && artiste}
                <small> - {title ? title : "hroove"}</small>
              </p>
            </div>

            <div className="right-playing">
              <PlayPause />
            </div>
          </div>
        </div>

        {/* reponsive song play  */}
      </div>
    </>
  );
}
