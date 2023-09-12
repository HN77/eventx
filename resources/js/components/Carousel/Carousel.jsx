import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    let settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                <div className="carousel__slide">
                    <img src="./images/event1.jpg" alt="event1" />
                </div>
                <div className="carousel__slide">
                    <img src="./images/event2.jpg" alt="event2" />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
