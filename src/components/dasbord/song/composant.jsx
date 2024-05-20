import { Link } from "react-router-dom";
import "./css/index.css";
import img from "../../../assets/medias/m.png";
import NumberOfSong from "./analystics/numberOfSong";
import NumberOfLike from "./analystics/numberOfLike";
import NumberOfListen from "./analystics/numberOfListen";
import CurrentSolde from "./analystics/currentSolde";
import Search from "./inputSearch/search";
import TableBody from "./table/table";
function ListOfSongs({ display }) {
  return (
    <>
      <div className="page-content">
        <div className={`analytics ${display}`}>
          <NumberOfSong />
          <NumberOfLike />
          <NumberOfListen />
          <CurrentSolde />
        </div>

        <div className="records table-responsive">
          <Search />
          
          <div>
            <TableBody/>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListOfSongs;
