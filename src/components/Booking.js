import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import Options from './Options'






function Booking() {
    return (
        <div style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/panoramic-view-urban-underground-car-park-full-parked-autos-basement-garage-interior-markings-signs-columns-reserved-212633668.jpg")` }}> 
             <br/>
            <br/>
            <br/>
           <Container>
               <Row>
                   <Col md={4}>
                    
                    <h2>
                        <Options/>
                    </h2>
                   </Col>
                   <Col md={8}>
                  
                   
                   </Col>
               </Row>
           </Container>
        
   
        </div>
    )
}

export default Booking
