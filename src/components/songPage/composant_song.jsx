import React, { useEffect, useState } from "react";
import "../navigations/css/menu.css";
import "./css/song.css";
import "../../components/cssResponsive/responsive.css";
import img from "../../assets/medias/rema.png";
import { BsFillCaretRightFill, BsFillHeartFill } from "react-icons/bs";

import { addBg } from "../functionJs/bg.js";
import { Link, useParams } from "react-router-dom";

import Composant from "../Composants/composant.jsx";
import ComposantArtiste from "../Composants/composantArtiste.jsx";
import Artiste_song_add from "../Composants/Artiste.jsx";
import { Song } from "../db.js";
import PlayPause from "../bottom/btnContoller/Button.jsx";
import PageNotFound from "../404Page/404.jsx";
import { useDataContext } from "../dataProvider/context.jsx";
import { useDataContextSong } from "../dataProvider/getSong.jsx";
import ShuffleSong from "../bottom/btnContoller/suffleSong.jsx";
import SongItems from "../Composants/composantPageSong.jsx";
export default function SongPage() {
  const { allSong, getAllSong } = useDataContextSong();
  const { id } = useParams();
  let data;
  // alert(id)
  useEffect(() => {
    addBg();
    //
  }, [addBg]);
  useEffect(() => {
    getAllSong();
  }, []);
  data = allSong.find((song) => song.id_song == id);

  if (data) {
    return (
      <>
        <div id="SongPage">
          <div className="all-song-pages">
            <div id="left-song-page">
              <div className="top-info">
                <div>
                  <div className="top item-bg">
                    <div className="detay all">
                      <div className="left-detay">
                        <img
                          src={data.image}
                          alt=""
                          className="getColor"
                        />
                      </div>

                      <div className="allDetay">
                        <h1>{data.title}</h1>
                        <div className="flex-feet">
                          <small>
                            <Link className="link">hgroove</Link>
                          </small>
                          <small>
                            <Link className="link">Styve Jay</Link>
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="opacity ">
                      <div className="play-btn-song">
                        {/* <PlayPause active={"active"} /> */}
                        <ShuffleSong  id={data.id}/>
                      </div>
                    </div>
                  </div>
                  <div className="data none">
                    <div className="flex-data">
                      <div className="img-data">
                        <div className="left">
                          <img src={img} alt="" className="img" />
                        </div>
                        <div className="right">
                          <h4>HGroov</h4>
                          <small>Like 100</small>
                        </div>
                      </div>
                      <div className="center-item">
                        <BsFillHeartFill className="icons" />
                      </div>

                      <div className="right-item">setting</div>
                    </div>
                  </div>
                  <div id="bottomSong">
                    <Artiste_song_add />
                    <SongItems categorie={data.genre}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <PageNotFound />
      </>
    );
  }
}
