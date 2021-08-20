import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped"

const Intro = function(){
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Web Developer', 'Designer'] 
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wapper">
          <h2>Hi there, I am</h2>
          <h1>Haopeng Sun</h1>
          <h3>Full-stack <span ref={textRef}></span></h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro