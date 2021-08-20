import "../topbar/Topbar";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "react-router-dom"

const About = function(){
  return (
    <div>
      <div className="wapper">
        <div className="left">
          <a href="/" className="logo">HAOPENG</a>
          <div className="itemcontainer">
            <PermIdentityIcon className="icon"/>
            <span>514-632-3066</span>
          </div>
          <div className="itemcontainer">
            <EmailIcon className="icon"/>
            <span>SUNHP2016@outlook.com</span>
          </div>
          <Link className="about" to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default About