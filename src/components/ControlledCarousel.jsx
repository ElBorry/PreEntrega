import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CustomCarouselImage from "../components/CustomCarouselImage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carouselExample" className="carousel slide">
    <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carousel-inner">
              
            <div className="carousel-item active">    
          <CustomCarouselImage className="d-block w-100" imagePath="/Img/ImgCarousel/imagen3.jpg" altText="foto de tof" />
          <Carousel.Caption>
            <h3>Tienda Oficial</h3>
            
          </Carousel.Caption>
          </div>

        </Carousel.Item>
        <Carousel.Item className="carousel-inner">
        <div className="carousel-item active">
          <CustomCarouselImage className="d-block w-100" imagePath="/Img/ImgCarousel/imagen4.jpg" altText="redes de tof " />
          <Carousel.Caption>
            <h3>Tienda Oficial</h3>
            
          </Carousel.Caption>
          </div>
        </Carousel.Item>
    
      </Carousel>
      
    </div>
  );
}

export default ControlledCarousel;

