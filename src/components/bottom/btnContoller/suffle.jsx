import { BsShuffle } from "react-icons/bs";

import { useDataContextSong } from "../../dataProvider/getSong";
import { useEffect } from "react";
import { useDataContext } from "../../dataProvider/context";
function Shuffle() {
  const {
    getSongData,
    onplay,
    audioElement,
    setIsPlaying,
    processAndPlayAudio,
  } = useDataContext();
  const { getAllSong, allSong } = useDataContextSong();
  useEffect(() => {
    getAllSong();
  }, []);
  
  const shuffle = () => {
    const position = Math.floor(Math.random() * allSong.length);

    getSongData(allSong, position);
    onplay();
  };
  return (
    <>
      <BsShuffle className="icons" onClick={shuffle} />
    </>
  );
}

export default Shuffle;
