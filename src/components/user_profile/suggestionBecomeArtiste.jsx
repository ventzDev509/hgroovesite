import { Button } from "@mui/material";
import img from "../../assets/ressouces/undraw_mello_otq1 (1).svg";
import "./css/suggestion.css";
import { Link } from "react-router-dom";
function Suggestion_become_artiste() {
  return (
    <>
      <div id="suggeestion">
        <div className="left">
          <h2>Become an Artist</h2>
          <p>
            Become an artist and share your favorite songs with your friends.
          </p>
          <Link to={"/update-profile"}>
            <Button className="btn">go now</Button>
          </Link>
        </div>
        <div className="right">
          <img className="img" src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Suggestion_become_artiste;
