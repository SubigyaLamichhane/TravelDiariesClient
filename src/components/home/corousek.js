import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img
          style={{ objectFit: 'contain' }}
          className="d-block carousel"
          src="https://source.unsplash.com/random"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ objectFit: 'contain' }}
          className="d-block carousel"
          src="https://source.unsplash.com/random"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ objectFit: 'contain' }}
          className="d-block carousel"
          src="https://source.unsplash.com/random"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
