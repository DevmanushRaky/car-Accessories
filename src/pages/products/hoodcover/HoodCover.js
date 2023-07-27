import React from 'react'
import Helmet from '../../../components/helmet/Helmet'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JeepsyHalfHoodProductData from "./HoodProductData/HoodProductJH.json"
import JeepsyFullHoodProductData from "./HoodProductData/HoodProductJF.json"
import TharHoodProductData from "./HoodProductData/HoodProductThar.json"
import TMHoodProductData from "./HoodProductData/HoodProductTM.json"

function HoodCover() {
  return <Helmet title="Hood">
    <>
      <div className='m-3'>
        <Container>
          <h3> Jeepsy Half </h3>
          <Row>
            {JeepsyHalfHoodProductData.map((hood) => (
              <Col key={hood.jeepsyHId} xm={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={hood.images[0]} alt="Hood Image" />
                  <Card.Body>
                    <Card.Title>{hood.name}</Card.Title>
                    <Card.Text>
                      {hood.description}
                    </Card.Text>
                    <Link to={`/hoodproduct/${hood.jeepsyHId}`}>
                      <Button variant="warning">See full details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>


      <div className='m-3'>
        <Container>
          <h3> Jeepsy Full </h3>
          <Row>
            {JeepsyFullHoodProductData.map((hood) => (
              <Col key={hood.jeepsyFId} xm={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={hood.images[0]} alt="Hood Image" />
                  <Card.Body>
                    <Card.Title>{hood.name}</Card.Title>
                    <Card.Text>
                      {hood.description}
                    </Card.Text>
                    <Link to={`/hoodproduct/${hood.jeepsyFId}`}>
                      <Button variant="warning">See full details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>



      <div className='m-3'>
        <Container>
          <h3> CRD Thar </h3>
          <Row>
            {TharHoodProductData.map((hood) => (
              <Col key={hood.crdTharId} xm={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={hood.images[0]} alt="Hood Image" />
                  <Card.Body>
                    <Card.Title>{hood.name}</Card.Title>
                    <Card.Text>
                      {hood.description}
                    </Card.Text>
                    <Link to={`/hoodproduct/${hood.crdTharId}`}>
                      <Button variant="warning">See full details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    
    
      <div className='m-3'>
        <Container>
          <h3> Tata Maruti</h3>
          <Row>
            {TMHoodProductData.map((hood) => (
              <Col key={hood.tataMarutiId} xm={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={hood.images[0]} alt="Hood Image" />
                  <Card.Body>
                    <Card.Title>{hood.name}</Card.Title>
                    <Card.Text>
                      {hood.description}
                    </Card.Text>
                    <Link to={`/hoodproduct/${hood.tataMarutiId}`}>
                      <Button variant="warning">See full details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>





      jeepsy  - Half / full
      black
      light gray
      green
      CRD Thar
      blACK
      TATA Magic
      yellow
      black
      dark gray

      all Hood here
    </>
  </Helmet>
}

export default HoodCover