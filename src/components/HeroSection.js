import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css'
import {Col,Container,Button,Row} from 'react-bootstrap'
import imgsrc from '../assets/pictures/study_header.jpg'

const HeroSection=()=>{
  return(
    
     
    <Container fluid className=" full-height w-100 py-2 hero">
           <Row className="justify-content-center">
               <Col xs={12} md={5} className=" full-height col-section">
                   <h4 className=" py-2"  >Hard Work Beats</h4>
                   <hr class="solid col-3 "></hr>
                   <h1 className=" py-2">STUDY WITH US</h1>
                   
                   <p className=" py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum libero, sollicitudin vel eleifend id, feugiat ac ante. Vestibulum molestie, magna eu ornare ornare, augue urna dictum ipsum quis faucibus elit lacus a mauris.</p>
                   <Button className="py-2 button" > Contact Us</Button>

               </Col>
               <Col xs={12} md={7} className="justify-content-center center">
                    <img src={imgsrc}  className="col-section-image img-fluid" alt="Logo" />
               </Col>
           </Row>
       </Container>
          
     
  );
}

export default HeroSection;