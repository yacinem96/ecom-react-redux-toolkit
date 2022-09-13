import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { HomeLayout } from '../components/layouts/home'
import { CardCart } from '../components/utils/cardCart'
import { totalamount } from '../redux/reducers/cartReducer'



export const CartPage = () => {
  const cart = useSelector((state) => state.CartReducer.cart)
  const total = useSelector((state) => state.CartReducer.total)
  const disapatch = useDispatch();
  useEffect(() => {
    disapatch(totalamount())

  }, [cart]);

  return (
    <HomeLayout>
      <Container id='cart' className=''>
        <h1 className="m-5 text-center"><i className="fa-solid fa-cart-shopping"></i> Cart Product</h1>
        <Row>
          {cart.length !== 0 ? cart.map((item) => {

            return (

              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} key={item.id}>
                <CardCart item={item} />

                <p></p>
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
