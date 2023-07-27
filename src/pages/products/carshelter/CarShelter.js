import React from 'react'
import Helmet from '../../../components/helmet/Helmet'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CarSheltersData from './CarProductData/CarShelterProduct.json';

function CarShelter() {
    return <Helmet title="CarShelter">
        <>
        <div className='m-3'>
          <Container>
            <Row>
              {CarSheltersData.map((shelter) => (
                <Col key={shelter.carshelterId} xm={12} md={4} lg={3}>
                  <Card>
                    <Card.Img variant="top" src={shelter.images[0]} alt="Shelter Image" />
                    <Card.Body>
                      <Card.Title>{shelter.name}</Card.Title>
                      <Card.Text>
                        {shelter.description}
                      </Card.Text>
                      <Link to={`/carproduct/${shelter.carshelterId}`}>
                        <Button variant="warning">See full details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        </>
    </Helmet>
}

export default CarShelter