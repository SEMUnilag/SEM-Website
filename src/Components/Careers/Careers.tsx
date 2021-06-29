import * as React from "react";
import NavBar from "../LandingComponents/navbar";
import Footer from "../LandingComponents/footer";
import "./careers.css";
import chat from "../../assets/chat.png";

const Careers = () => {
  return (
    <>
      <NavBar />
      <div className="careers-container">
        <div className="careers-padd">
          <h1 className="careers-hd">AWARDS</h1>
          <p className="careers-txt">
            Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed
            qui maxime accusantium. Earum numquam numquam.Et voluptas libero
            quos dolorum. Possimus repudiandae mollitia consequuntur architecto
            consequuntur inventore quasi. Repellat voluptatum asperiores
            mollitia ipsam quam voluptatem.
          </p>
        </div>
        <div className="careers-team">
          <h6 className="careers-team-hd">Technical Subteams</h6>
          <div className="careers-team-grid careers-team-grid-tech">
            <div className="careers-team-grid-item">
              <p>Design</p>
              <div className="team-details-dark">
                <p>Design</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
            <div className="careers-team-grid-item">
              <p>Electrical</p>
              <div className="team-details-yellow">
                <p>Electrical</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
            <div className="careers-team-grid-item">
              <p>Fabrication</p>
              <div className="team-details-dark">
                <p>Fabrication</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
            <div className="careers-team-grid-item">
              <p>Materials</p>
              <div className="team-details-yellow">
                <p>Materials</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
          </div>
        </div>
        <div className="careers-team">
          <h6 className="careers-team-hd">Non-Technical Subteams</h6>
          <div className="careers-team-grid careers-team-grid-nontech">
            <div className="careers-team-grid-item">
              <p>Administration</p>
              <div className="team-details-yellow">
                <p>Administration</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
            <div className="careers-team-grid-item">
              <p>Communication</p>
              <div className="team-details-dark">
                <p>Communication</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
            <div className="careers-team-grid-item">
              <p>Partnership</p>
              <div className="team-details-yellow">
                <p>Partnership</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
            <div className="careers-team-grid-item">
              <p>Quality and Control</p>
              <div className="team-details-dark">
                <p>Quality and Control</p>
                <p>Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto sed qui maxime accusantium. Earum numquam numquam.Et voluptas libero quos dolorum. Possimus repudiandae mollitia consequuntur architecto consequuntur inventore quasi. </p>
                <button>Apply to this subteam</button>
              </div>
            </div>
          </div>
        </div>
        <div className="careers-padd">
          <div className="careers-issues">
            <div>
              <h6>Having issues choosing the subteam you want?</h6>
              <p>
                Nulla blanditiis ut laudantium aut nisi et. Qui ex architecto
                sed qui maxime accusantium. Earum numquam numquam.Et voluptas
                libero quos dolorum. Possimus repudiandae mollitia consequuntur
                architecto consequuntur inventore quasi. Repellat voluptatum
                asperiores mollitia ipsam quam voluptatem.
              </p>
            </div>
            <div className="chat">
              <img src={chat} alt="chat icon" />
              <p>Chat with Us</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
