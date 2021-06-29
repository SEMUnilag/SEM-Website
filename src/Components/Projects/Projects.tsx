import * as React from "react";
import "./projects.css";
import NavBar from "../LandingComponents/navbar";
import Footer from "../LandingComponents/footer"
import "../Awards/awards.css";
import car from "../../assets/car.png";
import design from "../../assets/design.png";
import Others from "../Home/Projects";
import Partners from "../LandingComponents/partners";

const Projects = () => {
    return (
        <>
        <NavBar />
            <div className="projects-container">
            <h1 className="awards-hd">AWARDS</h1>
            <div className="awards-1">
            <div className="projects-img">
              <img src={car} alt="semunilag logo" />
            </div>
            <div className="awards-info">
              <h4 className="awards-ttl">AUTONOV I</h4>
              <p className="awards-info-hd">Project Description</p>
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
          <div className="projects-detail">
              <div className="projects-btn-sec">
                  <button className="projects-btn btn-1">Design</button>
                  <button className="projects-btn btn-1">Final Outcome</button>
              </div>
              <div className="projects-txt">
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
              <div className="projects-design">
                  <img src={design} alt="" />
                  <img src={design} alt="" />
                  <img src={design} alt="" />
              </div>
          </div>
            </div>
            <Others />
            <Partners />
            <Footer />
        </>
    )
}

export default Projects;