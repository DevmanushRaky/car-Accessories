import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from "../../assests/Logo.jfif"

function Header() {
    return (
        <>
            <Navbar bg="light" expand="md" sticky='top' className='shadow-sm'>
                <Container>
                    <Navbar.Brand >
                        <Link to="/">
                            <img
                                src={LOGO}
                                width="38"
                                height="40"
                                className="d-inline-block align-top "
                                alt="Your Logo"
                            />
                             <Link className="logoName"to='/'>Car Accessories</Link>
                        </Link>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto menu">
                            <NavDropdown className="nav_links" title="Products" id="nav-dropdown" noCaret>
                                <NavDropdown.Header>CATEGORY 1</NavDropdown.Header>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/"> Product 1 </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/"> Product 2 </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/"> Product 3 </NavDropdown.Item>
                                <NavDropdown.Header>CATEGORY 2</NavDropdown.Header>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/"> Product 1 </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/"> Product 2 </NavDropdown.Item>
                                <NavDropdown.Item className="user_nav_links" as={Link} to="/"> Product 3 </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav_links" as={Link} to="/about" > About </Nav.Link>
                            <Nav.Link className="nav_links" as={Link} to="/contact"> Contact </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header