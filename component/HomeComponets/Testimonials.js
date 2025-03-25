"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768, // Tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="testimonial-section-4 section-padding">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="wow fadeInUp">Our Testimonial</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Feedback From Our Happy Travelers <br /> from around the world
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5">
                        Our attraction passes save you more than buying
                        <br /> individual tickets for your tour package system. Our
                        <br /> attraction passes save you.
                    </p>
                </div>

                {/* Slick Carousel */}
                <Slider {...settings}>
                    <div className="testimonial-box-items-4">
                        <div className="testi-img">
                            <img src="/img/testimonial/client-03.png" alt="img" />
                        </div>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="icon">
                            <img src="/img/testimonial/quote-01.png" alt="icon" />
                        </div>
                        <h3>
                            "A truly stunning experience! They optimized our processes, and
                            the results speak for themselves. Highly recommended!"
                        </h3>
                        <div className="client-info">
                            <h4>William Smith</h4>
                            <span>from New York, USA</span>
                        </div>
                    </div>

                    <div className="testimonial-box-items-4">
                        <div className="testi-img">
                            <img src="/img/testimonial/client-04.png" alt="img" />
                        </div>
                        <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="icon">
                            <img src="/img/testimonial/quote-01.png" alt="icon" />
                        </div>
                        <h3>
                            "The staff was very professional, courteous, and genuinely
                            committed to providing a great customized vacation. We couldn't
                            have expected more."
                        </h3>
                        <div className="client-info">
                            <h4>Milley Jose</h4>
                            <span>from New York, USA</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;
