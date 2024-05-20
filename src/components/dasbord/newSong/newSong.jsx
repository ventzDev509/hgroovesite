import Tag_arist_input from "./inputTag";
import "./css/style.css";
import { Button, TextField } from "@mui/material";
import img from "../../../assets/medias/m.png";
import icons from "../../../assets/ressouces/undraw_happy_music_g6wc.svg";
import Song_drop_file from "./songDrop";
import { useDataContext_user } from "../../dataProvider/user";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import MultiStep from "react-multistep";
function Add_new_song() {
  const { addNewSong, setCover, setSong, isUpload } = useDataContext_user();
  const [imageURL, setImageURL] = useState("");

  //on select image add image to src
  const handleImageChange = async (e) => {
    const choosedFile = e.target.files[0];
    if (choosedFile) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setImageURL(reader.result);
      });
      setCover(choosedFile);

      reader.readAsDataURL(choosedFile);
      //   const formData = new FormData();
      if (choosedFile) {
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />

      <div
        id="new-song"
        style={{ background: `url(${icons})`, backgroundRepeat: "no-repeat" }}
      >
        <Song_drop_file />
      </div>
    </>
  );
}
export default Add_new_song;
