import * as React from "react";
import "./Blog.css";
import "../Projects/Projects.css"
import { Container, Row } from "react-bootstrap";
import car1 from "../../assets/autonov1.svg";
import car2 from "../../assets/autonov2.svg";
import polygon from "../../assets/polygon.png"

const Blog = ()=> {
    return (
        <>
        <Container className="project-container" fluid={true}>
            <Row className="project-sec blog-sec">
                <h2 className="project-ttl"><img className="project-ttl-img" src={polygon} alt="" />BLOG</h2>
                <div className="project-list-sec">
                    <div className="blog-list">
                        <img className="blog-content-img" src={car1} alt="" />
                        <div className="project-list-content blog-content">
                            <h3 className="project-list-content-ttl">Importance of Cleaner Energy</h3>
                            <p className="project-list-content-txt blog-list-content-txt">Amet minim mollit non deserunt ullamco est sit alicua dolor</p>
                            <button className="project-list-content-btn">Read more</button>
                        </div>
                    </div>
                    <div className="blog-list">
                        <img className="blog-content-img" src={car2} alt="" />
                        <div className="project-list-content blog-content">
                            <h3 className="project-list-content-ttl">Renewable Energy</h3>
                            <p className="project-list-content-txt blog-list-content-txt">Amet minim mollit non deserunt ullamco est sit alicua dolor</p>
                            <button className="project-list-content-btn">Read more</button>
                        </div>
                    </div>
                    <div className="blog-list">
                        <img className="blog-content-img" src={car2} alt="" />
                        <div className="project-list-content blog-content">
                            <h3 className="project-list-content-ttl">Importance of Cleaner Energy</h3>
                            <p className="project-list-content-txt blog-list-content-txt">Amet minim mollit non deserunt ullamco est sit alicua dolor</p>
                            <button className="project-list-content-btn">Read more</button>
                        </div>
                    </div>
                </div>
                <a className="blog-seeall" href="">See all</a>
            </Row>
        </Container>
        </>
    )
};

export default Blog;