import * as React from "react";
import { Container, Row } from "react-bootstrap";
import "./Hero.css";
import NavBar from "../LandingComponents/navbar";
import heroimg from "../../assets/sem-hero.svg";
import trophy from "../../assets/trophy.png"

const Hero = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Container className="hero-container" fluid={true}>
        <Row className="hero-row">
          <div className="hero-div">
            <div>
              <h1 className="hero-txt1">
                We are Innovators, Geared towards Energy Efficiency
              </h1>
              <p className="hero-txt2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                pharetra turpis natoque tellus sit velit risus cursus. Dictum
                molestie lorem.
                <span>Sign up to be updated on our activities</span>
              </p>
              <div>
                <input
                  className="hero-input"
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                <button className="hero-btn">Sign up</button>
              </div>
            </div>
            <div className="hero-img">
              <img src={heroimg} alt="" />
            </div>
          </div>
          <hr className="hero-divider" />
          <div className="hero-txt3">
            <p>Winner</p>
            <p><img className="hero-trophy" src={trophy} alt="" />Spirit of Shell Eco Marathon Award 2020</p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
