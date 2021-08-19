import React from "react";
import "./Topbar.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';

const Topbar = function(){
  return (
    <div className="topbar">
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
        </div>
        <div className="right">
          <h3>About</h3>
        </div>
      </div>
    </div>
  )
}

export default Topbar