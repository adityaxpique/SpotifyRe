import React from "react";
import "../styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import artist from "../img/artist.jpg";

function RightMenu() {
  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        <div className="profileImage">
          <img src={artist} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
