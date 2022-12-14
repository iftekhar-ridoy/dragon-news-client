import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';
import LeftSideNav from '../NeftSideNav/LeftSideNav';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>Dreagon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>All News</Nav.Link>
                            <Nav.Link >Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item >Action</NavDropdown.Item>
                                <NavDropdown.Item >
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>


                        <Nav>
                            <Navbar>
                                <Link to='/profile' className='d-flex align-items-center'>
                                    {
                                        user?.photoURL ?
                                            <Image
                                                style={{ height: '30px' }} roundedCircle
                                                src={user?.photoURL}
                                            ></Image>
                                            :
                                            <FaUser className='text-black'></FaUser>
                                    }
                                </Link>

                                {
                                    user?.uid ?
                                        <>
                                            <Link to='/profile' className='text-decoration-none text-black fw-semibold ms-2'>{user?.displayName}</Link>
                                            <button onClick={handleLogOut} className='ms-2   rounded-3'>Log Out</button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='mx-2 text-black text-decoration-none'>Login</Link>
                                            <Link to='/register' className='text-black text-decoration-none'>Register</Link>
                                        </>
                                }
                            </Navbar>
                        </Nav>

                        <div className='d-lg-none d-block'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;