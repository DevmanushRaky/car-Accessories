import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
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
import Hoods from "../../assests/hood.webp"
import CarShelter from "../../assests/carshelter.webp"
import BikeShelter from "../../assests/bikeshelter.jpg"
import Button from 'react-bootstrap/Button';

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
            <span className='carousel-text'> VJ SMART CAR & BIKE SHELTER HOOD COMPANY</span>
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
            <span className='carousel-text'> VJ SMART CAR & BIKE SHELTER HOOD COMPANY</span>
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
            <span className='carousel-text'> VJ SMART CAR & BIKE SHELTER HOOD COMPANY</span>
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
            <span className='carousel-text'> VJ SMART CAR & BIKE SHELTER HOOD COMPANY</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className='m-2 p-2'>
        <Container>
          <h4 className='our-product-heading'> Our Products</h4>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Card className='common-card'>
                <Card.Img variant="top" src={Hoods} />
                <Card.Body>
                  <Card.Title> Hood - Soft Top </Card.Title>
                  <Card.Text>
                    Choose from a variety of top hood covers to protect your car's hood like Jeepcy , Thar , Magic (School Van)
                    in style.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>High-quality materials for durability</ListGroup.Item>
                  <ListGroup.Item>Weather-resistant and UV protection</ListGroup.Item>
                  <ListGroup.Item>Easy installation and secure fit</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to="/hood">
                    <Button variant="warning">See full details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <Card className='common-card'>
                <Card.Img variant="top" src={CarShelter} />
                <Card.Body>
                  <Card.Title>Smart Car Shelter</Card.Title>
                  <Card.Text>
                    Keep your car protected and looking pristine with our high-quality car shelter.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Full coverage for maximum protection</ListGroup.Item>
                  <ListGroup.Item>Waterproof and resistant to UV rays</ListGroup.Item>
                  <ListGroup.Item>Soft inner lining to prevent scratches</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to="/carshelter">
                    <Button variant="warning">See full details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <Card className='common-card'>
                <Card.Img variant="top" src={BikeShelter} />
                <Card.Body>
                  <Card.Title> Bike Shelter </Card.Title>
                  <Card.Text>
                    Keep your bike protected and looking pristine with our high-quality bike shelters.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Full coverage for maximum protection</ListGroup.Item>
                  <ListGroup.Item>Waterproof and resistant to UV rays</ListGroup.Item>
                  <ListGroup.Item>Soft inner lining to prevent scratches</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to="/bikeshelter">
                    <Button variant="warning">See full details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <h4 className='our-product-heading'> Customer Reviews </h4>
            <Col xs={12} md={4} lg={4}>
              <Card className='common-card' >
                <Card.Body>
                  <Card.Title> Adarsh Srivastava </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Delhi</Card.Subtitle>
                  <Card.Text>
                    "Absolutely love the website and shop! I recently purchased car top hood covers and car body covers from them, and I couldn't be happier with my purchase. The website is user-friendly and provides all the necessary information about the products.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> Rakesh Yadav </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Lucknow</Card.Subtitle>
                  <Card.Text>
                    The car top hood covers I bought are fantastic. They fit my car perfectly and provide excellent protection against the elements. The covers are made of high-quality materials, and the waterproof feature has proven to be extremely effective during rainy days.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={4} >
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> Abhishek Patel </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Pune</Card.Subtitle>
                  <Card.Text>
                    The car body covers are equally impressive. They provide full coverage for my vehicle and have a soft inner lining that prevents any scratches or damage. I appreciate the durability of these covers, as they have withstood various weather conditions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> Jordi Singh </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Mumbai</Card.Subtitle>
                  <Card.Text>
                    Feel free to customize this review according to your specific product offerings and customer experiences. It's important to highlight the quality of your products, the user-friendly website, prompt delivery, and excellent customer service.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

{/* 
          <div className=' customer-carousel'>
            <h4 className="our-product-heading">Customer Reviews</h4>
            <Carousel>

              <Carousel.Item>
                <Card>
                <Card.Body>
                  <Card.Title> Jordi Singh </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Mumbai</Card.Subtitle>
                  <Card.Text>
                    Feel free to customize this review according to your specific product offerings and customer experiences. It's important to highlight the quality of your products, the user-friendly website, prompt delivery, and excellent customer service.
                  </Card.Text>
                </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card >
                <Card.Body>
                  <Card.Title> Abhishek Patel </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Pune</Card.Subtitle>
                  <Card.Text>
                    The car body covers are equally impressive. They provide full coverage for my vehicle and have a soft inner lining that prevents any scratches or damage. I appreciate the durability of these covers, as they have withstood various weather conditions.
                  </Card.Text>
                </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card >
                <Card.Body>
                  <Card.Title> Rakesh Yadav </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Lucknow</Card.Subtitle>
                  <Card.Text>
                    The car top hood covers I bought are fantastic. They fit my car perfectly and provide excellent protection against the elements. The covers are made of high-quality materials, and the waterproof feature has proven to be extremely effective during rainy days.
                  </Card.Text>
                </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card>
                <Card.Body>
                  <Card.Title> Adarsh Srivastava </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Delhi</Card.Subtitle>
                  <Card.Text>
                    "Absolutely love the website and shop! I recently purchased car top hood covers and car body covers from them, and I couldn't be happier with my purchase. The website is user-friendly and provides all the necessary information about the products.
                  </Card.Text>
                </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div> */}

        </Container>
      </div>

    </>
  </Helmet>
}

export default Home