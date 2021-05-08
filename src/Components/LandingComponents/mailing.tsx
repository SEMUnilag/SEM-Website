import * as React from "react";
import "./mailing.css";

const Mailing = () => {
    return (
        <>
        <div className="mailing-container">
            <h4 className="mailing-ttl">Subscribe Now</h4>
            <p className="mailing-txt">Are you an enthusiast in the energy industry?</p>
            <p className="mailing-txt">Want to be updated on our activities?</p>
            <div className="mailing-input">
                <input className="mailing-input-field" type="text" placeholder="First name" />
                <input className="mailing-input-field" type="email" placeholder="Email address" />
                <button className="mailing-input-btn">Sign up</button>
                </div>
        </div>
        </>
    )
};

export default Mailing;