import React from "react";
import { Carousel } from "react-bootstrap";
import saintMartin from "../../images/banner/saint-martin.jpg";
import sajekValley from "../../images/banner/sajek-valley.jpg";
import tanguarHaor from "../../images/banner/tanguar-haor.jpg";

const Banner = () => {
  return (
    <Carousel className="mt-3 container img-fluid">
      <Carousel.Item>
        <img className="d-block w-100" src={saintMartin} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sajekValley} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tanguarHaor} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
