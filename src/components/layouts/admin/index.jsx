import React from 'react'
import { useState } from 'react';
import { Container, Row, Col, Collapse, Fade } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { AdminNav } from '../../utils/adminNav'
import "./style.css"

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  let location= window.location.pathname
  console.log(location);
  
  return (
    <>
      <Container fluid className='content-wraper bg-dark'>
      <AdminNav open={open} setOpen={setOpen} />
        <Row>
          <Collapse in={open} >
            <Col md={2} lg={2} className={`${open ? 'vh-100 ' : ' '}bg-dark text-white pt-3`} id="example-collapse-text">
            {/* <h5 className='pt-3 text-center text-warning '>Admin Panel</h5> */}
              {/* <hr /> */}
              <ul className='ps-3'>
                <h5 >MAIN MENU</h5>

                <li><Link to="main"><i className="fa-solid fa-table-list"></i> DASHBOARD</Link></li>
              </ul>
              <ul className='ps-3'>
                <h5>LIST MENU</h5>

                <li> <Link to="products"><i className="fa-solid fa-boxes-stacked"></i> PRODUCTS </Link>  </li>
                <li> <Link to="users" > <i className="fa-solid fa-users"> </i> USERS </Link></li>
              </ul>

            </Col>
          </Collapse>
          <Col md={open ? 10 : 12} lg={open ? 10 : 12} className="content  border-start">
            
            <Outlet />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default AdminLayout;