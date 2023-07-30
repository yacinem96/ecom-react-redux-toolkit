import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'

export const AdminNav = ({ open, setOpen }) => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark " expand="lg">
            <Container fluid>
                <Navbar.Brand className=' text-center  '>
                <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        variant="dark"
                        size='lg'
                        className='me-5'
                    >
                        {!open ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"> </i> } 
                        <span className='text-warning ms-2 h4'> Admin Panel</span> 
                    </Button>
                   
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    {/* <Nav.Link as={NavLink} to="/">aaaaaaaaaa</Nav.Link> */}
                    

                    {/* <Nav.Link href="#panier"><i className="fa-solid fa-cart-shopping"></i></Nav.Link> */}
                </Nav>
                <Form className="d-flex ">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 "
                        aria-label="Search"
                    />
                    <Button variant="outline-info" className='me-3 '>Search</Button>
                </Form>
                <NavDropdown className='drop text-white' title={<span>Admin <i className="fa-solid fa-circle-user  "></i></span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                        <NavDropdown.Item href="/profile">     Profile   </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}