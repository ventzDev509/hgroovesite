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

export function useDataContextSong() {
  return useContext(DataContext);
}
export function DataProviderSong({ children }) {
  const link = "http://localhost:5000/api/hgroove/v1/";
  const linkPhp = "http://localhost/bd/";

  // const link="https://hgrooveapi.onrender.com/api/hgroove/v1/"
  // const linkPhp="https://hgroove.rf.gd/bd/"
  //home song variables
  const [newAdd, setNewAdd] = useState([]);
  const [mostLiked, setMostLiked] = useState([]);
  const [rapCreole, setRapCreole] = useState([]);

  //dashboard variables
  const [getUserSong, setUserSong] = useState([]);
  const [lenghtUserSong, setLenght] = useState(0);

  /* get all data for Home  */

  //get all song
  const [allSong, setAllSong] = useState([]);
  const getAllSong = async () => {
    await axios
      .get(`${link}all-song`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        setAllSong(response.data);
      })
      .catch((err) => [console.log(err)]);
  };

  //get new add song
  const getNewAdd = async () => {
    await axios
      .get(`${link}newAdd`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        setNewAdd(response.data);
      });
  };

  // get most Liked
  const mostLike = async () => {
    await axios
      .get(`${link}mostLiked`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        setMostLiked(response.data);
      });
  };

  // categori rap creole
  const getRapCreole = async () => {
    await axios
      .get(`${link}rapCreole`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        setRapCreole(response.data);
      });
  };

  //get song by category
  const [categorieSong, setCategorieSong] = useState([]);
  const category = async (categorie) => {
    await axios
      .get(`${link}categorie/${categorie}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        setCategorieSong(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*  get all data Dashboard  */

  //get all user song add , with the token
  const [countLikes, setCountLikes] = useState(0);
  const getAllUserSongAdd = async () => {
    await axios
      .get(`${link}user-all-songs`, {
        headers: {
          Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        setUserSong(response.data.formattedResponse);
        setLenght(response.data.formattedResponse.length);
        setCountLikes(response.data.countLike);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // search page
  const [searchResultSong, setSearchData] = useState([]);
  const [searchResultArtist, setSearchDataArtist] = useState([]);
  const [isLikeSong, setIsLikeSong] = useState(false);
  const search = async (searchData) => {
    await axios
      .get(`${link}search-all/${searchData}`, {
        headers: {
          Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        if (response.data.formattedResponse) {
          setSearchData(response.data.formattedResponse);
        } else if (response.data.artist) {
          setSearchDataArtist(response.data.artist);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DataContext.Provider
      value={{
        getNewAdd,
        mostLike,
        getRapCreole,
        getAllSong,
        category,
        allSong,
        rapCreole,
        mostLiked,
        newAdd,
        categorieSong,

        //search page
        search,
        searchResultSong,
        searchResultArtist,
        isLikeSong,
        setIsLikeSong,
        //dashboard,
        setUserSong,
        getUserSong,
        countLikes,
        lenghtUserSong,
        getAllUserSongAdd,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
