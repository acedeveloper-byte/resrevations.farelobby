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
            <Breadcrumbs main={"home"} link={"/"} title={"Advertiser Disclosure "} page={"Advertiser Disclosure "} />
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
                                    <span class="wow fadeInUp">Advertiser Disclosure </span>
                                </div>
                                <h3>Committed to Your Best Flight, Not Associated with Any Airlines!</h3>
                                <p> Your impartial flight comparison partner, resrevations.farelobby.com, is ready to assist you in locating the ideal trip free from airline prejudice.  We are committed to giving you the most alternatives and the greatest prices for your next journey, and we have no affiliations with any carriers.  </p>
                                <h3>Transparency Is Supreme:</h3>
                                <p>We support open pricing and open skies. When you book via us, the price you see on our site includes any service fees we get. No unpleasant surprises or unstated costs—just straightforward agreements to get you where you want to go.  </p>
                                <h3>Your Way, Your Flight:  </h3>
                                <p>You are in charge when you use resrevations.farelobby.com.

                                    All major airlines' flights can be compared, with filters for price, duration, convenience, and other factors. Do you need a short vacation? Look for last-minute offers that are affordable. Making plans in advance? For your piece of mind, we offer flexible booking choices.  </p>
                                <h3>Professional Advice at All Times: </h3>
                                <p> Our group of passionate travelers is available around-the-clock to assist you.
                                    We will respond to your inquiries, help you with the reservation process, and make sure your flight runs smoothly from takeoff to landing, regardless of your level of experience.  </p>

                                <h3>
                                    Make a reservation with assurance:
                                </h3>
                                <p>Our first concern is keeping you safe. Your information is always protected on our secure platform. You can book with confidence and concentrate on the joy of your vacation since we provide flexible booking choices and transparent cancellation procedures.    </p>
                                <h3>
                                    Are You Prepared to Use resrevations.farelobby.com?
                                </h3>
                                <p>Visit our website to get started.  </p>
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
