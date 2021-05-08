import * as React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import box from "../../assets/box.png"

const About = ()=> {
    return (
        <>
        <Container className="about-container" fluid={true}>
                <Row className="about-sec1">
                <h2 className="about-ttl" ><img className="about-img" src={box} alt="" />ABOUT</h2>
                    <p className="about-txt about-txt1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce praesent morbi molestie risus, diam. Posuere tincidunt blandit et porttitor in. Faucibus sollicitudin viverra mauris maecenas et lorem sit dignissim in. Urna nunc tempus et eleifend augue. Fermentum quis porta fringilla tellus mattis pulvinar.

                    </p>
                </Row>
                <Row className="about-mv">
                    <div className="about-mv-sec">
                        <h2 className="about-ttl"><img className="about-img" src={box} alt="" />VISION</h2>
                        <p className="about-txt about-txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce praesent morbi molestie risus, diam. Posuere tincidunt blandit et porttitor in. Faucibus sollicitudin viverra mauris maecenas et lorem sit dignissim in. Urna nunc tempus et eleifend augue. Fermentum quis porta fringilla tellus mattis pulvinar.
</p>
                    </div>
                    <div className="about-mv-sec">
                    <h2 className="about-ttl"><img className="about-img" src={box} alt="" />MISSION</h2>
                        <p className="about-txt about-txt2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce praesent morbi molestie risus, diam. Posuere tincidunt blandit et porttitor in. Faucibus sollicitudin viverra mauris maecenas et lorem sit dignissim in. Urna nunc tempus et eleifend augue. Fermentum quis porta fringilla tellus mattis pulvinar.
</p>
                    </div>
                </Row>
            </Container>
        </>
    )
};

export default About;