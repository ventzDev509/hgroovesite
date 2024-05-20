// DataContext.js
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import axios from "axios";
const DataContext = createContext();

export function useDataContext_user() {
  return useContext(DataContext);
}
import Success_toast from "../toster/succes";
import Error_toast from "../toster/error";
export function DataProvider_user({ children }) {
  const [isLogin, setIsLogin] = useState();
  const [user_infos, setUserInfos] = useState([]);
  const [newProfile, setNewProfile] = useState("");
  const [tag_artist, setTagArtist] = useState("");

  //   const link="https://hgrooveapi.onrender.com/api/hgroove/v1/"
  //  const linkPhp="https://hgroove.rf.gd/bd/"
   
  const link = "http://localhost:5000/api/hgroove/v1/";
  const linkPhp = "http://localhost/bd/";
  // Declaration of the getUserInfos function as an asynchronous function
  const getUserInfos = async () => {
    try {
      const response = await axios.get(`${link}userInfos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      });
      setUserInfos(response.data);
    } catch (error) {}
  };

  /* user artist
   add a new song  */

  // Add new song variables
  const [cover, setCover] = useState("");
  const [song, setSong] = useState("");
  const [song_title, setSongTitle] = useState("");
  const [dateCreate, setDateCreate] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [songInfos, setSongInfos] = useState([]);

  // Add song infos to database
  const addNewSong = async () => {
    if (cover && song) {
      if (
        user_infos[0].user_id &&
        title &&
        description &&
        dateCreate &&
        genre &&
        tag
      ) {
        const data = {
          user_id: user_infos[0].user_id,
          title: song_title,
          dateCreate: dateCreate,
          genre: genre,
          description: description,
          tag: tag,
          url: song,
          image: cover,
          artist: user_infos[0].username,
        };
        await axios
          .post(`${link}add-newsong`, data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
            },
          })
          .then((response) => {
            if (response.data.message == "Song added successfully") {
              Success_toast(response.data.message);
              window.location.href = "/dashboard";
            } else {
              Error_toast(response.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Error_toast("All fields are required");
      }
    } else {
      Error_toast("no cover and Song selected please select they first");
    }
  };

  //fin

  //update song with id code
  const updateSong = async (id) => {
    let data = { tag };
    if (song_title) {
      data = {
        title: song_title,
        ...data,
      };
    }
    if (genre) {
      data = {
        genre: genre,
        ...data,
      };
    }
    if (description) {
      data = {
        description: description,
        ...data,
      };
    }

    await axios
      .post(`${link}update/${id}`, data, {
        headers: {
          Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        if (response.data.message == "Song Update Successfully") {
          Success_toast(response.data.message);
          setTimeout(() => {
            window.location.href = "/Dashboard/song";
          }, 500);
        } else {
          Error_toast(response.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fin

  //delete a son by id
  const [open, setOpen] = React.useState(false);
  const [isDelte, setIsDelete] = useState(false);
  const deleteSong = async (code) => {
    setIsDelete(true);
    await axios
      .post(
        `${link}delete-song`,
        { code: code },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.message == "song deleted successfully") {
          setOpen(false);
          Success_toast(response.data.message);
          setIsDelete(false);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          Error_toast(response.data.message);
          setIsDelete(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setOpen(false);
      });
  };

  // get user artist from end point api
  const [dataArtist, setDataArtist] = useState([]);
  const getArtist = async () => {
    {
      await axios
        .get(`${link}artist`)
        .then((response) => {
          setDataArtist(response.data.artist);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // log-out
  const logOut = () => {
    localStorage.removeItem("token_hg");
    setIsLogin(false);
  };
  return (
    <DataContext.Provider
      value={{
        isLogin,
        link,
        newProfile,
        user_infos,
        tag_artist,
        cover,
        song,
        song_title,
        dateCreate,
        linkPhp,
        songInfos,
        open,
        isDelte,
        setOpen,
        deleteSong,
        updateSong,
        setTag,
        setDescription,
        setGenre,
        setDateCreate,
        setCover,
        setSong,
        setSongTitle,
        setTagArtist,
        setNewProfile,
        logOut,
        getUserInfos,
        addNewSong,

        //get artist
        getArtist,
        dataArtist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
