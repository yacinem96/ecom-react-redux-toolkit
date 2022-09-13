import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { CardOne } from '../../utils/cardOne'
import { Navigate, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import "./style.css"

export const Products = () => {
  const params = useParams();
  const [data, error, loading] = useFetch(`${!params.category ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${params.category}`}`)
  return (

    <>
      <Container id='products'>

        <h1 className="m-5 text-center">Our Products</h1>
        <Row className=''>
          {error && alert("error") & "error"}
          {loading &&
            <div className='vh-100 '>
              <div className='loading h-50 w-100'>
                <Spinner animation="border" role="status" size="xxl">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            </div>
          }


          {data && data.map((item) => {
            return (
              <Col key={item.id}>
                <CardOne item={item} />
              </Col>
            )
          })
            // : <h3 className='text-danger text-center p-3'>Aucun produit</h3>
          }
        </Row>
      </Container>
    </>
  )
}

