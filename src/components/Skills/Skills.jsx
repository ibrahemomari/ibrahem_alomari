import React from "react";
import { Col, Container, Row, Tab, Tabs, ProgressBar } from "react-bootstrap";
import "../../assets/style/skills.css";
import { MdKeyboardArrowRight } from "react-icons/md";
function Skills() {
  return (
    <>
      <Container className="skills-container">
        <Row>
          <Col>
            <div className="skills-subject">
              <h1 className="skills-title">Skills</h1>
              <p className="skills-sub--title">My technical level</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="front"
              transition={true}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="front" title="Frontend developer">
                <div className="front-skills-container">
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={50} label={`50%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="back" title="Backend developer">
                <div className="back-skills-container">
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={50} label={`50%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="other" title="Other">
                <div className="other-skills-container">
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={50} label={`50%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                  <div className="skill-item">
                    <div className="skill-title">
                      <h6>HTML</h6>
                    </div>
                    <div className="skill-bar">
                      <ProgressBar now={90} label={`90%`} variant="success" />
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Col>
          <Col xs={1}>
          <div className="home-arrow">
                <div className="arrow1">
                  <MdKeyboardArrowRight />
                </div>
                <div className="arrow2">
                  <MdKeyboardArrowRight />
                </div>
                <div className="arrow3">
                  <MdKeyboardArrowRight />
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skills;
