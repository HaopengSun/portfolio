import React from "react";
import "./Menu.scss";

const Menu = function({active, setActive}){
  return (
    <div className={"menu " + (active && "active")} id="menu">
      <ul>
        <li  onClick={() => setActive(false)}>
          <a href="#intro">intro</a>
        </li>
        <li  onClick={() => setActive(false)}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li  onClick={() => setActive(false)}>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu