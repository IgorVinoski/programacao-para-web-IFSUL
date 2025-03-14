import { NavLink, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuPublico = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <NavLink exact='true' to="/" className="navbar-brand">React-Router-DOM</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink exact='true' to="/" className="nav-link">Home</NavLink>

                            <NavLink exact='true' to="/login" className="nav-link">Login</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
            <Outlet />
        </>
    )
}


export default MenuPublico;