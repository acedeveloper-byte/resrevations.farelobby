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
            <Breadcrumbs main={"home"} link={"/"} title={"Price Match Promise"} page={"price-match-promise"} />
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
                                    <span class="wow fadeInUp">Price Match Promise</span>
                                </div>
                                <p>
                                    One of the top travel agencies in the world that offers passengers affordable rates is resrevations.farelobby. We provide a Price Match Promise because we are constantly committed to finding our clients the greatest travel offers.
                                </p>
                                <p>
                                    resrevations.farelobby's Price Match Promise states that we will match any lower stated price a customer discovers on another website for the same trip they booked with us.
                                </p>

                                <span>
                                    <strong>
                                        A few things to think about under Price Match Promise are as follows:
                                    </strong>
                                </span>
                                <ul className="custom-list">
                                    <li> The same hotel, room type, travel dates, itinerary, number of passengers, inclusions (such as meals, taxes, etc.), and cancellation policy apply to the same trip.</li>
                                    <li>
                                        Only when it is publicly available on another reliable OTA's website, like as Expedia.com or Priceline.com, can we match the lowest advertised price you find.
                                    </li>
                                    <li> In accordance with our Price Match Promise guidelines, we will provide you a credit for the price difference or a complete cancellation and rebooking at the published lower rate as soon as the lowest offered price has been fully confirmed.</li>
                                    <li>
                                        To continue, you will need to send our Customer Support Team the required documentation and pertinent links to the competing offer.
                                    </li>
                                    <li>
                                        You have 24 hours after making your reservation to let us know if you would want to take advantage of the lowest price that was listed.
                                    </li>
                                </ul>
                                <p>
                                    Our Price Match Promise is a gift to all travelers who wish to travel with peace of mind and in a budget-friendly manner. Book with resrevations.farelobby today!
                                </p>
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
