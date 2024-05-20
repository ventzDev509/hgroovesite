import "./css/style.css";
import { Link } from "react-router-dom";
import { Artiste } from "../db.js";
export default function ComposantArtiste({ title ,data}) {
  return (
    <div id="data">
      <div id="newAdd">
        {
          data && <><h3 className="t">{title}</h3></>
        }
        

        <div className="allItems" id="ArtisteSurgestion">
          {data &&
            data.map((artiste) => (
              <div className="items" key={artiste.id}>
                <div className="all">
                  <Link to={`/artist/${artiste.id}`}>
                    <div className="img">
                      <img src={artiste.profile} alt="" />
                    </div>
                  </Link>
                  <div className="bot">
                    <small className="title">{artiste.username}</small>
                    <small className="small">50 Abonnees</small>
                  </div>
                </div>
              </div>
            ))}

          
        </div>
      </div>
    </div>
  );
}
