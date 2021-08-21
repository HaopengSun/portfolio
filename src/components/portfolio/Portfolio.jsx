import React, {useState, useEffect} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { reactPortfolio, angularPortfolio, algorithmPortfolio, jQueryAjaxPortfolio } from "../../data"

const Portfolio = function(){

  const [selected, setSelected] = useState("React.JS")
  const [data, setData] = useState([])

  const list = [
    { id: "React", title: "React.JS"},
    { id: "Python", title: "Python+Django"},
    { id: "Angular", title: "Angular"},
    { id: "jQuery+Ajax", title: "jQuery+Ajax"},
  ];

  useEffect(() => {
    switch(selected){
      case "React.JS":
        setData(reactPortfolio);
        break;
      case "Python+Django":
        setData(algorithmPortfolio);
        break;
      case "Angular":
        setData(angularPortfolio);
        break;
      case "jQuery+Ajax":
        setData(jQueryAjaxPortfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((element) => 
          <PortfolioList element={element} selected={selected} setSelected={setSelected}/>
        )}
      </ul>
      <div className="container">
        {data.map(item => {
          const url = item.url
          return (
            <div className="item">
              <img src={item.img} alt={item.title}/>
              <div onClick={()=> window.open(url, "_blank")}>
                <h2>{item.title}</h2>
                <h4>{item.subtitle}</h4>
                <h6>{item.description}</h6>
                <h6>{item.teckStack}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio