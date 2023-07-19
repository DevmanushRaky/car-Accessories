import React from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { YouTube } from '@mui/icons-material';
function Footer() {
  return (
    <>
      <div className='footer'>
        <Container className='footer_container'>
          <hr />
          <Row className='footer_links'>

            <Col sm={3}>
              <h4>Hood - Soft top</h4>
              <ul type="none">
                <li>
                  <Link to="/hoods" className='supportLink'> Jeepsy - Full </Link>
                </li>
                <li>
                  <Link to="/hoods" className='supportLink'> Jeepsy - Half </Link>
                </li>
                <li>
                  <Link to="/hoods" className='supportLink'> CRD Thar </Link>
                </li>
                <li>
                  <Link to="/hoods" className='supportLink'> TATA Maruti </Link>
                </li>
              </ul>
            </Col>
            <Col sm={3}>
              <h4>More from Us</h4>
              <ul type="none">
                <li>
                  <Link to="/carshelters" className='supportLink'> Car Shelters </Link>
                </li>
                <li>
                  <Link to="/bikeshelters" className='supportLink'> Bike Shelters </Link>
                </li>
                <li>
                  <Link to="/about" className='supportLink'>About</Link>
                </li>
                <li>
                  <Link to="/faq" className='supportLink' >FAQ</Link>
                </li>
              </ul>
            </Col>

            <Col sm={3}>
              <h4>HELP & CONTACT</h4>
              <ul type="none">
                <li>
                  <Link to="/contact" className='supportLink'><CallIcon />+91 0000000000</Link>
                </li>
                <li>
                  <Link to="/contact" className='supportLink' ><WhatsAppIcon />whatsApp</Link>
                </li>
                <li>
                  <Link to="/contact" className='supportLink'><EmailIcon />Email Us</Link>
                </li>
              </ul>
            </Col>

            <Col sm={3} >
              <div>
                <h4>Follow Us</h4>
                <ul type="none">
                  <li>
                    <Link className='supportLink facebooklink' to="https://www.facebook.com/" target="_blank"> <FacebookIcon className="socialfooterlink" />Facebook </Link>
                  </li>
                  <li>
                    <Link className='supportLink  youtubelink' to="https://youtube.com/" target="_blank"><YouTube className="socialfooterlink" /> YouTube </Link>
                  </li>
                  <li>
                    <Link className='supportLink  instagramlink' to="https://www.instagram.com/" target="_blank"><InstagramIcon className="socialfooterlink" /> Instagram </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer