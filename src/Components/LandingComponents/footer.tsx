import * as React from "react";
import "./footer.css";
import "./navbar.css";
import logo from "../../assets/teamlogo.png"
import facebook from "../../assets/facebook.png";
import medium from "../../assets/medium.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
    const [state, setState] = React.useState({
        year: new Date().getFullYear(),
    })
    const { year } = state;
    return (
        <>
        <div className="footer-container">
            <span>
                <img className="footer-img" src={logo} alt="SEM Unilag logo"/>
                <span className="sem-logotxt"><span>Team</span><span className="sem-logotxt-2">Unilag</span></span>
            </span>
            <span className="footer-copyright">
                &#169; {year} SEM Unilag
            </span>
            
            <span>Terms</span>
                <span>Privacy</span>
            <span className="footer-socials">
            <i className="fab fa-facebook-f footer-socials-icon"></i>
            <i className="fab fa-medium-m footer-socials-icon"></i>
            <i className="fab fa-linkedin-in footer-socials-icon"></i>
            <i className="fab fa-twitter footer-socials-icon"></i>
                {/* <img src={facebook} alt="" />
                <img src={medium} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" /> */}
            </span>
        </div>
        </>
    )
}
export default Footer;