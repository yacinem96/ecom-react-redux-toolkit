import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { CardOne } from '../../utils/cardOne'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import "./style.css"

export const Products = () => {
  const url = 'http://127.0.0.1:2211/api'
  const params = useParams();
  const notifyAPI = () => toast.error("ERROR: API not Found ",{theme: "colored"});
  const [data, error, loading] = useFetch(`${!params.category ? url+'/products' : `https://fakestoreapi.com/products/category/${params.category}`}`)
  return (

    <>
      <Container id='products'>

        <h1 className="m-5 text-center">Our Products</h1>
        <Row className=''>
          {error && notifyAPI()}
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
              <Col  key={item._id}>
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

