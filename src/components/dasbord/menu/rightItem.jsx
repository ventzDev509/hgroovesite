import Like from "../../Button/like";
import PlayPause from "../../bottom/btnContoller/Button";
import Back_btn from "../../bottom/btnContoller/back";
import Next_btn from "../../bottom/btnContoller/next";
import Range from "../../bottom/btnContoller/range";
import { useDataContext } from "../../dataProvider/context";
import { useDataContext_user } from "../../dataProvider/user";
import img from "../../../assets/medias/m.png";
import BtnUpdateProfile from "../../user_profile/btn_update";
import Shuffle from "../../bottom/btnContoller/suffle";

function RightItemDashboard() {
  const { cover, title, isLike } = useDataContext();
  const { getUserInfos, user_infos } = useDataContext_user();

  return (
    <>
      <div className="right-dash" id="rightItem">
        {user_infos &&
          user_infos.map((data, index) => (
           <div  key={index}>
              <div className="top-user">
                <div className="left-user-img">
                  <BtnUpdateProfile
                    getUserInfos={getUserInfos}
                    img={data.profile}
                  />
                </div>
                <div className="right-infos">
                  <h3>{data.username}</h3>
                  <h6>{0} Abonnees</h6>
                </div>
              </div>
              <div className="all-item_">
                <div className="list">
                  <div className="right-i">
                    <h5>About You</h5>
                    <br />
                    <small>{data.email}</small>
                    <small>{data.cityBorn}</small>
                    <small>{data.about}</small>
                    <small>{data.dateOfBirth}</small>
                  </div>
                </div>
              </div>
           </div>
          ))}
        <div className="center-d">
          <div className="playing">
            <div className="op"></div>
            <div className="data">
              <img src={cover ? cover : img} alt="" />
              <div className="action">
                <h5>{title ? title : "hgroove"}</h5>
                <Range />
                <div className="btn_">
                  <Shuffle/>
                  <Back_btn />
                  <PlayPause />
                  <Next_btn />
                  <Like isLiked={isLike} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RightItemDashboard;
