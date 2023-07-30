import React from 'react'
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';
import { Line, Pie, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend, CategoryScale, LinearScale, BarElement, } from "chart.js";
const AdminProducts = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  ChartJS.register(ArcElement, Tooltip, Legend);
  // const chartData = {
  //   labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
  //   datasets: [
  //     {
  //       label: 'Ventes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       fill: false,
  //       borderColor: 'rgba(75,192,192,1)',
  //     },
  //   ],
  // };
  const chartData = {
    labels: ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E'],
    datasets: [
      {
        label: 'Ventes',
        data: [120, 210, 180, 90, 300],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Ventes mensuelles',
      fontSize: 18,
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
    <Container className='p-3'>
      <Row>
        <Col md={4}>
          <Card className='m-auto shadow'>
            <Card.Header className='h3'><i className="fa-solid fa-square-poll-vertical"></i> Product Graph</Card.Header>
            <Doughnut data={chartData} options={chartOptions} />
          </Card>
        </Col>
        <Col md={8} >
          <Card className="shadow m-auto">
            <Card.Header className='h3 '><i className="fa-solid fa-gifts"></i> ADD Product</Card.Header>
            <Form className=" p-3" >
              <Row>
                <Col md={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><i className="fa-solid fa-font"></i> Title </Form.Label>
                    <Form.Control type="text" placeholder="Smartphone .." />
                  </Form.Group>
                </Col>
                <Col md={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><i className="fa-solid fa-dollar-sign"></i> Price </Form.Label>
                    <Form.Control type="text" placeholder="200.00" />
                  </Form.Group>
                </Col>
                <Col md={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label><i className="fa-solid fa-list"></i> Category </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option disabled >Select the category</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
               
                <Col md="6">
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label><i className="fa-solid fa-images"></i> Import the product image</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </Col>
                <Col md={12} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label><i className="fa-solid fa-file-lines"></i> Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Col>
                <div className="d-grid gap-2">
                  <Button variant="primary mt-2" size="lg">
                    <i className="fa-solid fa-circle-plus"></i> Create
                  </Button>
                </div>
              </Row>
            </Form>
          </Card>
        </Col>
        
        {/* chart */}
        <Col md={8}>
          <Card className='m-auto shadow'>
            <Card.Header className='h3'><i className="fa-solid fa-chart-column"></i> Product Graph</Card.Header>
            <Bar className='p-3' data={chartData} options={chartOptions} />
          </Card>
        </Col>

        {/* chart */}
        <Col md={4}>
          <Card className='m-auto shadow'>
            <Card.Header className='h3'><i className="fa-solid fa-chart-pie"></i> Product Graph</Card.Header>
            <Pie data={chartData} options={chartOptions} />
          </Card>
        </Col>




      </Row>
    </Container>
  )
}
export default AdminProducts;