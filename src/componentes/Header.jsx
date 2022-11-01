import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import tienda1 from '../assets/img/tienda1.jpg'
import tienda4 from '../assets/img/tienda4.png'


const Header = () => {
  return (
    <> 
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={tienda1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={tienda4}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  </>
  )
}

export default Header