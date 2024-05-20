import { useState, useEffect } from "react";
import "./css/like.css";
import { BsFillCaretRightFill, BsFillHeartFill } from "react-icons/bs";
import { useDataContext } from "../dataProvider/context";
import axios from "axios";
import { useDataContext_user } from "../dataProvider/user";
import { useDataContextSong } from "../dataProvider/getSong";
import Success_toast from "../toster/succes";
import { Toaster } from "react-hot-toast";
import Error_toast from "../toster/error";

// like function
function LikeSong({ isLiked, id }) {
  const { getAllUserSongAdd, search } = useDataContextSong();
  const [isliked, setIsLikeSong] = useState(isLiked);
  const { link } = useDataContext_user();
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
          search(localStorage.getItem("lastSearch"));
          if (response.data.message == "You liked this song") {
            Success_toast("You liked this song");
          }else{
            Error_toast(response.data.message);
          }
        } else {
          alert("une erreur ");
          search(localStorage.getItem("lastSearch"));
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
          if (response.data.message == "You have disliked this song") {
            Success_toast("You have disliked this song");
            search(localStorage.getItem("lastSearch"));
          } else {
            Error_toast(response.data.message);
            search(localStorage.getItem("lastSearch"));
          }
        } else {
          alert("une erreur ");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Liked = () => {
    if (!isliked) {
      setIsLikeSong(true);
      liked();
    } else {
      setIsLikeSong(false);
      dislike();
    }
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <>
        <BsFillHeartFill
          className={isliked ? "likebtn liked" : "likebtn"}
          onClick={Liked}
        />
      </>
    </>
  );
}
export default LikeSong;
