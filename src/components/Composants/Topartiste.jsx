import "./css/topArtiste.css";

import { Link } from "react-router-dom";
import img1 from "../../assets/medias/baky.png";
export default function TopArtiste() {
  return (
    <div id="top-artiste">
      <div className="flexS">
        <h2>Top Artsite</h2>
        <small>see all</small>
      </div>

      <div id="flexItem-artiste">
        <div className="item-artiste" >
          <div className="img">
            <Link>
              <img src={img1} alt="" />
            </Link>
          </div>
          <h5>HGroove</h5>
        </div>
      </div>
    </div>
  );
}
