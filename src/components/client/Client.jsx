import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import img from "../../assets/customer review.jpg"
import tu from "../../assets/tu.jpg"
import img2 from "../../assets/nani.jpg"
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import "./client.css"
import { Container, Row ,Col} from 'react-bootstrap'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='next'>
    <HiArrowSmLeft />
     </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='prev'>
      <HiArrowSmRight />
      </div>
  );
}


 






const Client = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  
    autoplay: true,
    speed:500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  
  };
  return (
  <section id="client">

<Container>

<Row>
<Col lg={7}>
<div className="doc">

<h1 className="gradient-text">My Quality Services</h1>
<h6>Empowering people in new a digital journey with my super services</h6>
</div>

</Col>
<Col lg={5}>
<Slider {...settings}>
<div className="high">
<img src={img} alt="" />
</div>
<div className="high">
  <img src={img2} alt="" />
</div>
<div className="high">
  <img src={tu} alt="" />
</div>



</Slider>
</Col>

</Row>


</Container>

  </section>
  )
}

export default Client