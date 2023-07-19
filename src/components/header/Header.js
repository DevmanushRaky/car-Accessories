/* eslint-disable no-unused-vars */
import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from "../../assests/CarLogo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { YouTube } from '@mui/icons-material';


function Header() {
    return (
        <>
            <Navbar bg="dark" expand="md" sticky='top' className='shadow-sm'>
                <Container>
                    <Navbar.Brand >
                        <Link to="/" className='d-flex align-items-center'>
                            <img
                                src={LOGO}
                                width="53"
                                height="55"
                                className="d-inline-block align-top "
                                alt="VJ Logo"
                            />
                            <Link className="logoName" to='/'>VJ HOOD COMPANY</Link>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='collaspe-button' />

                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto menu">
                            <NavDropdown className="nav_links " title="Hoods" id="nav-dropdown" noCaret>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/hoods">Jeepsy - Full </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/hoods">Jeepsy - Half </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/hoods">CRD Thar</NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/hoods">TATA Maruti</NavDropdown.Item>
                            </NavDropdown>

                            {/* <Nav.Link className="nav_links" as={Link} to="/hood" > Hoods </Nav.Link> */}
                            <Nav.Link className="nav_links" as={Link} to="/carshelters" > Car Shelters </Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/bikeshelters" > Bike Shelters </Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/about" > About </Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/contact"> Contact </Nav.Link>
                            <ul type="none" className="header-social-links">

                                <li>
                                    <Link to="https://www.facebook.com/" target="_blank"> <FacebookIcon className="socialheaderlink facebooklink" /></Link>
                                </li>
                                <li>
                                    <Link to="https://youtube.com/" target="_blank"><YouTube className="socialheaderlink youtubelink" /> </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank"><InstagramIcon className="socialheaderlink instagramlink" /></Link>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header