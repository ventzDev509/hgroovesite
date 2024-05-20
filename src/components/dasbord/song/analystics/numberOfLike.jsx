import { useDataContextSong } from "../../../dataProvider/getSong";
function NumberOfLike(){
  const {countLikes}=useDataContextSong()
    return<>
    <div className="card">
            <div className="card-head">
              <h2>{countLikes}</h2>
              <span className="las la-eye"></span>
            </div>
            <div className="card-progress">
              <small>Number Of Liked Song</small>
              <div className="card-indicator">
                <div className="indicator two" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
    </>
}
export default NumberOfLike;