import "./css/resultsong.css";
import img from "../../../assets/medias/toby.jpg";
import Like from "../../Button/like";
import { Song } from "../../db.js";
import { useDataContext } from "../../dataProvider/context";
function SongResult() {
    const {processAndPlayAudio}=useDataContext()
    const play=()=>{
        processAndPlayAudio()
    }
  return (
    <>
      <div id="song-result">
        <h4>Songs Found</h4>
        {Song &&
          Song.map((song) => (
            <div className="item-song-result" onClick={play}>
              <div className="left">
                <div>
                  <p className="small">#1</p>
                </div>
                <img src={song.cover} alt="" />
                <div className="infos">
                  <h5>hgroove</h5>
                  <small className="small">hgroove</small>
                </div>
              </div>
              <div className="center">
                <Like />
              </div>

              <div className="rig">
                <p>...</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default SongResult;
