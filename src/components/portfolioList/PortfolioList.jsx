import React from "react";
import "./PortfolioList.scss"

const PortfolioList = function(props){

  return (
    <li 
      className={(props.selected === props.element.title ? "PortfolioList active" : "PortfolioList")}
      onClick={() => props.setSelected(props.element.title)}
    >
      {props.element.title}
    </li>
  )
}

export default PortfolioList