import "../css/bottom.css";
import { BsFillVolumeMuteFill, BsFillVolumeDownFill } from "react-icons/bs";
import { useState } from "react";
import { useDataContext } from "../../dataProvider/context";
function Volume() {
  const [volume, setVolume] = useState(90);
  const { audioElement } = useDataContext();
  if (audioElement.current) {
    audioElement.current.volume = volume / 100;
  }

  return (
    <>
      <div className="right">
        {/* <BsChatDots className="iconsC" /> */}
        <BsFillVolumeDownFill className="iconsV" />
        <input
          type="range"
          name=""
          min={0}
          max={100}
          value={volume}
          id="volume"
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
    </>
  );
}

export default Volume;
