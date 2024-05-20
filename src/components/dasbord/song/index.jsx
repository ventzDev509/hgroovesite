import "../css/index.css";
import "../css/responsive.css";
import "./css/index.css";
import LeftMenu_Dashboard from "../menu/leftMenu";
import RightItemDashboard from "../menu/rightItem";
import Composant_Artiste_page from "../../Composants/composantArtistepage.jsx";
import { Button } from "@mui/material";
import ListOfSongs from "./composant.jsx";
import { Toaster } from "react-hot-toast";
import DashboardMenu from "../../navigations/dashboardMenu.jsx";
function SongItem() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />

      <div id="Dashbord">
        <div className="all-item-dash">
          <LeftMenu_Dashboard />
          <div className="center-dash">
            <h1>Songs</h1>

            <div className="allSongs">
              <ListOfSongs />
            </div>
          </div>
          <RightItemDashboard />
        </div>
        <DashboardMenu />
      </div>
    </>
  );
}

export default SongItem;
