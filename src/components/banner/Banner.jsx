import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import "./banner.css"
import CountUp from "react-countup";
import img from "../../assets/hulk.jpg"
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

import Typed from 'typed.js';
const Banner = () => {


    const el = React.useRef(null);
    const [count, setCount] = useState(0);

   
 
    
    

    React.useEffect(() => {
        const typed = new Typed(el.current, {
          
          strings: ["Hello! I AM Kazi Aminul Haque", "Welcome to My Website!", "I am A web Developr!"
            
          ],
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 1000,
          startDelay: 500,
          loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);



    

  return (
  <section id="banner">
<Container>

<Row>
<Col lg={6}>
{ <div className="hook">
      <span ref={el} />
    </div> }
<div className="about">
    <h6>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</h6>
</div>



<Row>
<Col lg={6}>
<div className="hui">
  <a href="file:///C:/Users/ADMIN/Downloads/cv%20pdf.pdf">  <button>Download Cv  </button ></a>

   
</div>

</Col>
<Col lg={6}>
<div className="jitu">
    <a href="https://github.com/aminulhoque786"><FaGithub /></a>
    <a href="https://www.facebook.com/profile.php?id=100005348387017"><FaFacebook /></a>
    <a href="mailto:aminulhoque12321@gmail.com"><SiGmail /></a>
    <a href="https://www.linkedin.com/in/kazi-aminul-haque-a519572ab/"><FaLinkedin /></a>
</div>

</Col>

</Row>

</Col>
<Col lg={5}>
<div className="hunk">
    <img src={img} alt="" />
</div>

</Col>


</Row>

<Row>
<Col lg={3}>
        <div className="App">
            <h1>Happy
            Clients in here</h1>
            <div  className='countElement'>
                <CountUp
                    start={0}
                    end={1000}
                    duration={10}
                />
            </div>
        </div>
    

</Col>
<Col lg={3}>
        <div className="App">
            <h1>Years of
            Experience </h1>
            <div className='countElement'>
                <CountUp
                    start={0}
                    end={50}
                    duration={10}
                    
                />
                +
            </div>
        </div>
    

</Col>
<Col lg={3}>
        <div className="App">
            <h1>Project
            Completed</h1>
            <div  className='countElement'>
                <CountUp
                    start={0}
                    end={100}
                    duration={10}
                />
            </div>
        </div>
    

</Col>
<Col lg={3}>
        <div className="App">
            <h1>Years of
            Experience</h1>
            <div  className='countElement'>
                <CountUp
                    start={0}
                    end={14}
                    duration={10}
                />
            </div>
        </div>
    

</Col>


</Row>




</Container>




  </section>
  )
}

export default Banner