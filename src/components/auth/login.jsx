import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify'
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import React from 'react'
import { loginUser } from "../../services/auth.service";
import { Button, Col, Container, Row, Form, FloatingLabel } from 'react-bootstrap'
import logImg from "../../images/login.svg"
import "./style.css"
export const Login = ({ login }) => {
    const navigate = useNavigate();
    const notify = () => toast.error("Password or UserID inccorect");
    const notify1 = () => toast.success("Connected successfully");
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        { resolver: yupResolver(loginSchema) }
    );


    const onSubmit = (data) => {
        console.log(data);
        //// appel le service
        const { email, password } = data;
        if (loginUser({ email, password })) {
            notify1()
            navigate("/");
        } else {
            notify()
        }

    };

    return (
        <div className="bg-dark">
            <Container fluid>
                <Row>

                    <Col className='p-5 ' lg={6} md={12} sm={12}>
                        <img src={logImg} height="400" alt="loginImg" />
                    </Col>


                    <Col lg={6} md={12} sm={12} className="p-3 ">

                        <div className='log align-self-center pb-5 shadow'>
                            <h1 className='text-white text-center p-5'>{login} Login</h1>
                            <Form onSubmit={handleSubmit(onSubmit)} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"

                                    >
                                        <Form.Control type="email" placeholder="name@example.com"
                                            {...register("email")} />
                                    </FloatingLabel>

                                    <Form.Text className="text-muted">
                                        {errors.email ? <p className="text-danger">{errors.email?.message}</p> : <p className="mt-3"> Well never share your email with anyone else.</p>}
                                    </Form.Text>

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password"
                                            {...register("password")} />
                                    </FloatingLabel>
                                    <Form.Text className="text-muted">
                                        <p className="text-danger">{errors.password?.message}</p>
                                    </Form.Text>

                                </Form.Group>
                                <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group >
                                <div className='d-grid gap-2'>
                                    <Button size='lg' style={{ backgroundColor: "rgb(250, 154, 21)", borderRadius: "30px" }} type="submit">
                                        Login
                                    </Button>
                                </div>
                                <div className="reg">
                                    <p  onClick={() => navigate("/register") }>create a new account</p>
                                </div>

                            </Form>
                        </div>

                    </Col>
                </Row>
            </Container>
   
        </div>
    )
}
