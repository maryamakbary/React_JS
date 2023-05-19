import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import "./Setting.css";

function Setting() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="div-setting">
        <nav className="nav-setting">
          <ul className="ul-setting" style={{ paddingLeft: "0" }}>
            <li
              className="li-setting"
              onClick={() => navigate("/setting/changeProfile")}
            >
              <div className="home-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />{" "}
                </svg>
              </div>
            </li>
            <li
              className="li-setting"
              onClick={() => navigate("/setting/changePassword")}
            >
              <div className="about-icon">
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40 "
                  fill="currentColor"
                  class="bi bi-lock"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
                    fill="white"
                  ></path>{" "}
                </svg>
                {/* <div className="head"> */}
                {/* <div className="eyes"></div> */}

                {/* <div className="beard"></div> */}
                {/* </div> */}
              </div>
            </li>
            <li
              className="li-setting"
              onClick={() => navigate("/setting/uploadAvatar")}
            >
              <div className="work-icon">
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-person-bounding-box"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                    fill="white"
                  ></path>{" "}
                  <path
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    fill="white"
                  ></path>{" "}
                </svg>
                {/* <div className="paper"></div> */}
                {/* <div className="lines"></div> */}
                {/* <div className="lines"></div> */}
                {/* <div className="lines"></div> */}
              </div>
            </li>
            {/* <li>
              <div className="mail-icon">
                <div className="mail-base">
                  <div className="mail-top"></div>
                </div>
              </div>
            </li> */}
          </ul>
        </nav>

        {/* <section>
          <h1>3d rotating navigation</h1>
          <h2>+ CSS Icons</h2>
        </section> */}
      </div>
    </div>
  );
}

export default Setting;
