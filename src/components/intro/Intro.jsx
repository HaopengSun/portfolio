import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
          <img src="assets/man.jpg" alt="icon" />
        </div>
      </div>
      <div className="right">
        <div className="wapper">
          <h2>Hi there, I am</h2>
          <h1>Haopeng Sun</h1>
          <h3>Full-stack <span ref={textRef}></span></h3>
          <div className="links">
            <h3 className="resume" onClick={()=> window.open("https://resume.creddle.io/resume/21k1t4vbt9r", "_blank")}>
              <span><FileCopyIcon className="icon"/></span> Resume
            </h3>
            <h3 className="resume" onClick={()=> window.open("https://github.com/HaopengSun", "_blank")}>
              /<span><GitHubIcon className="icon"/></span> GitHub
            </h3>
            <h3 className="resume" onClick={()=> window.open("https://www.linkedin.com/in/haopeng-sun-ab0a751ba/", "_blank")}>
              /<span><LinkedInIcon className="icon"/></span> LinkedIn
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro