import React from 'react'
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../helpers/validation";
import { registerUser } from "../../services/auth.service";
import img from "../../images/register.svg"
import "./style.css"

export const Register = () => {
  const navigate=useNavigate()
  const notify = () => toast.error("incorrect confirmation password")
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(
    { resolver: yupResolver(registerSchema) }
  );

  const onSubmit = (data) => {
    console.log(data);
    //// appel le service
    const { email, password, cpassword } = data;
    if (password === cpassword) {
      registerUser({ email, password }) && setTimeout(() => {
        // navigate("/");
      }, 500);
    } else {
      notify()
    }
  };

  return (
    <div >
      <Container fluid className='bg-dark'>
        <Row>
          <Col md={12} lg={12} xl={6} >
            <div className='register align-self-center pb-5 shadow'>
              <h1 className='text-white text-center pt-5 pb-5'>Sign Up</h1>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div className='d-flex align-items-center '>
                    <div className="icon pe-2"><i className="fa-solid fa-envelope"></i></div>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className='w-100'
                    >

                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        {...register("email")}
                      />
                    </FloatingLabel>
                  </div>
                    <Form.Text className="text-muted">
                      {errors.email && <p className="text-danger mx-5 px-3">{errors.email?.message}</p>}
                    </Form.Text>


                  {/* <Form.Text className="text-muted">
                   <p className="mt-3"> Well never share your email with anyone else.</p>
                  </Form.Text> */}

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className='d-flex align-items-center '>
                    <div className="icon pe-3"><i className="fa-solid fa-lock"></i></div>
                    <FloatingLabel controlId="floatingPassword" label="Password" className='w-100'>
                      <Form.Control

                        type="password"
                        placeholder="Password"
                        {...register("password")}
                      />

                    </FloatingLabel>
                  </div>
                    <Form.Text className="text-muted">
                      {errors.password && <p className="text-danger mx-5 px-3 ">{errors.password?.message}</p>}
                    </Form.Text>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccPassword" >
                  <div className='d-flex align-items-center '>
                    <div className="icon pe-2"><i className="fa-solid fa-key"></i></div>
                    <FloatingLabel controlId="floatingcPassword" label="Confirm your password" className='w-100'>
                      <Form.Control

                        type="password"
                        placeholder="Confirm your password"
                        {...register("cpassword")}
                      />
                    </FloatingLabel>
                  </div>
                    <Form.Text className="text-muted">
                      {errors.cpassword && <p className="text-danger mx-5 px-3">{errors.cpassword?.message}</p>}
                    </Form.Text>

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
