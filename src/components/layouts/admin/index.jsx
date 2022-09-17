import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link, Outlet } from 'react-router-dom'
import "./style.css"

 const AdminLayout = () => {
  return (
    <>
    <Container fluid className='content-wraper'>
        <Row>
            <Col md={2} lg={2} className="sidebar bg-dark text-white">
              <h3 className='pt-3 text-center text-warning '>Admin Panel</h3>
              <hr/>
              <ul className='ps-3'>
                <h5 >MAIN MENU</h5>
               
                <li><Link to="products"><i class="fa-solid fa-table-list"></i> DASHBOARD</Link></li>
              </ul>
              <ul className='ps-3'>
                <h5>LIST MENU</h5>
                
                <li> <Link to="products"><i className="fa-solid fa-boxes-stacked"></i> PRODUCTS </Link>  </li>
                <li> <Link to="users" > <i className="fa-solid fa-users"> </i> USERS </Link></li>
              </ul>

            </Col>
            <Col md={10} lg={10} className="content">
               <Outlet/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default AdminLayout;