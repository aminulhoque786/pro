import React from 'react'
import "./recent.css"
import { Col, Container, Row } from 'react-bootstrap'
import protfo from '../../assets/protfo.webp'
import pro from "../../assets/pro.webp"
import img from "../../assets/do.webp"
import img2 from "../../assets/io.webp"
const Recent = () => {
  return (
    <section id="recent">
<Container>
<div className="time">
<h1 className="gradient-text">My Recent Works</h1>
</div>
<div className="tipe">
    <a href="">All </a>
    <a href="">Apps</a>
    <a href="">Branding</a>
    <a href=""> UX/UI</a>
</div>
<Row>
<Col lg={6}>
<div className="ditch">
    <img src={protfo} alt="" />
    <div className='overlay'><h1 >DELETTOE</h1>
    <h1 >Project was about procession and information</h1>
    
    
    </div>
</div>

</Col>
<Col lg={6} >
<div className="ditch">
    <img src={pro} alt="" />
    <div className='overlay'><h1>NEW Age</h1>
    <h1 >Project was about procession and information</h1>
    
    
    </div>
</div>

</Col>


</Row>

<Row>
<Col  lg={6}>
<div className="sky">

<img src={img} alt="" />
<div className='overlay'><h1 >sebastaion</h1>
    <h1 >Project was about procession and information</h1>
    
    
    </div>
</div>
</Col>
<Col lg={6} >
<div className="sky">

<img src={img2} alt="" />
<div className='overlay'><h1>NEW Age</h1>
    <h1 >Project was about procession and information</h1>
    
    
    </div>
</div>
</Col>


</Row>
</Container>
    </section>
  )
}

export default Recent