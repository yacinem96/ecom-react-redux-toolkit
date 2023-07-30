import { Button, Card, Col, Row ,Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removecart, pluscart, minuscart } from '../../../redux/reducers/cartReducer';
import useFetch from '../../../hooks/useFetch';

export const CardCart = ({ item, productId ,quantity }) => {
  const url = 'http://127.0.0.1:2211/api'
  const [data, error, loading] = useFetch(`${url}/products/${productId}`)
  const dispatch = useDispatch();
  const notify = () => toast.success("Product removed successfully 👌", {
    theme: "dark", position: "bottom-right"
  });
  if (loading) {
    return (
      <div className='loading d-flex  vh-100 w-100 text-xxl-center align-items-center justify-content-center'>
        <Spinner animation="border" role="status" size="xxl">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }
  if (data) {
    return (
      
      <>
        <Card className="mb-2 text-start shadow" >
          <Row className='g-0'>
            <Col md={4}>
              <Card.Img className="p-3" variant="top" style={{ height: "220px" }} src={data.image} />
            </Col>
            <Col>
              <Card.Body className='d-flex flex-column justify-content-around'>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text >
                  <span className="text-secondary h6 d-block">Qte: {quantity}</span>
                  <span className="text-success h3 d-block "> {data.price}$</span>
                </Card.Text>
                <div className='mt-xs-5 mt-sm-3 mt-md-3 mt-lg-0 mt-xl-4 mt-3'>
                  <Button variant='outline-danger float-end' onClick={() => { dispatch(removecart(item._id)); notify() }} ><i className="fa-solid fa-trash-can"></i> Remove</Button>
                  <Button variant="white h1 text-bold text-danger" style={{ fontSize: "1.2rem" }} onClick={() => dispatch(minuscart(item))}><i className=" fa-solid fa-minus"></i></Button>
                  <span className='h3 p2 '> {quantity} </span>
                  <Button variant=" h1 text-bold text-success" style={{ fontSize: "1.2rem" }} onClick={() => dispatch(pluscart(item._id))}><i className="fa-solid fa-plus"></i></Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </>
    )
  } 
}

