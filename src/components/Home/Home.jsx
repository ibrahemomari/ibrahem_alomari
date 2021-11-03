import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/style/home.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
function Home() {
  return (
    <>
      <section className="home-section section">
        <Container>
          <Row>
            <Col xs={4} className="home-left--side">
              <div className="image-container">
                <div class="scene">
                  <div class="banner">
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                    <div class="panel"></div>
                  </div>
                  <div class="screen"></div>
                </div>
              </div>
            </Col>
            <Col className="home-middle--side" xs={2}>
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
            <Col className="home-right--side" xs={5}>
              <Col>
                <div className="home-icons">
                    <FaLinkedin/>
                    <FaGithubSquare/>
                </div>
                <div className="home-title">
                  <h1>Hi,I'am Ibrahem</h1>
                </div>
                <div className="home-sub--title">
                  Skilled web developer, The ability to communicate between
                  people and extensive knowledge in the field of information
                  technology, especially in the field of web applications, and I
                  never reply with a rejection.
                </div>
                <a className="home-btn btn btn-primary">COUNTACT ME</a>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
