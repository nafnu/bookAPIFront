import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={30000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Enrich your life! </h3>
          <p> A world of books is full of inspiration.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={30000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3> For booklovers...</h3>
          <p> Find, explore and spread the knowledge.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={30000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3> You will get much more here, </h3>
          <p >Books make you fly high in the sky.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;