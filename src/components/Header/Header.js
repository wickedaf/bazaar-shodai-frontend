import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="white">
                <Navbar.Brand className="text-dark" href="/home"><h2>Bazaar Shodai</h2></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Link className="mx-3 text-dark" to="/">Home</Link>
                                <Link className="mx-3 text-dark" to="/orders">Orders</Link>
                                <Link className="mx-3 text-dark" to="/admin">Admin</Link>
                                <Link className="mx-3 text-dark" to="/Deals" disabled>Deals</Link>
                                <Button variant="danger">Login</Button>
                            </Nav>
                    </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default Header;