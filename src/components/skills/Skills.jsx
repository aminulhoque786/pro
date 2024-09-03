import React from 'react'
import "./skills.css"
import { Col, Container, Row } from 'react-bootstrap'
import figma from "../../assets/figma.webp"
import skt from "../../assets/sketch.webp"
import xs from "../../assets/xd.webp"
import wp from "../../assets/wp.webp"
import rc from "../../assets/react.webp"
import jv from "../../assets/js.webp"
const Skills = () => {
  return (
    <section id="skill">
<Container>
<div className="jugu">
<h1 className="gradient-text">My skills</h1>
<h5>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</h5>
</div>
<div className="skilling">
<Row>

<Col lg={2}>
<div className="trust">

<img src={figma} alt="" />
<h3>92%</h3>
</div>
<div className="wal">

<h2>FIGMA</h2>
</div>

</Col>
<Col lg={2}>
<div className="trust">

<img src={skt} alt="" />
<h4>80%</h4>
</div>
<div className="wal">
  
<h2>SKETCH</h2>
</div>

</Col>
<Col lg={2}>
<div className="trust">

<img src={xs} alt="" />
<h4>85%</h4>
</div>
<div className="wal">
<h2>XD</h2>
  
</div>

</Col>
<Col lg={2}>
<div className="trust">

<img src={wp} alt="" />
<h4>99%</h4>
</div>
<div className="wal">
<h2>WORD PRESS</h2>
  
</div>

</Col>
<Col lg={2}>
<div className="trust">

<img src={rc} alt="" />
<h4>89%</h4>
</div>
<div className="wal">
  
<h2>REACT</h2>
</div>

</Col>
<Col lg={2}>
<div className="trust">

<img src={jv} alt="" />
<h4>93%</h4>

</div>
<div className="wal">
<h2>JAVA SCRIPT</h2>
  
</div>
</Col>

</Row>


</div>


</Container>

    </section>
  )
}

export default Skills