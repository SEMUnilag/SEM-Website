import * as React from "react";
import "./navbar.css";
import logo from "../../assets/teamlogo.png"

const NavBar = ()=> {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-mobile"></div>
            <div className="navbar-desktop">
                <div>
                    <img src={logo} alt="SEM Unilag logo"/>
                    <span className="sem-logotxt"><span>Team</span><span className="sem-logotxt-2">Unilag</span></span>
                </div>
                <div className="sem-navitems">
                    <span>Home</span>
                    <span>About</span>
                    <span>Projects</span>
                    <span>Partners</span>
                    <span>Blog</span>
                    <button className="sem-navbtn">Member Area</button>
                </div>
            </div>
        </nav>
        </>
    )
};

export default NavBar;