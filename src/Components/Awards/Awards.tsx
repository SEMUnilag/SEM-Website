import * as React from "react";
import NavBar from "../LandingComponents/navbar";
import Footer from "../LandingComponents/footer";
import "./awards.css";
import logo from "../../assets/award-logo.png";
import "../Home/Team.css";

const Awards = () => {
  return (
    <>
      <NavBar />
      <div className="awards-container">
        <h1 className="awards-hd">AWARDS</h1>
        <div>
          <div className="awards-1">
            <div className="awards-logo">
              <img src={logo} alt="semunilag logo" />
            </div>
            <div className="awards-info">
              <h4 className="awards-ttl">SPIRIT OF SHELL ECO MARATHON</h4>
              <p className="awards-info-hd">Award Description</p>
              <p className="awards-txt">
                The Autonov II was the first ever SEM Unilag vehicle. It
                featured a fibreglass body – cum steel frame configuration.
                Construction for the Autonov II (a prototype battery-electric
                vehicle) began in 2013 and was completed in 2014, after which it
                was entered for Shell Eco-marathon Europe in The Netherlands.
                When completed, the vehicle weighed 96kg and attained a top
                speed of 25km/hr.
                <br />
                The vehicle was painted partly green to champion the Nigerian
                spirit of innovation.
              </p>
            </div>
          </div>
          <div className="awards-descrip">
            <p className="awards-txt">
              Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed
              qui maxime accusantium. Earum numquam numquam.Et voluptas libero
              quos dolorum. Possimus repudiandae mollitia consequuntur
              architecto consequuntur inventore quasi. Repellat voluptatum
              asperiores mollitia ipsam quam voluptatem.
            </p>
            <p className="awards-txt">
              Accusantium voluptatem modi quibusdam consequatur quod ut
              consectetur. Minus quae magnam pariatur voluptatem in sapiente
              tempore totam quam. Laboriosam omnis aut ad aliquam aut et ut
              quia. Itaque quae alias et dolor alias iste. At itaque
              repudiandae.
            </p>
            <p className="awards-txt">
              Accusantium voluptatem modi quibusdam consequatur quod ut
              consectetur. Minus quae magnam pariatur voluptatem in sapiente
              tempore totam quam. Laboriosam omnis aut ad aliquam aut et ut
              quia. Itaque quae alias et dolor alias iste. At itaque
              repudiandae.
            </p>
            <p className="awards-txt">
              Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed
              qui maxime accusantium. Earum numquam numquam.Et voluptas libero
              quos dolorum. Possimus repudiandae mollitia consequuntur
              architecto consequuntur inventore quasi. Repellat voluptatum
              asperiores mollitia ipsam quam voluptatem.
            </p>
            <p className="awards-txt">
              Accusantium voluptatem modi quibusdam consequatur quod ut
              consectetur. Minus quae magnam pariatur voluptatem in sapiente
              tempore totam quam. Laboriosam omnis aut ad aliquam aut et ut
              quia. Itaque quae alias et dolor alias iste. At itaque
              repudiandae.
            </p>
            <p className="awards-txt">
              Accusantium voluptatem modi quibusdam consequatur quod ut
              consectetur. Minus quae magnam pariatur voluptatem in sapiente
              tempore totam quam. Laboriosam omnis aut ad aliquam aut et ut
              quia. Itaque quae alias et dolor alias iste. At itaque
              repudiandae.
            </p>
          </div>
        </div>
        <div className="awards-btn-sec">
          <button className="awards-btn">Check previous award</button>
          <div className="awards-arr">
            <span className="caret caret-dark"></span>
            <span className="caret caret-dark caret-1"></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Awards;
