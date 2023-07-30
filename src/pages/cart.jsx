import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button ,Spinner } from 'react-bootstrap'
import { HomeLayout } from '../components/layouts/home'
import { CardCart } from '../components/utils/cardCart'
import { totalamount } from '../redux/reducers/cartReducer'
import useFetch from '../hooks/useFetch'

export const CartPage = () => {
  const url = 'http://127.0.0.1:2211/api'
  const cart = useSelector((state) => state.CartReducer.cart)
  const total = useSelector((state) => state.CartReducer.total)

  const disapatch = useDispatch();
  useEffect(() => {
    disapatch(totalamount())

  }, [cart]);
  // const { userId } = JSON.parse(localStorage.getItem("user"))
  // const [data, error, loading] = useFetch(`${url}/cart/user/${userId}`)
  // console.log(`${url}/cart/user/${userId}`+" data "+data);
  // const { products } = data

  return (
    <HomeLayout>
      <Container id='cart' className=''>
        <h1 className="m-5 text-center"><i className="fa-solid fa-cart-shopping"></i> Cart Product</h1>
        <Row>
          {/* {loading &&
            <div className='loading d-flex  vh-100 w-100 text-xxl-center align-items-center justify-content-center'>
              <Spinner animation="border" role="status" size="xxl">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          } */}
          {cart.length !== 0 ? cart.map((item,index) => {

            return (

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} key={index}>
                <CardCart item={item} productId={item._id} quantity={item.qte} />

                
              </Col>
            )
          })
            : <h3 className='text-center text-warning'>votre panier est vide</h3>}


        </Row>
        <div style={{ backgroundColor: "#cdeacd" }} className=" p-5 mt-3" >
          <h1 className='text-success' >Total Amount : {total}$</h1>
          <div className='d-block'>
            <Button variant='success w-100 p-2 mt-3' >
              <h3>
                <i className="fa-solid fa-wallet"></i> Checkout
              </h3>
            </Button>
          </div>
        </div>
      </Container>
    </HomeLayout>
  )
}
