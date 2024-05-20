import "./css/mostPopular.css";
import { BsFillCaretRightFill, BsFillHeartFill } from "react-icons/bs";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { FaItunesNote } from "react-icons/fa";
import { useEffect } from "react";
import Like from "../Button/like";
import img from "../../assets/medias/n.jpg";
import { Song } from "../db.js";
import { useDataContext } from "../dataProvider/context.jsx";
import LikeSong from "../Button/likeSong.jsx";
import { useDataContextSong } from "../dataProvider/getSong.jsx";
export default function Composant_Artiste_page({ title, songData }) {
  const { processAndPlayAudio, id } = useDataContext();
  const { isLikeSong, setIsLikeSong} = useDataContextSong();
  const play = () => {
    processAndPlayAudio();
  };

  return (
    <div id="most-popular-song">
      {songData && (
        <>
          <h3>{title}</h3>
        </>
      )}
      {songData &&
        songData.map((song, index) => (
          <div className="content_most_song" key={song.id_song}>
            <div
              className="item-lefts"
              onClick={play}
              style={{ cursor: "pointer" }}
            >
              <h3 className="num">#{index + 1}</h3>

              <div className="left-most-song">
                <img src={song.image} alt="" />
              </div>
              <div className="right-most-song">
                <h3 className="active">{song.title}</h3>
                <p className="activ">{song.description}</p>
              </div>
            </div>
            <div className="center1" id="name">
              <div>
                <FaItunesNote className="icons" />
              </div>
              <div>
                <small>10</small>
              </div>
            </div>

            <div className="center1 right">
              <div>
                
                <LikeSong isLiked={song.isLiked} id={song.id} />
              </div>
            </div>
            <div className="center1 right">
              <div>...</div>
            </div>
          </div>
        ))}
    </div>
  );
}
