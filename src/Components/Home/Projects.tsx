import * as React from "react";
import "./Projects.css";
import { Container, Row } from "react-bootstrap";
import car1 from "../../assets/autonov1.svg";
import car2 from "../../assets/autonov2.svg";
import polygon from "../../assets/polygon.png"

const Projects = ()=> {
    return (
        <>
        <Container className="project-container" fluid={true}>
            <Row className="project-sec">
                <h2 className="project-ttl"><img className="project-ttl-img" src={polygon} alt="" />PROJECTS</h2>
                <div className="project-list-sec">
                    <div className="project-list">
                        <img className="project-list-img" src={car1} alt="" />
                        <div className="project-list-content">
                            <h3 className="project-list-content-ttl">AUTONOV I</h3>
                            <p className="project-list-content-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce praesent morbi molestie risus,</p>
                            <button className="project-list-content-btn">Read more</button>
                        </div>
                    </div>
                    <div className="project-list">
                        <img className="project-list-img" src={car2} alt="" />
                        <div className="project-list-content">
                            <h3 className="project-list-content-ttl">AUTONOV II</h3>
                            <p className="project-list-content-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce praesent morbi molestie risus,</p>
                            <button className="project-list-content-btn">Read more</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
        </>
    )
};

export default Projects;