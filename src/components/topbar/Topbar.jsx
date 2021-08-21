import React, { useState } from "react";
import "./Topbar.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';
import Menu from "../menu/Menu"
import { Link } from "react-router-dom"

const Topbar = function(){
  const [active, setActive] = useState(false)

  return (
    <div className={"topbar " + (active && "active")}>
      <Menu active={active} setActive={setActive}/>
      <div className="wapper">
        <div className="left">
          <a href="#intro" className="logo">HAOPENG</a>
          <div className="itemcontainer">
            <PermIdentityIcon className="icon"/>
            <span className="phone">514-632-3066</span>
          </div>
          <div className="itemcontainer">
            <EmailIcon className="icon"/>
            <span>
              <a className="email" href="mailto:tester@test.com">SUNHP2016@outlook.com</a>
            </span>
          </div>
          <Link className="about" to="/about">About</Link>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setActive(!active)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar