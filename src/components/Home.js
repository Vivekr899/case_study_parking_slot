import React from 'react'
import { Card, CardBody, CardFooter, CardText, CardTitle,CardGroup, Col, Row } from 'reactstrap'



function Home() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            
            <img src="https://blog.quickride.in/wp-content/uploads/2020/02/solve-parking-space-problem-850x425.jpg" className="rounded mx-auto d-block" alt="..."/>
        <CardGroup>
  <Card>
    
    <CardBody>
      <CardTitle><b>How Parking Lot Helps?</b></CardTitle>
      <CardText>
      Smart Parking Platform provides a full-stack approach to solving for parking related problems in today's cities. Products based off its platform solves problems of parking lot operators & owners, urban motorists, corporates, city planners and administrators.
      </CardText>
    </CardBody>
    <CardFooter>
      <small className="text-muted"></small>
    </CardFooter>
  </Card>
  <Card>
    
    <CardBody>
      <CardTitle><b>Businesses</b></CardTitle>
      <CardText>
      Increase Revenue<br/>
    More Business Traffic<br/>
    Optimize Employee Traffic   
      </CardText>
    </CardBody>
    <CardFooter>
      <small className="text-muted"></small>
    </CardFooter>
  </Card>
  <Card>
    
    <CardBody>
      <CardTitle><b>Drivers</b></CardTitle>
      <CardText>
      Improve Compliance<br/>
Smart City Tracking<br/>
Increase Turnover
      </CardText>
    </CardBody>
    <CardFooter>
      <small className="text-muted"></small>
    </CardFooter>
  </Card>
</CardGroup>
        </div>
    )
}

export default Home
