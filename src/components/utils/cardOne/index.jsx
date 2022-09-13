import React from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {Button,Card}  from 'react-bootstrap';
import { addcart } from '../../../redux/reducers/cartReducer';


export const CardOne = ({item}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  return (
    <>
   <Card className="mb-2 text-start shadow" style={{ width: '18rem' }}>
      <Card.Img className="p-3" variant="top" style={{height:"220px"}} src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text >
        <h5 className="text-success ">{item.price}$</h5>
        </Card.Text>
        <Button variant='success' onClick={()=>dispatch(addcart({...item,qte:1}))}><i className="fa-solid fa-cart-plus"></i> add to cart</Button>
        <Button className='float-end ' variant='warning'  onClick={()=>navigate(`/details/${item.id}`)} ><i className="fa-solid fa-circle-info"></i> Details</Button>
      </Card.Body>
    </Card>
    </>
  )
}

