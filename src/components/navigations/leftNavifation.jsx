import "./css/menu.css";
import { FaItunesNote } from "react-icons/fa";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";
import { useDataContext } from "../dataProvider/context";
function Left_Navigation() {
  const pathname = useLocation();
  const { localisation } = useDataContext();

  return (
    <>
      <div
        id="ItemMenu"
        className={localisation(pathname) ? "none" : "active  "}
      >
        <div className="allM">
          <div className={"items_menus"}>
            {/* <h1>Hgroove</h1> */}
            <div id="menuLeft">
              <h2 className="titleM active">Menu</h2>

              <ul id="flexM">
                <Link to={"/"}>
                  <div className="groupe">
                    <div className="left">
                      <HiOutlineHome
                        className={
                          localisation("/") ? " icons titre active" : "icons"
                        }
                      />
                    </div>
                    <div className="right ">
                      <h4
                        className={
                          localisation("/") ? " titre active" : "titre "
                        }
                      >
                        Home
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link to={""}>
                  <div className="groupe">
                    <div className="left">
                      <FaItunesNote
                        className={
                          localisation("/Album")
                            ? " icons titre active"
                            : "icons"
                        }
                      />
                    </div>
                    <div className="right">
                      <h4
                        className={
                          localisation("/Album") ? " titre active" : "titre"
                        }
                      >
                        Album
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link to={"/search"}>
                  <div className="groupe">
                    <div className="left">
                      <HiOutlineUser
                        className={
                          localisation("/search")
                            ? " icons titre active"
                            : "icons"
                        }
                      />
                    </div>
                    <div className="right">
                      <h4
                        className={localisation("/search") && " titre active"}
                      >
                        Search
                      </h4>
                    </div>
                  </div>
                </Link>
              </ul>
            </div>
          </div>

          <div className={"items_menus"}>
            <div id="menuLeft">
              <h2 className="titleM">Library</h2>
              <ul id="flexM">
                <Link to={"/"}>
                  <div className="groupe">
                    <div className="left">
                      <HiOutlineHome
                        className={
                          localisation("/") ? " icons titre " : "icons"
                        }
                      />
                    </div>
                    <div className="right ">
                      <h4 className={localisation("/") && " titre "}>Home</h4>
                    </div>
                  </div>
                </Link>

                <Link to={"/register"}>
                  <div className="groupe">
                    <div className="left">
                      <FaItunesNote
                        className={
                          localisation("/register")
                            ? " icons titre active"
                            : "icons"
                        }
                      />
                    </div>
                    <div className="right">
                      <h4
                        className={localisation("/register") && " titre active"}
                      >
                        Register
                      </h4>
                    </div>
                  </div>
                </Link>

                <Link to={"/profile"}>
                  <div className="groupe">
                    <div className="left">
                      <HiOutlineUser
                        className={
                          localisation("/Genre")
                            ? " icons titre active"
                            : "icons"
                        }
                      />
                    </div>
                    <div className="right">
                      <h4 className={localisation("/Genre") && " titre active"}>
                        Genre
                      </h4>
                    </div>
                  </div>
                </Link>
              </ul>
            </div>
          </div>

          <div className={"items_menus"}>
            <div id="menuLeft">
              <h2 className="titleM">Paramettre</h2>

              <ul id="flexM">
                <Link to={"/Dashboard"}>
                  <div className="groupe">
                    <div className="left">
                      <HiOutlineHome
                        className={
                          localisation("/Dashboard") ? " icons titre " : "icons"
                        }
                      />
                    </div>
                    <div className="right ">
                      <h4 className={localisation("/Dashboard") && " titre "}>
                        Dashboard
                      </h4>
                    </div>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left_Navigation;
