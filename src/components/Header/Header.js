import React from 'react';
import { Button, Container as div, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Navbar.Brand className="text-dark" href="#home"><h2>Bazaar Shodai</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className="mx-3 text-dark" href="#deets">Home</Nav.Link>
                        <Nav.Link className="mx-3 text-dark" href="#memes">Orders</Nav.Link>
                        <Nav.Link className="mx-3 text-dark" href="#deets">Admin</Nav.Link>
                        <Nav.Link className="mx-3 text-dark" href="#memes">Deals</Nav.Link>
                        <Button variant="danger">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default Header;