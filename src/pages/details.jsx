
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { HomeLayout } from '../components/layouts/home'
import { addcart } from '../redux/reducers/cartReducer'
import useFetch from '../hooks/useFetch'

export const DetailsPage = () => {
    const url = 'http://127.0.0.1:2211/api'
    const notify = () => toast.success("Product added with success 👌", { position: "bottom-right" });
    const token = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [pr, error, loading] = useFetch(url+`/products/${params.id}`)

    return (
        <HomeLayout>
            <Container>

                {loading ?
                    <div className='loading d-flex  vh-100 w-100 text-xxl-center align-items-center justify-content-center'>
                        <Spinner animation="border" role="status" size="xxl">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                    : <Row>
                        <h1 className="p-3">product N° {pr && pr._id}</h1>
                        <Col className=" p-5 " md={6}>
                            <img src={pr && pr.image} width="360px" alt="img" />
                        </Col>

                        <Col className=" align-item-center p-5 " style={{ backgroundColor: "#46494d17" }} md={6}>
                            <h1>{pr && pr.title}</h1>
                            <h5 className="text-muted pb-3 pt-3">Category: <span>{pr && pr.category}</span></h5>
                            <p>{pr && pr.description}</p>
                            <h3> <span className="text-success pb-3 pt-3 ">{pr && pr.price}$</span></h3>
                            <div className="mt-5 ">
                                <Button className="me-3" variant="outline-primary"><i className="fa-solid fa-cart-arrow-down"></i> Buy now</Button>
                                <Button variant="warning" onClick={() => { token ? dispatch(addcart({ ...pr, qte: 1 })) & notify() : navigate("/login") }}><i className="fa-solid fa-cart-plus"></i> Add to cart</Button>
                            </div>

                        </Col>
                    </Row>
                }

                {error && <Navigate to="*" />}

            </Container>
        </HomeLayout>
    )
}
