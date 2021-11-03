import React from "react";
import { Col, Container, Row ,Button} from "react-bootstrap";
import {HiOutlineDocumentDownload} from "react-icons/hi"
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../assets/style/about.css";
function About() {
  return (
    <div>
      <Container className="about-container">
        <Row>
          <Col>
            <div className="about-subject">
              <h1 className="about-title">About Me</h1>
              <p className="about-sub--title">My introduction</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-image-container"></div>
          </Col>
          <Col>
            <Row>
              <p className="about-text">
                I aim to contribute and participate in your company by searching
                for a position to benefit from my experience and to perform and
                expand my capabilities, which will enhance my career, and I am
                committed and hardworking and have a positive attitude towards
                challenges and opportunities.
              </p>
            </Row>
            <Row>
              <Col>
                <span className="about-number">01+</span>
              </Col>
              <Col>
                <span className="about-number">01+</span>
              </Col>
              <Col>
                <span className="about-number">01+</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="about-spcification">Years experience</span>
              </Col>
              <Col>
                <span className="about-spcification">Completed project</span>
              </Col>
              <Col>
                <span className="about-spcification">Completed worked</span>
              </Col>
            </Row>
            <Row>
                <div className="about-cv--btn">
                    <Button>Download CV <span><HiOutlineDocumentDownload/></span></Button>
                </div>
            </Row>
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
    </div>
  );
}

export default About;
