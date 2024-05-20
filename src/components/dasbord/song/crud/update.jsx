import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import icons from "../../../../assets/ressouces/undraw_happy_music_g6wc.svg";
import { Toaster } from "react-hot-toast";
import { useDataContext_user } from "../../../dataProvider/user";
import SelectGenre from "../../newSong/selectGenre";
import Tag_arist_input from "../../newSong/inputTag";
import { useDataContext } from "../../../dataProvider/context";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function UpdateSong() {
  const {
    link,
    setSongTitle,
    setDateCreate,
    setDescription,
    updateSong,
    genre,
  } = useDataContext_user();
  const { id } = useParams();
  const { setParams } = useDataContext();
  const [songInfos, setSongInfos] = useState([]);
  // Destructuring the useForm hook to get form methods and state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [newData, setNewData] = useState();
  const handleChange = (data) => {
    setNewData(data);
  };
  //get Song infos with the id
  const getSongInfos = async () => {
    await axios
      .get(`${link}get-song-infos/${id}`, {
        headers: {
          Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setSongInfos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSongInfos();
    setParams(id);
  }, []);
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <form
        onSubmit={handleSubmit(handleChange)}
        action=""
        id="form-detail-song"
        style={{ background: `url(${icons})`, backgroundRepeat: "no-repeat" }}
      >
        {songInfos &&
          songInfos.map((data, index) => (
            <div className="item" key={index}>
              <h2>Song details </h2>
              <TextField
                fullWidth
                placeholder="Titre"
                className="input"
                required
                multiple={true}
                defaultValue={data.title}
                // {...register("title")}
                onChange={(e) => setSongTitle(e.target.value)}
              />

              <SelectGenre genre={data.genre} />
              <TextField
                fullWidth
                placeholder="Description"
                className="input"
                required={true}
                defaultValue={data.description}
                // {...register("description")}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Tag_arist_input tag={data.tag} />
              <Button
                className="btn"
                type="submit"
                onClick={() => {
                  updateSong(id);
                }}
              >
                Update
              </Button>
            </div>
          ))}
      </form>
    </>
  );
}

export default UpdateSong;
