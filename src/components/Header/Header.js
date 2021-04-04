import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';


const Header = () => {
    const {userInfo, cartInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    const [ cart, setCart ] = cartInfo;
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="white">
                <Navbar.Brand className="text-dark"><Link className="text-link" to="/"><h2>Bazaar Shodai</h2></Link></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Link className="mx-3 my-2 text-dark text-link" to="/">Home</Link>
                                <Link className="mx-3 my-2 text-dark text-link" to="/orders">Orders</Link>
                                <Link className="mx-3 my-2 text-dark text-link" to="/admin">Admin</Link>
                                <Link className="mx-3 my-2 text-dark text-link" to="/" disabled>Deals</Link>
                                <div>
                                {
                                    loggedInUser.isSignedIn 
                                    ? <button type="button" className="btn btn-outline-dark my-1">{loggedInUser.name}</button> 
                                    : <Button className="rounded-lg" variant="danger"><Link className="text-link" to="/login">Login</Link></Button>
                                }
                                </div>
                            </Nav>
                    </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default Header;