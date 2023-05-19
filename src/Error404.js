import React from "react";
import "./Error404.css";
import Navbar from "./Navbar";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="er404">
        <div className="error404">
          <div id="oopss">
            <div id="error-text">
              <img
                className="img"
                src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                alt="404"
              />
              <span className="spanError">404 PAGE</span>
              <p className="p-a">
                . The page you were looking for could not be found or you are
                not login
              </p>
              <p className="p-b">... Back to previous page</p>
              {/* <a href="#" className="back">
                ... Back to previous page
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
