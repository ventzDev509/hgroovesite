// DataContext.js
import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [responsive_play, setResponsivePlay] = useState(false);
  const audioElement = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [countTime, setCountTime] = useState(0);
  const [userInfo, setUserInfos] = useState();
  // audio playing infos
  const [data, setData] = useState([]);
  const [index, setIndex] = useState();
  const [playingSong, setPlayingSong] = useState("");
  const [codeSong, setCodeSong] = useState("");
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [artiste, setArtiste] = useState("");
  const [isLike, setIsLike] = useState(false);
  const [id, setId] = useState("");
  const link = "http://localhost:5000/api/hgroove/v1/";
  // const link="https://hgrooveapi.onrender.com/api/hgroove/v1/"

  // function basename on the name of the song to get the description
  function basename(path) {
    // Separates the path into segments using the '/'
    const segments = path.split("/");

    // Retrieves the last segment representing the filename
    const filename = segments[segments.length - 1];

    // Separates the filename from its extension
    const parts = filename.split(".mp3");
    const name = parts[0];

    return name;
  }

  const [params,setParams]=useState(0)

  function localisation(location) {
    if (
      location.pathname == "/Login" ||
      location.pathname == "/login" ||
      location.pathname == "/register" ||
      location.pathname == "/Register" ||
      location.pathname == "/dashboard" ||
      location.pathname == "/Dashboard" ||
      location.pathname == "/update-profile" ||
      location.pathname == "/new-song/song" ||
      location.pathname == "/new-song/Song" ||
      location.pathname == "/new-song/cover" ||
      location.pathname == "/new-song/Cover" ||
      location.pathname == "/new-song/details" ||
      location.pathname == "/new-song/Details"||
      location.pathname == "/Dashboard/song" ||
      location.pathname == `/Dashboard/update/${params}` 
    ) {
      return true;
    }
  }

  // Declaration of the getUserInfos function as an asynchronous function
  const userInfos = async () => {
    try {
      const response = await axios.get(`${link}userInfos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hg")}`,
        },
      });
      setUserInfos(response.data[0].id);
    } catch (error) {}
  };

  /* get song click infos cover ,id , name ,song ,artiste ... */

  const getSongData = (newData, index) => {
    setData(newData);
    setIndex(index);
    setPlayingSong(newData[index].url);
    setCodeSong(newData[index].id_song);
    setCover(newData[index].image);
    setTitle(newData[index].title);
    setArtiste(newData[index].username);
    setId(newData[index].id);
    setIsLike(newData[index].isLiked);
       
  };

  /* FIN */

  /* Play Audio  Functions */
  const onplay = () => {
    setIsPlaying(true);
    try {
      const handleCanPlay = () => {
        audioElement.current.removeEventListener("canplay", handleCanPlay);
        audioElement.current.play();
      };
      audioElement.current.addEventListener("canplay", handleCanPlay);
    } catch (error) {}
  };
  const processAndPlayAudio = () => {
    if (!isPlaying) {
      const handleCanPlay = () => {
        audioElement.current.removeEventListener("canplay", handleCanPlay);
        audioElement.current.play();
      };
      audioElement.current.addEventListener("canplay", handleCanPlay);
      audioElement.current.play();
    } else {
      const handleCanPlay = () => {
        audioElement.current.removeEventListener("canplay", handleCanPlay);
        audioElement.current.pause();
      };
      audioElement.current.removeEventListener("canplay", handleCanPlay);
      audioElement.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };
  function onEnded() {
    setIndex(index + 1);
    onplay();
    if (index == data.length - 1) {
      setIndex(0);
      getSongData(data, 0);
    } else {
      getSongData(data, index + 1);
    }
  }
  // get song duration
  const duration = audioElement?.current?.duration;

  // set song time count on playing
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      // song count
      const remaingTime = audioElement?.current?.currentTime;
      setCountTime(remaingTime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  // function format time audio to 00:00
  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  /* end */

  const togglePlayResponsive = () => {
    if (!responsive_play) {
      setResponsivePlay(true);
    } else {
      setResponsivePlay(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        userInfos,
        getSongData,
        togglePlayResponsive,
        setResponsivePlay,
        basename,
        formatTime,
        processAndPlayAudio,
        onplay,
        setCountTime,
        setIndex,
        setIsPlaying,
        onEnded,
        localisation,
        setIsLike,
        setParams,
        isLike,
        data,
        id,
        index,
        codeSong,
        playingSong,
        responsive_play,
        audioElement,
        isPlaying,
        duration,
        countTime,
        cover,
        title,
        artiste,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
