import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AdminCard } from '../../components/utils/adminCard';

const MainDash = () => {
    return (
        <Container fluid className='p-4 text-white '>
            <Row>
                <Col xs={12} sm={6} md={6} lg={6} xl={4}  xxl={3}>
                    <AdminCard variant="success" fwi='fa-sack-dollar' title="Earn (Monthly)" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={4}  xxl={3}>
                    <AdminCard variant="primary" fwi="fa-user-group" title="Users " />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={4}  xxl={3}>
                    <AdminCard variant="info" fwi="fa-cart-shopping" title="Orders" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} xl={4}  xxl={3}>
                    <AdminCard variant="warning" fwi=" fa-boxes-stacked" title="Products" />
                </Col>
             

            </Row>

        </Container>
    )
}
export default MainDash;