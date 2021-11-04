import React from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "../../assets/style/qualification.css";
function Qualification() {
  return (
    <div>
      <Container className="qualification-container">
        <Row>
          <Col>
            <div className="qualification-subject">
              <h1 className="qualification-title">Qualification</h1>
              <p className="qualification-sub--title">My personal journey</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="education"
              transition={true}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab eventKey="education" title="Education">
                <Container>
                  <Row className="qualification-card">
                    <Col>
                    <div>
                      <div class="card">
                        <div class="img-container">
                          <img
                            src="http://santoshg.com/codepen/iron_man.jpg"
                            alt=""
                          />
                        </div>
                        <div class="card-details">
                          <h2>Iron Man</h2>
                          <p>
                            Iron Man is a fictional superhero appearing in
                            American comic books published by Marvel Comics. The
                            character was co-created by writer and editor Stan
                            Lee, developed by scripter Larry Lieber, and
                            designed by artists Don Heck and Jack Kirby.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    </Col>
                    <Col>
                    <div>
                      <div class="card">
                        <div class="img-container">
                          <img
                            src="http://santoshg.com/codepen/iron_man.jpg"
                            alt=""
                          />
                        </div>
                        <div class="card-details">
                          <h2>Iron Man</h2>
                          <p>
                            Iron Man is a fictional superhero appearing in
                            American comic books published by Marvel Comics. The
                            character was co-created by writer and editor Stan
                            Lee, developed by scripter Larry Lieber, and
                            designed by artists Don Heck and Jack Kirby.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    </Col>
                    <Col>
                    <div>
                      <div class="card">
                        <div class="img-container">
                          <img
                            src="http://santoshg.com/codepen/iron_man.jpg"
                            alt=""
                          />
                        </div>
                        <div class="card-details">
                          <h2>Iron Man</h2>
                          <p>
                            Iron Man is a fictional superhero appearing in
                            American comic books published by Marvel Comics. The
                            character was co-created by writer and editor Stan
                            Lee, developed by scripter Larry Lieber, and
                            designed by artists Don Heck and Jack Kirby.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    </Col>
                  </Row>
                </Container>
              </Tab>
              <Tab eventKey="work" title="Work">
                fdsafd
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Qualification;
