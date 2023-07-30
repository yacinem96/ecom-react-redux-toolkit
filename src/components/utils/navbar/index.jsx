import React from 'react'
import { NavLink, useNavigate ,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Nav, Navbar, Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from '../../../services/auth.service';
import { navItems } from '../../../data';
import './style.css'

export const Navb = () => {
  const location=useLocation()
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("user"));
  const cart = useSelector((state) => state.CartReducer.cart)
  return (
    <Navbar bg="dark" variant="dark " expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" >E-<span className="bi h4">Sou9</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems && navItems.map((item, i) => {
              return (<Nav.Link key={i} onClick={()=>navigate(`/category${item.path}`)}>{item.text}</Nav.Link>)
            })
            }

            {/* <Nav.Link href="#panier"><i className="fa-solid fa-cart-shopping"></i></Nav.Link> */}
          </Nav>
          <Form className="d-flex ">
            <div className='position-relative'>
              <Nav.Link className='cart' variant="dark  " onClick={() => navigate("/cart")}>
                <i className="fa-solid fa-cart-shopping "></i>
                <span style={{ left: "18%", bottom: "5px" }} className="position-relative  translate-middle badge rounded-pill bg-danger">
                  {token? cart.length : 0}

                </span>
              </Nav.Link>
            </div>

            {token ? <div >

              <NavDropdown className='drop text-white' title={<span>{ JSON.parse(localStorage.getItem("user")).username || "user" } <i className="fa-solid fa-circle-user  "></i></span>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={logoutUser} href="/">Logout</NavDropdown.Item>
                <NavDropdown.Item href="/profile">     Profile   </NavDropdown.Item>

              </NavDropdown>


              {/* <Nav.Link variant="dark " className='text-white ' onClick={logout} href="/"> Logout <i className="fa-solid fa-circle-user  "></i></Nav.Link>  */}
            </div>



              : <Nav.Link onClick={() => navigate("/login")} className='cart position-relative' variant="dark "> Login <i className="fa-solid fa-right-to-bracket"></i></Nav.Link>}

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}