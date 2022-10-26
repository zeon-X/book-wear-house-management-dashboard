import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://cdn-icons-png.flaticon.com/512/5545/5545083.png"
        alt=""
      />
      <p className="font-bold" style={{ color: "#8366DD" }}>
        NOT FOUND
      </p>
    </div>
  );
};

export default NotFound;
