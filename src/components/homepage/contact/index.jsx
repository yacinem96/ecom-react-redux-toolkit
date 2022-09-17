import React from 'react'
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import "./style.css"
function Contact() {
    return (
        <>
            <Container className="container p-5 mb-4">



                <h1 className="  text-bold text-center my-4">Contact us</h1>

                <p className="text-center  mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <Row >


                    <Col className="mb-md-0 mb-5" md={9} >
                        <Form id="contact-form" name="contact-form" method="POST">


                            <Row >


                                <Col md={6}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Your name">
                                        <Form.Control
                                         type="text" 
                                         placeholder="name"
                                         className="mb-3" />
                                    </FloatingLabel>
                                </Col>



                                <Col md={6}>
                                    <FloatingLabel controlId="floatingInputGrid" label="Email address">
                                        <Form.Control
                                         type="email"
                                         placeholder="name@example.com"
                                         className="mb-3" />
                                    </FloatingLabel>
                                </Col>


                            </Row>



                            <Row >
                                <Col md={12}>
                                <FloatingLabel controlId="floatingInputGrid" label="Subject">
                                        <Form.Control
                                         type="text" 
                                         placeholder="subject"
                                         className="mb-3" />
                                    </FloatingLabel>
                                </Col>
                            </Row>



                            <Row >


                                <Col md={12}>

                                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            className="mb-3"
                                        />
                                    </FloatingLabel>

                                </Col>
                            </Row>


                        </Form>

                        <div className="text-center text-md-left d-flex justify-content-end mt-3">
                            <Button variant='warning'  className='btnContact d-block w-75  p-3 col-3' >Submit</Button>
                        </div>
                        <div className="status"></div>
                    </Col>



                    <Col md={3} className="text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Boufarik, Blida 09400, ALGERIA</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+213 656 73 13 16</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>myacinem96@gmail.com</p>
                            </li>
                        </ul>
                    </Col>


                </Row>


            </Container>
        </>
    )
}

export default Contact