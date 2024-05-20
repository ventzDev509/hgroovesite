import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./css/dash.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function DashboardMenu() {
  const [showNav, setShowNav] = useState(false);
  const showNavItem = () => {
    if (!showNav) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  return (
    <>
      <div
        id="item-menu-dashboard"
        className={showNav ? "showNav active" : "showNav "}
      >
        <div className="top">
          <div></div>
          <CloseOutlinedIcon className="close" onClick={showNavItem} />
        </div>
        <div className="content">
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/profile"}>
            Profile
          </Link>
          <Link to={"/Dashboard/song"} className="link">
            Dashboard
          </Link>
          <Link className="link" to={"/new-song/song"}>
            Add New Song
          </Link>
          <Link className="link">log-out</Link>
        </div>
      </div>
      <div id="dashboardMenue">
        <Button className="itemBtn">
          <WidgetsOutlinedIcon className="iconsM" onClick={showNavItem} />
        </Button>
      </div>
    </>
  );
}
