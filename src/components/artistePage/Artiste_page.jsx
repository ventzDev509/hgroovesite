import React, { useEffect, useState } from "react";
import "../navigations/css/menu.css";
import "./css/responsive.css";
import "./css/artiste.css";
import img from "../../assets/medias/n.jpg";
import { addBg } from "../functionJs/bg.js";
import { Link, useParams } from "react-router-dom";

import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";

import Suivre from "../Button/Suive.jsx";
import Composant_Artiste_page from "../Composants/composantArtistepage.jsx.jsx";
import Composant from "../Composants/composant.jsx";
import ComposantArtiste from "../Composants/composantArtiste.jsx";
import PlayPause from "../bottom/btnContoller/Button.jsx";
import { Artiste } from "../db.js";
import PageNotFound from "../404Page/404.jsx";
import { useDataContext } from "../dataProvider/context.jsx";
export default function Artiste_page() {
  const { id } = useParams();
  let data;
  useEffect(() => {
    addBg();
  }, [addBg]);
  data = Artiste.find((artiste) => artiste.id == id);
  if (data) {
    return (
      <>
        <div id="Artiate_page">
          <div className="all-song-pages">
            <div id="left-song-page">
              <div className="top-info" id="top-info">
                <div className="mm">
                  <div className="top item-bg">
                    <div className="detay all">
                      <div className="left-detay">
                        <img
                          src={data.cover}
                          crossOrigin="anonymous"
                          alt=""
                          className="getColor"
                          id="img"
                        />
                        <div className="op">
                          <div className="detail_a"></div>
                        </div>
                      </div>

                      <div className="allDetay">
                        <h1>HGroove</h1>
                        <div className="flex-feet">
                          <small>
                            <Link className="link">10 Abonnees</Link>
                          </small>
                          <small>
                            <Link className="link">100 Likes</Link>
                          </small>
                          <small>
                            <Link className="link">10 Comments</Link>
                          </small>
                        </div>
                        <div className="suiv-btn">
                          <Suivre />
                        </div>
                      </div>
                    </div>
                    <div className="opacity ">
                      <div className="play-btn-song">
                        <PlayPause active={"active"} />
                      </div>
                    </div>
                  </div>

                  <div id="bottomData">
                    <div className="flex-artiste-detay">
                      <div className="leftF">
                        <img src={data.cover} alt="" />
                      </div>
                      <div className="rightD"></div>
                    </div>
                    <div className="media">
                      <div className="item_">
                        <h3> hGroove</h3>
                        <Suivre />
                      </div>
                      <div className="flex_">
                        <div className="item-m">
                          <HiOutlineUser className="icons" />
                          <p>10 abonnees</p>
                        </div>
                        <div className="item-m">
                          <p>-</p>
                        </div>
                        <div className="item-m">
                          <p>0 abonnement</p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom_item" id="bottom_item">
                      <Composant_Artiste_page />
                      <Composant title={"For You"} />
                      <ComposantArtiste title={"For You"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-comment none">
                <div className="top-info-comment">
                  <h5>comment(100)</h5>
                </div>
                <div className="comment-body">
                  <div className="item-comment">
                    <div className="top-comment-infos">
                      <div className="user">
                        <img src={img} alt="" />
                      </div>
                      <div className="comment">
                        <h5>Marceille Eventz</h5>
                        <small className="">8min 12-02-23</small>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Provident <small className="lire-plus ">Lire plus</small>
                    </p>
                  </div>
                </div>
                <div className="bottomc">
                  <input
                    type="text"
                    className="input"
                    placeholder="Ajouter un commentaire"
                  />
                  <button className="item-bg btnS">Send</button>
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
