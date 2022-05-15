import React from "react";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Chill Scene</h2>
              <img src={check} alt="" />
            </div>

            <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthly Listeners</span>
            </p>
          </div>

          <div className="right">
            <a href="#"> Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
}

export { Banner };
