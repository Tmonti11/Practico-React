import Carousel from "react-bootstrap/esm/Carousel";


const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: "cover"}}
        src="/images/slide.jpg" alt="Slide 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: "cover"}}
        src="/images/slide1.jpg" alt="Slide 2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
        className="d-block w-100"
        style={{maxHeight: "500px", objectFit: "cover"}}
        src="/images/slide2.jpg" alt="Slide 3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome