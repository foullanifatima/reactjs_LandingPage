import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/style.css';
import { Description } from './commmon/Description';
import Picture from './commmon/Picture';

 const Common = ({
     index,
     title,
     description,
     textbutton,
     imgsrc
 }) => {
    const num_index=index;  
    return (
       <>
       { num_index%2 ==0 &&
       <Container fluid className="py-2 w-100 ">
           <Row className="justify-content-center full-height">
               <Col xs={12} md={6} className="  full-height col-section">
                   
                   <Description title={title} 
                    description={description}
                    textbutton={textbutton}
                    color={"button2"}/>

               </Col>
               <Col xs={12} md={6} className="  full-height justify-content-center center">
                    <Picture imgsrc={imgsrc}  />
               </Col>
           </Row>
       </Container>
        }
        { num_index%2!=0 &&
              <Container fluid className=" py-2 w-100">
              <Row className="justify-content-center full-height">
              <Col xs={12} md={6} className="  justify-content-center center">
                  <Picture imgsrc={imgsrc}  />
                  </Col>
                 
                  <Col xs={12} md={6} className=" col-section">
                      <Description title={title} 
                       description={description}
                       textbutton={textbutton}
                       color={"button"}/>
                  </Col>
              </Row>
          </Container>

        }

       </>
    )
}

export default Common;