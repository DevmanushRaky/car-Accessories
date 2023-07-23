import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Helmet from '../../../components/helmet/Helmet';
import bikesheltersData from './BikeProductData/BikeShelterProduct.json';


function BikeShelters() {
  return (
    <Helmet title="BikeShelter">
      <>
      <div className='m-3'>
          <Container>
            <Row>
              {bikesheltersData.map((shelter) => (
                <Col key={shelter.bikeshelterId} xm={12} md={4} lg={3}>
                  <Card>
                    <Card.Img variant="top" src={shelter.images[0]} alt="Shelter Image" />
                    <Card.Body>
                      <Card.Title>{shelter.name}</Card.Title>
                      <Card.Text>
                        {shelter.description}
                      </Card.Text>
                      <Link to={`/bikeproduct/${shelter.bikeshelterId}`}>
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
  );
}

export default BikeShelters;
