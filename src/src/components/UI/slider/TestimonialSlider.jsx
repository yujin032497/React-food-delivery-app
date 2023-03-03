import React from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        inifinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll:  1,
    };
    return (
        <Slider { ...settings }>
            <div>
                <p className="review__text">
                    Lorem ipsum dolor sit amet consectetur
                </p>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
        </Slider>
    );
}

export default TestimonialSlider