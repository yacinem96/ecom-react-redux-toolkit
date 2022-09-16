import React from 'react'
import { Col, Container, FloatingLabel, Form, Row ,Button} from 'react-bootstrap'
import img from "../../images/register.svg"
import "./style.css"

export const Register = () => {
  return (
    <div >
      <Container fluid className='bg-dark'>
        <Row>
          <Col md={12} lg={12} xl={6} >
            <div className='register align-self-center pb-5 shadow'>
              <h1 className='text-white text-center pt-5 pb-5'>Sign Up</h1>
              <Form  >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className='d-flex align-items-center '>
                    <div className="icon pe-2"><i class="fa-solid fa-envelope"></i></div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className='w-100'

                  >
                    
                    <Form.Control type="email" id='email' placeholder="name@example.com"
                   />
                  </FloatingLabel>
                  </div>
                  

                  {/* <Form.Text className="text-muted">
                   <p className="mt-3"> Well never share your email with anyone else.</p>
                  </Form.Text> */}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className='d-flex align-items-center '>
                    <div className="icon pe-3"><i class="fa-solid fa-lock"></i></div>
                  <FloatingLabel controlId="floatingPassword" label="Password" className='w-100'>
                    <Form.Control id='password' type="password" placeholder="Password"
                      />
                      
                  </FloatingLabel>
                 </div>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                <div className='d-flex align-items-center '>
                    <div className="icon pe-2"><i class="fa-solid fa-key"></i></div>
                  <FloatingLabel controlId="floatingPassword" label="Confirm your password" className='w-100'>
                    <Form.Control id='cPassword' type="password" placeholder="Confirm your password"
                      />
                  </FloatingLabel>
                 </div>

                </Form.Group>
                <Form.Group className="mb-3 text-white p-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="I agree all statements in Terms of service" />
                </Form.Group >
                <div className='d-grid gap-2'>
                  <Button size='lg' style={{ backgroundColor: "rgb(250, 154, 21)", borderRadius: "30px" }} type="submit">
                    Register
                  </Button>
                </div>
                

              </Form>
            </div>
          </Col>


          <Col md={12} lg={12} xl={6} className="p-2 m-auto">
            <img className='imgreg' src={img} alt="img" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
