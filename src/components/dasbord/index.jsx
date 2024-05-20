import "./css/index.css";
import "./css/responsive.css";
import { useNavigate } from "react-router-dom";
import CommentsChart from "./composantDashbord/comments";
import ListenChart from "./composantDashbord/listenChart";
import Songsolde from "./composantDashbord/songSolde";
import GetSong from "./composantDashbord/MostListens";
import { useDataContext_user } from "../dataProvider/user";
import { useEffect } from "react";;
import LeftMenu_Dashboard from "./menu/leftMenu";
import RightItemDashboard from "./menu/rightItem";
import DashboardMenu from "../navigations/dashboardMenu";
export default function Dashbord() {
  const navigation = useNavigate();
  /* Render user profile information if available */
  const {user_infos } = useDataContext_user();
  const token = localStorage.getItem("token_hg"); // Getting token from local storage

  useEffect(() => {
    // Redirect to login page if token is not available
    if (token == null) {
      navigation("/Login");
    }
    if (user_infos.length == 1) {
      if (user_infos[0].status == 0 || user_infos[0].status == undefined) {
        navigation("/update-profile");
      }
    }
  }, [token, navigation]); // Dependency array to ensure effect runs only when token or navigation changes

  return (
    <>
      <div id="Dashbord">
        <div className="all-item-dash">
          <LeftMenu_Dashboard />
          <div className="center-dash">
            <h1>Dashbord</h1>
           

            <div className="all-items">
              <div className="flex-top">
                <div className="solde">
                  <Songsolde />
                </div>
                <div className="streams">
                  <div className="top">
                    <div className="left-top-streams">
                      <h5>Most Liked</h5>
                    </div>
                    <div className="right-top-streams">filtre by</div>
                  </div>
                  <CommentsChart />
                </div>
              </div>

              <div className="bottom-dash">
                <div className="left-audiance">
                  <h5>Most commente</h5>
                  <ListenChart />
                </div>
                <div className="right-song">
                  <h5>Top songs</h5>
                  <GetSong />
                </div>
              </div>
              
            </div>
          
          </div>

       <RightItemDashboard/>
        </div>
        <DashboardMenu/>
      </div>
    </>
  );
}
