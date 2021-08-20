import React from "react";
import "./Menu.scss";

const Menu = function({active, setActive}){
  return (
    <div className={"menu " + (active && "active")} id="menu">
      <ul>
        <li  onClick={() => setActive(false)}>
          <a href="#intro">Intro</a>
        </li>
        <li  onClick={() => setActive(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li  onClick={() => setActive(false)}>
          <a href="#education">Education</a>
        </li>
        <li  onClick={() => setActive(false)}>
          <a href="#work">Work</a>
        </li>
        <li  onClick={() => setActive(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu