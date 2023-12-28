import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import logo1 from "./ott1.jpg";
import logo2 from "./ott2.jpg";
import logo3 from "./ott3.jpg";
import "./About.css";
import Navbar from "../homepage/navbar";
import Footer from "../homepage/footer";
function AppBlog() {
  return (
    <>
      <Navbar />
      <section id="blog" className="block blog-block">
        <Container fluid>
          <Row>
            <Col>
              <div className="grid-container">
                <div className="image-column">
                  <Card>
                    <Card.Img variant="top" src={logo1} />
                  </Card>
                </div>
                <div className="text-column">
                  <Card>
                    <Card.Body>
                      <Card.Title className="card-title">
                        Our Mission
                      </Card.Title>
                      <Card.Text className="card-text">
                        Transforming how you engage with OTT platforms, we aim
                        to centralize your subscription management. Our mission
                        is to empower users to effortlessly discover, subscribe,
                        and manage multiple OTT subscriptions, all from a
                        single, user-friendly hub.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <div className="grid-container">
                <div className="text-column">
                  <Card>
                    <Card.Body>
                      <Card.Title className="card-title">
                        What Sets Us Apart
                      </Card.Title>
                      <Card.Text className="card-text">
                        <b>Centralized Convenience</b>: Access all your subscriptions in one place, streamlining the user experience.<br />
                        <b>Personalized Recommendations</b>: Discover new content tailored to your preferences, enhancing your entertainment choices.<br />
                        <b>Secure Transactions</b>: Your privacy and security are our priorities. Enjoy safe and secure payment processing for all your subscriptions.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="image-column">
                  <Card>
                    <Card.Img variant="top" src={logo2} />
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <div className="grid-container">
                <div className="image-column">
                  <Card>
                    <Card.Img variant="top" src={logo3} />
                  </Card>
                </div>
                <div className="text-column">
                  <Card>
                    <Card.Body>
                      <Card.Title className="card-title">Join Us in Transforming Your OTT Experience!</Card.Title>
                      <Card.Text className="card-text">
                      SubsHub is more than just a subscription management platform; it's a community of entertainment enthusiasts. Join us in redefining how you interact with your favorite streaming services. Let's make managing OTT subscriptions as enjoyable as the content you love!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default AppBlog;
