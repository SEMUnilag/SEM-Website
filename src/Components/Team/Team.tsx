import * as React from "react";
import "./Team.css";
import { Container, Row } from "react-bootstrap";
import polygon from "../../assets/polygon.png";
import avatar from "../../assets/avatar.svg";

const Team = ()=> {
    return (
        <>
        <Container className="team-container" fluid={true}>
            <Row className="team-row">
                <div className="team-head">
                    <h3 className="team-ttl"><img className="team-ttl-img" src={polygon} alt="" />MEET OUR TEAM</h3>
                    <p className="team-frmr" >Former teams <span className="caret"></span></p>
                </div>
                <div className="team-list-sec">
                    <div className="team-list">Administration <span className="caret caret-white"></span></div>
                    <div className="team-list">Communication <span className="caret caret-white"></span></div>
                    <div className="team-list">Design <span className="caret caret-white"></span></div>
                    <div className="team-list">Electrical <span className="caret caret-white"></span></div>
                    <div className="team-list">Fabrication <span className="caret caret-white"></span></div>
                    <div className="team-list">Materials <span className="caret caret-white"></span></div>
                    <div className="team-list">Partnership <span className="caret caret-white"></span></div>
                    <div className="team-list">Quality & Control <span className="caret caret-white"></span></div>

                </div>
                <div className="team-manager">
                    <div className="team-manager-img"><img src={avatar} alt="avatar" /></div>
                    <div className="team-manager-txt">
                        <p className="team-manager-txt1">Fortune Adekogbe</p>
                        <p className="team-manager-txt2">Team Manager</p>
                        <p className="team-manager-txt2">Season 2020/21</p>
                    </div>
                </div>
            </Row>
        </Container>
        </>
    )
};

export default Team;