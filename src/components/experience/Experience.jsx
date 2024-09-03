import React, { useState } from 'react';
import "./experience.css"
import { Container,Accordion, Row,Col } from 'react-bootstrap'
const Experience = () => {

 
  return (
    <section id="experience">
  <Container>
<div className="raw">
<h1 className="gradient-text">My Quality Services</h1>
<h6>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h6>
</div>

{/* <div className="high">


<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div> */}

<div className="huk">

<Row>

<Col lg={1}>
<div className="dhur">
    <h4>01</h4>
</div>
</Col>

<Col lg={4}>
<div className="dhur">

<h2>Branding Design</h2>

</div>
</Col>
<Col lg={6}>
<div className="dhur">

<h5>I break down complex user experience problem to create integrify focused solution that connects billions of people</h5>
</div>
</Col>

</Row>
<Row>

<Col lg={1}>
<div className="dhur">
    <h4>02</h4>
</div>
</Col>

<Col lg={4}>
<div className="dhur">

<h2>Branding Design</h2>

</div>
</Col>
<Col lg={6}>
<div className="dhur">

<h5>I break down complex user experience problem to create integrify focused solution that connects billions of people</h5>
</div>
</Col>

</Row>
<Row>

<Col lg={1}>
<div className="dhur">
    <h4>03</h4>
</div>
</Col>

<Col lg={4}>
<div className="dhur">

<h2>Branding Design</h2>

</div>
</Col>
<Col lg={6}>
<div className="dhur">

<h5>I break down complex user experience problem to create integrify focused solution that connects billions of people</h5>
</div>
</Col>

</Row>
<Row>

<Col lg={1}>
<div className="dhur">
    <h4>04</h4>
</div>
</Col>

<Col lg={4}>
<div className="dhur">

<h2>Branding Design</h2>

</div>
</Col>
<Col lg={6}>
<div className="dhur">

<h5>I break down complex user experience problem to create integrify focused solution that connects billions of people</h5>
</div>
</Col>

</Row>

</div>
  </Container>

    </section>
  )
}

export default Experience