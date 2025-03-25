'use client'
import React, { useRef } from 'react'
import Breadcrumbs from '@/component/common_comp/Breadcrumbs'
import Footer from '@/component/common_comp/Footer'
import Header from '@/component/common_comp/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const page = () => {
    const sectionRef = useRef()
    const blogRef = useRef()
    const contactRef = useRef()
    return (
        <>
            <Header sectionRef={sectionRef} contactRef={contactRef} blogRef={blogRef} />
            <Breadcrumbs main={"home"} link={"/"} title={"Fulfillment Policy"} page={"Fulfillment Policy"} />
            <section class="contact-section section-padding fix">
                <div class="shape-1">
                    <img src="/img/01.png" alt="img" />
                </div>
                <div class="shape-2">
                    <img src="/img/02.png" alt="img" />
                </div>
                <div class="container">
                    <div class="contact-wrapper">
                        <div class="row g-4 align-items-center">
                            <div class="col-lg-12 main-content">
                                <div class="section-title">
                                    <span class="wow fadeInUp">Fulfillment Policy</span>
                                </div>
                                <p> Among the many travel fraternities, we are a real and authentic travel agency. We assist our clients with booking flights, vacations, personal travel, emergency travel, and other travel-related needs. We offer our clients 24 hour travel services at the most competitive rates, free of confusion or inconvenience.</p>
                                <p>Making our customers pleased and delighted with our services—which include online ticket booking, ticket revisions, payment settlements, ticket cancellation, hotel reservations, travel packages, round-the-clock customer care, and much more—is the goal of our fulfillment policy.</p>

                                <p>With the assistance and direction of our team of passionate and highly skilled travel professionals, we offer our clients committed, professional service. Our skilled staff constantly works hard to deliver services that our clients want and need. By providing our clients with top-notch travel options and world-class services, our professionals want to capture their attention.  </p>

                                <p>The values and concepts that underpin our company serve as the cornerstone of our business. Recognizing that every member of our team adheres to the company's values is incredibly satisfying.  </p>

                                <p>With the assistance and direction of our team of passionate and highly skilled travel professionals, we offer our clients committed, professional service. Our skilled staff constantly works hard to deliver services that our clients want and need. By providing our clients with top-notch travel options and world-class services, our professionals want to capture their attention.  </p>

                                <p>Our company's ideals and principles are strong enough to create a reliable and uniform panel that is used to resolve conflicts. We are able to provide value-added services and reasonable prices on airline tickets, hotel reservations, visas, travel insurance, and currency exchange because of our solid and consistent relationships with our customers and different authorities. In addition, we offer lounge access, airport assistance, and a host of other services. We have left a lasting impression on the travel sector.   </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page
