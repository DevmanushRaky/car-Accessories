import React from 'react'
import "./Home.css"
import Helmet from '../../components/helmet/Helmet'
import Carousel from 'react-bootstrap/Carousel';
import Car1 from "../../assests/cars1.jpg"
import Car2 from "../../assests/cars2.jpg"
import Car3 from "../../assests/cars3.jpg"
import Car4 from "../../assests/cars4.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
  return <Helmet title={"Home"}>
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Car1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>"Shield Your Vehicle with Quality Covers"</h5>
            <span className='carousel-text'>VJ HOOD COMPANY</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Car2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>"Defend Your Car's Shine with Our Covers."</h5>
            <span className='carousel-text'>VJ HOOD COMPANY</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Car3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>"Weatherproof Your Vehicle with Our Top Hood Covers."</h5>
            <span className='carousel-text'>VJ HOOD COMPANY</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Car4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h5>"Keep Your Car Looking Brand New!"</h5>
            <span className='carousel-text'>VJ HOOD COMPANY</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className='m-2 p-2'>
        <Container>
          <h4 className='our-product-heading'> Our Products</h4>
          <Row>
            <Col>
              <Card >
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Top Hood</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card >
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Body Covers</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <h4> Customer Testonomials </h4>
            <Col>
              <Card >
                <Card.Body>
                  <Card.Title>Customer 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Customer 2</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card >
                <Card.Body>
                  <Card.Title>Customer 3</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>

    </>
  </Helmet>
}

export default Home