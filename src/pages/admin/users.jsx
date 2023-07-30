import React from 'react'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { filterData } from '../../helpers/filter'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
const AdminUsers = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

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
        borderWidth: 3,

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

  // 
  const data = [
    {
      id: 1,
      title: 'AAAAAA',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 3,
      title: 'Ghost',
      year: '1884',
    },
    {
      id: 4,
      title: 'BBBBBB',
      year: '1989',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {

    setFilteredData(filterData(data, searchTerm));

  }, [searchTerm]);

  const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);


  // Search input
  const subHeaderComponent = (
    <div className="pt-3 d-flex">

      <i className='fa-solid fa-magnifying-glass text-muted p-2 '></i>
      <Form className="d-flex ">

        <Form.Control
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder=" Search "
          className="me-2 "
          aria-label="Search"
        />
      </Form>

    </div>
  );

  // style
  const customStyles = {
    header: {
      style: {
        fontSize: '1.75em',
        paddingLeft: "3%",
      },
    },
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        fontSize: "1.5rem"
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
  const columns = [
    {
      name: '#ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
    },
  ];


  return (
    <Container >
      <Row className='justify-content-around'>
        <Col  md={10}   >
          <Card className=" mt-5  m-auto shadow">
            <Card.Header className='h3'><i className="fa-solid fa-users"></i> Users Table</Card.Header>
            <DataTable
              title
              columns={columns}
              data={filteredData}
              direction="auto"
              fixedHeaderScrollHeight="300px"
              highlightOnHover
              pagination
              responsive
              striped
              selectableRows
              selectableRowsHighlight
              selectableRowsRadio="checkbox"
              subHeader
              subHeaderAlign="right"
              subHeaderWrap
              onSort={handleSort}
              customStyles={customStyles}
              subHeaderComponent={subHeaderComponent}
            />
          </Card>
        </Col >
        <Col md={6}   >
          <Card className=" mt-5 m-auto shadow ">
            <Card.Header className='h3'><i className="fa-solid fa-chart-area"></i> Users Chart</Card.Header>
            <Line className='p-3 ' data={chartData} options={chartOptions} />
          </Card>
        </Col >

        <Col md={6} >
          <Card className=" mt-5  shadow m-auto">
            <Card.Header className='h3 '><i className="fa-solid fa-user-plus"></i> ADD User</Card.Header>
            <Form className=" p-3" >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><i className="fa-solid fa-user-large"></i> Username</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><i className="fa-solid fa-key"></i> Password</Form.Label>
                <Form.Control type="password" placeholder="********" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary mt-2" size="lg">
                <i className="fa-solid fa-circle-plus"></i> Create
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default AdminUsers;