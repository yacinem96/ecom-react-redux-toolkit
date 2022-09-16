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
                    <Col md={12} lg={6} className="p-lg-5 p-md-5  p-sm-3 p-5 ">
                        <h1 className=" ">{heroInfo[0].title}</h1>
                        <p>{heroInfo[0].description}</p>
                       <Button href='#products' style={{backgroundColor:"rgb(250, 154, 21)"}}>Visit product</Button>
                        
                    </Col>
                    <Col  md={12} lg={6} className="p-lg-5 p-md-5  p-sm-3" >
                        <img className='imghero m-auto d-block' src={img1} alt="img" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
