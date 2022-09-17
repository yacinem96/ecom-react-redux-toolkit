import React from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate,Navigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import {Button,Card}  from 'react-bootstrap';
import { addcart } from '../../../redux/reducers/cartReducer';


export const CardOne = ({item}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const token = JSON.parse(localStorage.getItem("user"));
  const notify = () => toast.success("Product added with success 👌",{position: "bottom-right"});

  return (
    <>
   <Card className="mb-2  shadow m-auto" style={{ width: '18rem' }}>
      <Card.Img className="p-3" variant="top" style={{height:"220px"}} src={item.image}/>
      <Card.Body>
        <Card.Title ><p >{item.title}</p></Card.Title>
        
        <Card.Text className="h4 text-success pb-2 ">
        {item.price}$
        </Card.Text>
        <Button variant='success' onClick={()=>{token? dispatch(addcart({...item,qte:1}))& notify(): navigate('/login')}}><i className="fa-solid fa-cart-plus"></i> add to cart</Button>
        <Button className='float-end ' variant='warning'  onClick={()=>navigate(`/details/${item.id}`)} ><i className="fa-solid fa-circle-info"></i> Details</Button>
      </Card.Body>
    </Card>
    </>
  )
}

