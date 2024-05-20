import React, { useEffect, useState } from "react";
import "./css/menu.css";
import { FaItunesNote } from "react-icons/fa";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { BsPersonFillGear } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDataContext } from "../dataProvider/context";
function BottomNavigation() {
  const {localisation}=useDataContext()
  const pathname = useLocation();

  return (
    <>
      <div id="menuBottom" className={localisation(pathname)  ? "none" : ""}>
        <div className="item-menuBottom">
          <div className="itemM">
            <div className="top">
              <Link to="/" className="link">
                <HiOutlineHome className="icons" />
              </Link>
            </div>
            <Link to="/" className="link">
              <div className="bottomM">Home</div>
            </Link>
          </div>
          <div className="itemM">
            <div className="top">
              <Link to="/search" className="link">
                <FaItunesNote className="icons" />
              </Link>
            </div>
            <Link to="/search" className="link">
              <div className="bottomM">search</div>
            </Link>
          </div>
          <div className="itemM">
            <div className="top">
              <Link to="/dasboaard" className="link">
                <HiOutlineUser className="icons" />
              </Link>
            </div>
            <Link to="/dashboard" className="link">
              <div className="bottomM">Moi</div>
            </Link>
          </div>
          <div className="itemM">
            <div className="top">
              <Link to="/dashboard" className="link">
                <BsPersonFillGear className="icons" />
              </Link>
            </div>
            <Link to="/dashboard" className="link">
              <div className="bottomM">Moi</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default BottomNavigation;
