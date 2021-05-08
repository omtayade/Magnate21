import "./Carousel.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "./assets/astronaut.png";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";
import mountains from "./assets/mountains.png";
import tree from "./assets/tree.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [
  { img: tree, name: "tree" },
  { img: mountains, name: "mountains" },
  { img: astronaut, name: "astronaut" },
  { img: taken, name: "taken" },
  { img: celebrating, name: "celebrating" },
  { img: education, name: "education" },
];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 300,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          autoplay: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        },
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          speed: 300,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          autoplay: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        },
      },
    ],
  };

  return (
    <div className="Carousel">
      <div className="slider__holder">
        <Slider {...settings}>
          {images.map(({ img, name }, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={img} alt={img} />
              <div>{name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
