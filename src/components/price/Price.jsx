import React from 'react'
import "./price.css"
import { Col, Container,Row } from 'react-bootstrap'
import { GiGraduateCap } from "react-icons/gi";
import { SiLeaderprice } from "react-icons/si";
const Price = () => {
  return (
 <section id="price">
<Container>
<Row>

   
<Col lg={6}>
<Row>
<Col lg={2}>
    <div className="thumb">
        <a href=""><SiLeaderprice /></a>
    </div>
    </Col>


<Col lg={10}>
<div className="educate">
<h1 className="gradient-text">My Education</h1>
</div>


<div className="swipe">
    <h3>2014 - 2018</h3>
    <h2>Professional BBA</h2>
    <h5>NATIONAl University</h5>
</div>
<div className="swife">
    <h3>2012 - 2014</h3>
    <h2>HSC</h2>
    <h5>UDAYAN Higher Secondary College</h5>
</div>

</Col>
</Row>

</Col>
<Col lg={6}>
<Row>
<Col lg={2}>
    <div className="thumb">
        <a href=""><GiGraduateCap /></a>
    </div>
    </Col>


<Col lg={10}>
<div className="educate">
<h1 className="gradient-text">My Experience</h1>
</div>


<div className="swipe">
    <h3>2015 - 2022</h3>
    <h2>Teaching:MATHMATICS</h2>
    <h5>MABS Academic Coaching</h5>
</div>
<div className="swife">
    <h3>2024 - present</h3>
    <h2>FRONTEND DEVELOPER</h2>
    <h5>CREATIVE IT</h5>
</div>

</Col>
</Row>

</Col>


</Row>


</Container>

 </section>
  )
}

export default Price