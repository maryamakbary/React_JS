import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, token } = useSelector((state) => state.info);
  const basket = useSelector((state) => state.basket);

  return (
    <div>
      <nav className="menu">
        <ol className="ol-menu" style={{ marginLeft: "20px" }}>
          <li
            className="menu-item"
            style={{ marginRight: "47rem" }}
            onClick={() => navigate("/")}
          >
            <a
              className="a-menu"
              href="#0"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Home
            </a>
          </li>

          <li
            className="menu-item"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <a className="a-menu" href="#0" style={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 svgNavbar"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {basket.length ? (
                <span className="circlebasket">
                  {basket.reduce((count, item) => count + item.qty, 0)}
                </span>
              ) : (
                ""
              )}
            </a>
          </li>
          {/* style={{ marginLeft: "7rem" }} */}
          {token ? (
            <li className="menu-item">
              <a
                className="a-menu"
                href="#0"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                {username}
              </a>
              <ol className="sub-menu ol-menu">
                <li className="menu-item" onClick={() => navigate("/profile")}>
                  <a className="a-menu" href="#0">
                    profile
                  </a>
                </li>
                <li className="menu-item" onClick={() => navigate("/Orders")}>
                  <a className="a-menu" href="#0">
                    order
                  </a>
                </li>
                <li
                  className="menu-item"
                  onClick={() => navigate("/setting/changeProfile")}
                >
                  <a className="a-menu" href="#0">
                    setting
                  </a>
                </li>
                <li
                  className="menu-item"
                  onClick={() => dispatch({ type: "logOut" })}
                >
                  <a className="a-menu" href="#0">
                    log out
                  </a>
                </li>
              </ol>
            </li>
          ) : (
            <li className="menu-item" onClick={() => navigate("/login")}>
              <a className="a-menu" href="#0">
                logIn / signUp
              </a>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
