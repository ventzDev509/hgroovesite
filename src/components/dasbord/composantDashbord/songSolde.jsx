import "../css/songSolde.css";
import img from "../../../assets/medias/m.png";
import axios from "axios";
import { useDataContext_user } from "../../dataProvider/user";
import { useEffect, useState } from "react";
import { useDataContext } from "../../dataProvider/context";
function Songsolde({ id }) {
  const { link, user_infos } = useDataContext_user();
  const [songSold, setSongsold] = useState([]);
  const { basename, codeSong, getSongData, onplay, isPlaying } =
    useDataContext();
  const play = () => {
    onplay();
  };
  const getSongSold = async () => {
    await axios
      .get(`${link}song-sold`, {
        headers: {
          Authorization: `Baerer ${localStorage.getItem("token_hg")}`,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setSongsold(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSongSold();
  }, []);
  return (
    <>
      <div id="song-solde">
        <h5>Solde</h5>
        {user_infos &&
          user_infos.map((data, index) => (
            <div key={index}>
              <h1>
                {data.solde}
                <strong style={{ color: "var(--primary-100)" }}>HTG</strong>
              </h1>
            </div>
          ))}

        <div className="all-items-solde">
          <div className="left-f">
            {songSold &&
              songSold.map((data, index) => (
                <div className="item-s" key={index}>
                  <div className="i">
                    <div
                      className="left-s"
                      onClick={() => {
                        getSongData(songSold, index);
                      }}
                    >
                      <img
                        src={data.image}
                        alt=""
                        onClick={() => {
                          play();
                        }}
                      />
                    </div>
                    <div className="right-s">
                      <h5>{data.title}</h5>
                    </div>
                  </div>
                  <div className="right-f">
                    <small style={{color:"var(--primary-100)"}}>{data.solde} HTG </small>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Songsolde;
