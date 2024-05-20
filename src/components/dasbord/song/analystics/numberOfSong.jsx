import { useDataContextSong } from "../../../dataProvider/getSong";
function NumberOfSong() {
  const {lenghtUserSong} = useDataContextSong();
  return (
    <>
      <div className="card">
        <div className="card-head">
          <h2>{lenghtUserSong}</h2>
          <span className="las la-user-friends"></span>
        </div>
        <div className="card-progress">
          <small>Number Of Song Add</small>
          <div className="card-indicator">
            <div className="indicator one" style={{ width: " 60%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NumberOfSong;
