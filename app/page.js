"use client";
import { GiCalendar } from "react-icons/gi";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CountUp from "react-countup";
import Header from "@/component/common_comp/Header";
import Footer from "@/component/common_comp/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import ScrollToTop from "@/component/common_comp/ScrollToTop";
import FloatingCallButton from "@/component/Call";
import Engine from "@/component/common_comp/Engine";
import BestDeals from "../utils/BestDeals.json";
import TestimonialSection from "@/component/HomeComponets/Testimonials";
import FlightSupport from "@/component/Popup";

export default function Home() {
  const sectionRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Header
        sectionRef={sectionRef}
        contactRef={contactRef}
        blogRef={blogRef}
      />
      <FlightSupport />
      <section class="hero-section hero-4">
        <div class="swiper hero-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="hero-items">
                <div
                  class="hero-bg bg-cover"
                  style={{ backgroundImage: `url('/img/background.jpg')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="container search-engine">
          <div class="container">
            <div class="row g-4">
              <div class="col-lg-12">
                <div class="hero-content">
                  <h1
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                    className="text-white"
                  >
                    Explore The Global Worlds
                    {/* <span class="shape-text text-white">Explore</span>
                    <span className="text-white">The</span> <br /> Global Worlds */}
                  </h1>
                  <p
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    className="text-white"
                  >
                    Take the scenic route, where the destination is just as
                    beautiful as the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Engine />
        </div>
      </section>

      <section class="flight-deals section-padding fix">
        <div class="container">
          <div class="section-title-area">
            <div class="section-title">
              <span>Best</span>
              <h2>Flight Deals</h2>
            </div>
          </div>
          <div class="row">
            {BestDeals.map((item, index) => {
              return (
                <div class="col-lg-4 col-md-6">
                  <div class="flight-card">
                    <img
                      src={item.image}
                      alt="Las Vegas"
                      className="img-fluid w-100 best-flight-deals-image"
                    />
                    <div class="flight-info">
                      <div class="d-flex col-md-5 w-100 best-flight-routes-details">
                        <p className="aiportname">{item.from}</p>
                        <div className="animation-container">
                          <div className="dotted-line"></div>
                          <div className="plane">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="30px"
                              width="20px"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M186.62 464H160a16 16 0 0 1-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 0 1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 0 0 0-.15 14.82 14.82 0 0 1-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0 1 13.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 0 1 160 48h26.91a25 25 0 0 1 19.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 0 1-19.32 9.75z"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="aiportname">{item.to}</p>
                      </div>
                      <div className="d-flex">
                        <GiCalendar size={24} />
                        <p>{item.date}</p>
                      </div>
                      <div className="deals-book-now">
                        <a
                          href="tel:+1(855) 497-3456"
                          className="text-decoration-none m-2"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section class="about-section section-padding sect-bg">
        <div class="shape-1">
          <img src="/img/about/dot-shape.png" alt="img" />
        </div>
        <div class="container" ref={sectionRef}>
          <div class="about-wrapper">
            <div class="row g-4 align-items-center">
              <div class="col-lg-5">
                <div class="about-image wow img-custom-anim-left">
                  <img src="/img/about/03.jpg" alt="img" />
                  <div class="about-box float-bob-y">
                    <h2>
                      <span class="odometer" data-count="29">
                        <CountUp end={15} />
                      </span>
                      +
                    </h2>
                    <p>YEARS OF EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="about-content">
                  <div class="section-title">
                    <span class="wow fadeInUp">About Our Company</span>
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">
                      The best view comes after the hardest climbs.{" "}
                    </h2>
                  </div>
                  <p class="wow fadeInUp mt-4 mt-md-0" data-wow-delay=".5s">
                    We are confident that with the proper guidance and
                    resources, all dreams can turn into reality. Our purpose is
                    to equip you with the resources, information, and expertise
                    required to transform your aspirations into real success.
                  </p>
                  <div class="about-sideber wow fadeInUp" data-wow-delay=".3s">
                    <h5>
                      Create unforgettable moments of adventure, where the
                      itinerary is tailored to your dreams and every destination
                      brings new horizons of discovery.”
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section class="faq-section section-padding fix">
        <div class="plane-shape">
          <img src="/img/faq/plane-shape.png" alt="img" />
        </div>
        <div class="frame-shape">
          <img src="/img/faq/frame-shape.png" alt="img" />
        </div>
        <div class="light-shape">
          <img src="/img/faq/light-shape.png" alt="img" />
        </div>
        <div class="container">
          <div class="section-title style-2 text-center">
            <span class="wow fadeInUp">Frequently Asked Questions</span>
          </div>

          <Row>
            <Col lg={12}>
              <div className="faq-items style-2">
                <div className="faq-accordion">
                  <Accordion defaultActiveKey="0" id="accordion2">
                    <Accordion.Item
                      eventKey="0"
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <Accordion.Header>
                        How do I find flight deals on resrevations.farelobby?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        Get in touch with our experts at (855) 497-3456, and ask
                        about the available flight deals and discounts. Find the
                        best deal as per your travel plan, and save on your next
                        flight booking.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="1"
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <Accordion.Header>
                        Can I choose my seat when booking flight tickets?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        Yes, almost all airlines allow you to choose your
                        desired seat, except some, when making a booking. Look
                        for the “Seat Selection” option to reserve your
                        preferred seat on the flight.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <Accordion.Header>
                        What baggage is included in my fare type?{" "}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        The baggage allowance varies based on different airlines
                        and their fare types. You must check out the particular
                        airline’s baggage policy before packing your stuff.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="3"
                      className="accordion-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <Accordion.Header>
                        How early should I reach the airport before my flight?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        It is advised to reach the airport at least 2 hours
                        before departure if you have booked a domestic flight.
                        For international flights, it is recommended to be at
                        the airport at least 3 hours prior to the scheduled
                        departure. That way, you will have enough time for
                        check-in, security checks, and other pre-flight
                        procedures.
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* FAQ Item 5 */}
                    <Accordion.Item
                      eventKey="4"
                      className="accordion-item mb-0 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Accordion.Header>
                        Can I cancel my flight on resrevations.farelobby?
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        Yes, you can cancel your flight easily with us. Just get
                        in touch with our travel experts, and share your flight
                        details. They will assist you immediately with the
                        cancellation process.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* <section class="news-section section-padding section-bg-2">
        <div class="container" ref={blogRef}>
          <div class="section-title text-center">
            <span class="wow fadeInUp" data-wow-delay=".3s">Latest Blog & News</span>
            <h2 class="wow fadeInUp" data-wow-delay=".5s">Latest Travel Insights</h2>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/airlines/american.png" alt="img" />

                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> resrevations.farelobby</li>
                    <li> <b>Date</b>{" "}08th Jan 25</li>
                  </ul>
                  <h3><a href="#" class="link-btn">Complete Guide to American Airlines Baggage Fares and Policies
                  </a></h3>

                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/airlines/southwest.png" alt="img" />

                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> resrevations.farelobby</li>
                    <li> <b>Date</b>{" "}26th Jan 25</li>
                  </ul>
                  <h3>
                    <a href="#" class="link-btn">How to find best deals with Southwest Airlines Low Fare Calendar?
                    </a>
                  </h3>

                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div class="news-box-items-4">
                <div class="news-img">
                  <img src="/img/airlines/spirit.png" alt="img" />

                </div>
                <div class="news-content">
                  <ul>
                    <li> <b>By</b> resrevations.farelobby</li>
                    <li> <b>Date</b>{" "}28th Jan 25</li>
                  </ul>
                  <h3><a href="#" class="link-btn">How to find low fare flight with spirit airlines?</a></h3>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ScrollToTop />
      <FloatingCallButton />
      <Footer contactRef={contactRef} />
    </>
  );
}
