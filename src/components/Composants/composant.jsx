import "./css/composant.css";
import "./css/responsive.css";
import icons from "../../assets/medias/favicon-32x32.png";
import { Link } from "react-router-dom";
import { Song } from "../db";
import { useDataContext } from "../dataProvider/context";
import PlayPause from "../bottom/btnContoller/Button";
import { BsFillCaretRightFill } from "react-icons/bs";
import Image from "./Image.jsx";
import AudioVisualizer from "../visualizer/visualizer.jsx";
import { useDataContextSong } from "../dataProvider/getSong.jsx";
import { useEffect } from "react";
import BtnSongPlayPause from "../bottom/btnContoller/songBtnPlayPause.jsx";
export default function Composant({ title, display, song,height }) {
  const { basename, codeSong, getSongData, onplay, isPlaying } =
    useDataContext();
  const { getNewAdd } = useDataContextSong();
  const play = () => {
    getNewAdd();
    onplay();
  };
  const color = [
    "rgb(255, 153, 0)",
    "rgb(0, 119, 255)",
    "rgb(0, 255, 106)",
    "rgb(255, 255, 255)",
    "rgb(47, 255, 40)",
  ];

  return (
    <div id="newAdd">
      {song && (
        <>
          <h3 className="t">{title}</h3>
        </>
      )}

      <div className="allItems">
        {song &&
          song.map((e, i) => (
            <div className="items" key={i}>
              <div className="all">
                <div
                  id="btn"
                  onClick={() => {
                    getSongData(song, i);
                    getNewAdd();
                  }}
                >
                    <>
                      <BtnSongPlayPause allSong={song} id={e.id_song} index={i}/>
                    </> 
                  
                </div>
                <Link to={`/song/${e.id_song}`}>
                  <div className="img" style={{height:`${height}`}}>
                    <img src={e.image} alt=""  />
                    {/* <Image src_image={e.image} /> */}
                    <svg
                      className="wave"
                      style={{ display: `${display}` }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                     
                      <path
                        fill={`${color[i]}`}
                        fillOpacity="0.8"
                        d="M0,0L60,32C120,64,240,128,360,133.3C480,139,600,85,720,53.3C840,21,960,11,1080,26.7C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                      ></path>
                    </svg>
                    <div className="visualizer">

                    </div>
                    <div className="mix">
                      <div className="leftText">
                        <h6 className="" style={{ display: `${display}` }}>
                          {e.genre ? <>{e.genre} mix</> : "HGROOVE MIX"}
                        </h6>
                      </div>
                      <div className="rightIcons">
                        <img
                          className="iconsWave"
                          style={{ display: `${display}` }}
                          src={icons}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="bot">
                  <div className="flex">
                    <small>{e.title && e.title} </small>
                    <h6> {e.likeCount && <>{e.likeCount} likes</>} </h6>
                  </div>

                  <p>{basename(e.url)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
