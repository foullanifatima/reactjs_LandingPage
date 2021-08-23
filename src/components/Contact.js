import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css';
import Picture from './commmon/Picture';
import imgsrc from '../assets/pictures/Contact.jpg'

export const Contact = () => {
    return (
       <>
       <Container fluid className="py-2 w-100 contact-form">
           <Row className="justify-content-center full-height">
               <Col xs={12} md={6} className="  full-height col-section"> {/*code form*/}
               <h1 className="py-2">Contact Us</h1>
               <form>
                
                    <div className="form-group py-2">
                        <label for="Name">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
                    </div>
                    <div className="form-group py-2">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group py-2">
                        <label for="phoneNumnber py-2">Phone Number</label>
                        <input type="number" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number"/>
                    </div>
                    <div className="form-group py-2">
                        <label for="phoneNumnber py-2">Message</label>
                        <textarea type="text" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your message here"/>
                    </div>
                    <button type="submit" className="btn btn-primary py-2 button2">Contact Us</button>
                   
                </form>

               </Col>
               <Col xs={12} md={6} classNameName="  full-height justify-content-center center"> {/*add image and center it*/}
                  <Picture imgsrc={imgsrc}  />
               </Col>
               </Row>
              
               </Container>
       </>
    )
}
