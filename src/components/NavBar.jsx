import React from "react";
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router'

const NavBar = () => {
    return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">J-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/beauty">Belleza</Nav.Link>
                        <Nav.Link as={Link} to="/category/fragrances">Perfumes</Nav.Link>
                        <Nav.Link as={Link} to="/category/groceries">Comida</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
    );
};

export default NavBar;
