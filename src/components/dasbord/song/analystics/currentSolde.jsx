import { useEffect } from "react";
import { useDataContext_user } from "../../../dataProvider/user";
function CurrentSolde() {
  const { user_infos, getUserInfos } = useDataContext_user();
  useEffect(() => {
    getUserInfos();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-head">
          {user_infos &&
            user_infos.map((data, index) => (
              <div key={index}>
                <h2>HT {data.solde}</h2>
              </div>
            ))}
          <span className="las la-shopping-cart"></span>
        </div>
        <div className="card-progress">
          <small>Current Solde</small>
          <div className="card-indicator">
            <div className="indicator three" style={{ width: " 65%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CurrentSolde;
