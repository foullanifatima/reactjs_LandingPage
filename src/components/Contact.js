import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css';
import Picture from './commmon/Picture';


export const Contact = () => {
    return (
       <>
       <Container fluid className="py-2 w-100 ">
           <Row className="justify-content-center full-height">
               <Col xs={12} md={6} className="  full-height col-section"> {/*code form*/}
               <form>
                
                    <div class="form-group">
                        <label for="Name">Name</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                   
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                   
                </form>

               </Col>
               <Col xs={12} md={6} className="  full-height justify-content-center center"> {/*add image and center it*/}
                  <Picture imgsrc={imgsrc}  />
               </Col>
               </Row>
              
               </Container>
       </>
    )
}
