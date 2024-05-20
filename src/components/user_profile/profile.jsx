import "./css/style.css";
import user from "../../assets/ressouces/icons8-user-profile-64.png";
import Log_out from "./log_out";
import Img_profile from "./img_profile";
import { useDataContext_user } from "../dataProvider/user";
import BtnUpdateProfile from "./btn_update";
function Profile() {
  /* Render user profile information if available */
  const { getUserInfos, user_infos } = useDataContext_user();

  return (
    <>
      {user_infos &&
        user_infos.map((data, index) => (
          <div id="user-profile" key={index}>
            <div className="item">
              <div className="leftItem">
                {/* Link to update profile picture */}
                
                  <BtnUpdateProfile getUserInfos={getUserInfos} img={data.profile}/>
               
              </div>
              <div className="rightItem">
                <h1 style={{ textTransform: "capitalize" }}>{data.username}</h1>
                <small className="small">{data.email}</small>{" "}
                {/* Display user email */}
                <p className="p">become an artist</p>
                <Log_out /> {/* Log out component */}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Profile;
