import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



function About() {
  return (
    
    <div>
            <Hero backgroundImage="https://i.ibb.co/XWFKKdd/wp2081147.png">
        <h1>Streamline</h1>
        <h2>Find your entertainment..all streamlined</h2>
      </Hero>

      <Container style={{ marginTop: 30 }}>

        {/* {/* <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row> */}
        <Row>
          {/* <Col size="md-12">
            <p>
            </p>
            <p>

            </p>
            <p>

            </p>
          </Col> */}
        </Row> */}
      </Container>
    </div>
  );
}

export default About;
