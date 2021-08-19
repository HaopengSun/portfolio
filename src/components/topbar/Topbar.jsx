import React, { useState } from "react";
import "./Topbar.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';

const Topbar = function(){
  const [active, setActive] = useState(false)

  return (
    <div className={"topbar " + (active && "active")}>
      <div className="wapper">
        <div className="left">
          <a href="#intro" className="logo">HAOPENG</a>
          <div className="itemcontainer">
            <PermIdentityIcon className="icon"/>
            <span>514-632-3066</span>
          </div>
          <div className="itemcontainer">
            <EmailIcon className="icon"/>
            <span>SUNHP2016@outlook.com</span>
          </div>
          <h3 className="about">About</h3>
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