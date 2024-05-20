import Navbar from "../navigations/BarreNavigate";
import Left_Navigation from "../navigations/leftNavifation";
import "./css/home.css";
import "../navigations/css/menu.css";
import Composant from "../Composants/composant";
import ComposantArtiste from "../Composants/composantArtiste";
import AddNotification from "../notification/notification";
import NewAdd from "./items/newAdd";
import MostLiked from "./items/mostLiked";
import RapCreole from "./items/rapCreole";
import Artist from "../artist/artist";

function Home() {
  return (
    <>
      <div className="flexItemHome">
        <div className="left-main-home">
          <div className="main" id="main">
            <NewAdd />
            <MostLiked  />
           <Artist/>
            <RapCreole />
            <ComposantArtiste title={"Artist you like"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
