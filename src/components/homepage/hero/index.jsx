import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { heroInfo } from '../../../data'
import img1 from '../../../images/webshop.svg'
import "./style.css"
export const Hero = () => {
    return (
        <div className="bg-dark text-start text-white ">
           
            <Container  >
                <Row >
                    <Col md={12} lg={6} className=" p-5 ">
                        <h1 className=" ">{heroInfo[0].title}</h1>
                        <p>{heroInfo[0].description}</p>
                       <Button href='#products' style={{backgroundColor:"rgb(250, 154, 21)"}}>Visit product</Button>
                        
                    </Col>
                    <Col lg={6} md={12} className="p-5" >
                        <img src={img1} alt="img" width="530px"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
