import { FaItunesNote } from "react-icons/fa";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function LeftMenu_Dashboard() {
  return (
    <>
      <div className="left-dash">
        <Link to={"/"}>
          <HiOutlineHome className="icons" />
        </Link>
        <Link to={"/new-song/song"}>
          <FaItunesNote className="icons" />
        </Link>

        <Link to={"/Dashboard/song"}>
          <HiOutlineUser className="icons" />
        </Link>
        {/* <Button >Deco</Button> */}
      </div>
    </>
  );
}
export default LeftMenu_Dashboard;
