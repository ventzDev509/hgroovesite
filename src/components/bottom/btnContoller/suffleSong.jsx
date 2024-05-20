import { BsFillCaretRightFill, BsFillPauseFill } from "react-icons/bs"; // Importing icons from react-icons/bs library
import { useDataContextSong } from "../../dataProvider/getSong"; // Importing custom hook from getSong module
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useDataContext } from "../../dataProvider/context"; // Importing custom hook from context module
import "./css/index.css"; // Importing CSS file

function ShuffleSong({ id }) {
  // Using custom hooks to access data and functions from context
  const {
    getSongData,
    audioElement,
    setIsPlaying,
    processAndPlayAudio,
    isPlaying,
    codeSong,
    onplay,
  } = useDataContext();

  // Using custom hooks to access data and functions related to song data
  const { getAllSong, allSong } = useDataContextSong();

  // Using state to store the selected song
  const [selectedSong, setSelectedSong] = useState(null);

  // Fetching all songs when the component mounts
  useEffect(() => {
    getAllSong();
    const selectedSong = allSong.find((song) => song.id == id);
    setSelectedSong(selectedSong);
  }, []);

  // Function to handle shuffle action
  const shuffle = () => {
    setIsPlaying(true);
    // Finding the selected song from the list of all songs
    const selectedSong = allSong.find((song) => song.id == id);
    setSelectedSong(selectedSong);

    // Getting the position of the selected song in the list
    const positionInTheList = allSong.indexOf(selectedSong);

    // Updating the song data and playing the audio
    getSongData(allSong, positionInTheList);
    audioElement.current.play();
    onplay();
    setIsPlaying(true);
  };

  // Function to handle pause action
  const pause = () => {
    setIsPlaying(false); // Pausing the playback
    audioElement.current.pause(); // Pausing the audio
  };

  // Rendering the component
  return (
    <>
      {isPlaying && selectedSong && codeSong == selectedSong.id_song ? (
        // Rendering pause icon if the selected song is playing
        <BsFillPauseFill className="icons" id="shuffle" onClick={pause} />
      ) : (
        // Rendering play icon if the selected song is not playing
        <>
          <BsFillCaretRightFill
            className="icons"
            id="shuffle"
            onClick={shuffle}
          />
        </>
      )}
    </>
  );
}

export default ShuffleSong; // Exporting the component
