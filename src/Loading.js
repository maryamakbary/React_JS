import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div
      style={{
        backgroundColor: "#1c0119",
        height: "100%",
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "35rem",
      }}
    >
      <span className="loader"></span>
    </div>
  );
}

export default Loading;
