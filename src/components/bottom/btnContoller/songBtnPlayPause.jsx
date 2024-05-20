import { BsFillCaretRightFill, BsFillPauseFill } from "react-icons/bs"; // Importing icons from react-icons/bs library
import { useDataContextSong } from "../../dataProvider/getSong"; // Importing custom hook from getSong module
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useDataContext } from "../../dataProvider/context"; // Importing custom hook from context module
import "./css/index.css"; // Importing CSS file

function BtnSongPlayPause({ id, allSong, index }) {
  // Using custom hooks to access data and functions from context
  const {
    getSongData,
    audioElement,
    setIsPlaying,
    isPlaying,
    codeSong,
    onplay,
  } = useDataContext();

  // Using custom hooks to access data and functions related to song data

  // Using state to store the selected song
  const [selectedSong, setSelectedSong] = useState(null);

  // Function to handle shuffle action
  const shuffle = () => {
    setIsPlaying(true);
    getSongData(allSong, index);
    audioElement.current.play();
    onplay();
  };

  // Function to handle pause action
  const pause = () => {
    setIsPlaying(false); // Pausing the playback
    audioElement.current.pause(); // Pausing the audio
  };

  // Rendering the component
  return (
    <>
      {isPlaying && codeSong == id ? (
        // Rendering pause icon if the selected song is playing
        <BsFillPauseFill className=" play-btn isPlay active" onClick={pause} />
      ) : (
        // Rendering play icon if the selected song is not playing
        <>
          <BsFillCaretRightFill
            className="play-btn  active"
            onClick={shuffle}
          />
        </>
      )}
    </>
  );
}

export default BtnSongPlayPause; // Exporting the component
