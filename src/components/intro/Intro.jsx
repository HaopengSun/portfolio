import React from "react";
import "./Intro.scss";

const Intro = function(){
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Intro