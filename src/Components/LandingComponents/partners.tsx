import * as React from "react";
import "./partners.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import logo5 from "../../assets/logo5.png"


export const Partners = () => {
    return (
        <>
        <div className="partners-container">
            <h5 className="partners-ttl">Our Partners Include:</h5>
            <div className="partners-list">
                <img className="partners-list-logo" src={logo1} alt="" />
                <img className="partners-list-logo" src={logo2} alt="" />
                <img className="partners-list-logo" src={logo3} alt="" />
                <img className="partners-list-logo" src={logo4} alt="" />
                <img className="partners-list-logo" src={logo5} alt="" />
            </div>
        </div>
        </>
    )
};

export default Partners;