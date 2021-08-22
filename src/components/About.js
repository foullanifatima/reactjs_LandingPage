import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css'
import Common from './Common';
import Data from '../data/data';
import { Row,Container,Col } from 'react-bootstrap';
export const About = () => {
    return (
        <>
        <div>
        <Container fluid className="col-12 col-lg-12 h-100 about-container">
           <Row className=" col-12 about-container">
               <Col className="col-12 about-container">
               <h1>About Us</h1>
               </Col>
           </Row>
       </Container>
   {
       

                        Data.map((val, index) => {
                                return <Common 
                                    index={val.index}
                                    title={val.title}
                                    subtitle ={val.subtitle}
                                    description={val.description}
                                    textbutton={val.textbutton}
                                    imgsrc={val.imgsrc}
                                  
                                />
                            }
                        )}
   </div>
        </>
    )
}
