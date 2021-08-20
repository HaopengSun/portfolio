import React, {useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";

const Portfolio = function(){

  const [selected, setSelected] = useState("React")

  const list = [
    { id: "React", title: "React"},
    { id: "Python", title: "Python"},
    { id: "Angular", title: "Angular"},
    { id: "jQuery", title: "jQuery"},
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((element) => 
          <PortfolioList element={element} selected={selected} setSelected={setSelected}/>
        )}
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