import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';

const Localisation = () => {
    return (
        <Container fluid className='p-3 pb-5 bg-dark'>
        
        <section className=''>
          <Row className='d-flex justify-content-center'>
            <h1 className='text-center text-white m-5'><i className="fa-solid fa-map-location-dot"></i> Our Location</h1>
            <Col lg='6'>
              <div className='ratio ratio-16x9 p-5 mb-3'>
                <iframe
                  className='shadow-1-strong rounded'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1051.3959120882637!2d2.9084983171241485!3d36.57445356661947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa788175197db%3A0xde22ee853dd70737!2s56%20Rue%20des%20Fr%C3%A8res%20Retal%2C%20Boufarik%2009400!5e0!3m2!1sfr!2sdz!4v1663431414768!5m2!1sfr!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                  title='YouTube video'
                  allowFullScreen
                  data-gtm-yt-inspected-2340190_699='true'
                  id='map'
                ></iframe>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    )
}

export default Localisation;