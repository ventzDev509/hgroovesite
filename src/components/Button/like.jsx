import { useState, useEffect } from "react";
import "./css/like.css";
import { BsFillCaretRightFill, BsFillHeartFill } from "react-icons/bs";
import { useDataContext } from "../dataProvider/context";
import axios from "axios";
import { useDataContext_user } from "../dataProvider/user";
import { useDataContextSong } from "../dataProvider/getSong";

// like function
function Like({ isLiked }) {
  const { getAllUserSongAdd } = useDataContextSong();

  const { setIsLike, id } = useDataContext();
  const { link,getUserInfos } = useDataContext_user();
  async function liked() {
    await axios
      .post(
        `${link}like`,
        {
          songId: id,
        },
        {
          headers: {
            Authorization: ` Bearer ${localStorage.getItem("token_hg")}`,
          },
        }
      )
      .then((response) => {
        if (response) {
          console.log(response);
          getAllUserSongAdd()
          getUserInfos()
        } else {
          alert("une erreur ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // dislike function 
  async function dislike() {
    await axios
      .post(
        `${link}dislike`,
        {
          songId: id,
        },
        {
          headers: {
            Authorization: ` Bearer ${localStorage.getItem("token_hg")}`,
          },
        }
      )
      .then((response) => {
        if (response) {
          console.log(response);
          getAllUserSongAdd()
          getUserInfos()
        } else {
          alert("une erreur ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Liked = () => {
    if (!isLiked) {
      setIsLike(true);
      liked();
    } else {
      setIsLike(false);
      dislike();
    }
  };
  return (
    <>
      {/* <div onClick={likeBtn} className={like ? "heart-icon liked" :"heart-icon"}></div> */}

      <>
        <BsFillHeartFill
          className={isLiked ? "likebtn liked" : "likebtn"}
          onClick={Liked}
        />
      </>
    </>
  );
}
export default Like;
