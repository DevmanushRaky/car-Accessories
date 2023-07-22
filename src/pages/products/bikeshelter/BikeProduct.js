import React from 'react';
import Helmet from '../../../components/helmet/Helmet';
import { Container, Card, Button, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import bikesheltersProduct from './BikeProductData/BikeShelterProduct.json';


function BikeProduct() {
  const { bikeshelterId } = useParams();

  const shelter = bikesheltersProduct.find((shelter) => shelter.bikeshelterId === bikeshelterId);

  if (!shelter) {
    return (
      <Helmet title="Bike Shelter Product">
        <div>Product not found</div>
      </Helmet>
    );
  }

  // Function to handle sharing the product link
  const handleShare = async () => {
    try {
      // Check if the Web Share API is available
      if (navigator.share) {
        // Generate the URL with the product ID
        // const productUrl = `http://localhost:3000/bikeproduct/${bikeshelterId}`; // Replace  with your website domain
        const productUrl = `https://vjhc.netlify.app/bikeproduct/${bikeshelterId}`;
        await navigator.share({
          url: productUrl,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        alert('Web Share API not supported in this browser. You can manually share the product link.');
      }
    } catch (error) {
      console.error('Error sharing the product:', error);
    }
  };

  // Function to copy the product link to clipboard
  const copyLinkToClipboard = () => {
    const productUrl = `https://vjhc.netlify.app/bikeproduct/${bikeshelterId}`;
    navigator.clipboard.writeText(productUrl);
    alert('Product link copied to clipboard!');
  };

  return (
    <Helmet title="Bike Shelter Product">
      <div className='m-3'>
        <Container>
          <Card>
            <Carousel>
              {shelter.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`ShelterImage ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>


            <Card.Body>
              <Card.Title>{shelter.name}</Card.Title>
              <Card.Text>{shelter.description}</Card.Text>
              <Link to="/contact">
                <Button variant="warning">Request to buy</Button>
              </Link>

              <Button variant="secondary" className="ms-2" onClick={handleShare}>
                Share
              </Button>
              {/* <Button variant="secondary" className="ms-2" onClick={copyLinkToClipboard}>
                Copy Link
              </Button> */}

            </Card.Body>
          </Card>
        </Container>
      </div>
    </Helmet>
  );
}

export default BikeProduct;
