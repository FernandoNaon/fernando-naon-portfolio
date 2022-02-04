import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import recipe1 from "../Assets/projects/recipe1.png";
import recipe2 from "../Assets/projects/recipe2.png";
import recipe3 from "../Assets/projects/recipe3.png";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={recipe1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={recipe2} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={recipe3} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
