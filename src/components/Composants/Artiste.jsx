import "./css/artisteAdd.css";
import "../cssResponsive/responsive.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import artiste from "../../assets/medias/R.jpg"
import Suivre from "../Button/Suive";
export default function Artiste_song_add() {
  return (
    <>
      <div id="allItem-artiste-song-add" >
        <div id="item-artiste">
          <Link to={{pathname:"/artiste", search:`?id=nkfshrowehrw`}}>
            <div id="left_p">
              <img src={artiste} alt="" />
            </div>
          </Link>
          <Link to={{pathname:"/artiste", search:`?id=nkfshrowehrw`}}>
            <div id="right_d">
              <h2>hgroove</h2>
              <small>30 abonnees</small>
            </div>
          </Link>
        </div>

        <Suivre/>
      </div>
    </>
  );
}
