import { Button, Card, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removecart ,pluscart,minuscart} from '../../../redux/reducers/cartReducer';


export const CardCart = ({ item }) => {
  const dispatch = useDispatch();
  const notify = () => toast.success("Product removed successfully 👌",{
  theme: "dark",position: "bottom-right"
});
  return (
    <>
      <Card className="mb-2 text-start shadow" >
        <Row className='g-0'>
          <Col md={4}>
            <Card.Img className="p-3" variant="top" style={{ height: "220px" }} src={item.image} />
          </Col>
          <Col>
            <Card.Body className='d-flex flex-column justify-content-around'>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text >
                <h6 className="text-secondary ">Qte: {item.qte}</h6>
                <h4 className="text-success h3 "> {item.price}$</h4>
              </Card.Text>
              <div className='mt-xs-5 mt-sm-3 mt-md-3 mt-lg-0 mt-xl-4 mt-3'>
                <Button variant='outline-danger float-end' onClick={() => {dispatch(removecart(item.id));notify()}} ><i className="fa-solid fa-trash-can"></i> Remove</Button>
                <Button variant="white h1 text-bold text-danger" style={{fontSize:"1.2rem"}} onClick={() => dispatch(minuscart(item))}><i className=" fa-solid fa-minus"></i></Button>
                <span className='h3 p2 '> {item.qte} </span>
                <Button variant=" h1 text-bold text-success" style={{fontSize:"1.2rem"}} onClick={() => dispatch(pluscart(item.id))}><i className="fa-solid fa-plus"></i></Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  )
}

