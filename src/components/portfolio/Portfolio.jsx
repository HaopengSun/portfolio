import React from "react";
import "./Portfolio.scss";

const Portfolio = function(){
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">React</li>
        <li>Django</li>
        <li>Algorithm</li>
        <li>Angular</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/game_page.png" alt="chessU"/>
          <div onClick={()=> window.open("https://github.com/HaopengSun/chessU", "_blank")}>
            <h3>ChessU</h3>
            <h3>(Lighthouse Final Project)</h3>
          </div>
        </div>
        <div className="item">
          <img src="assets/add-appointment.png" alt="Scheduler" />
          <div onClick={()=> window.open("https://github.com/HaopengSun/scheduler", "_blank")}>
            <h3>Scheduler</h3>
            <h3>(Lighthouse Project)</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio