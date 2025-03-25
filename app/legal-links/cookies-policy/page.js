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
            <Breadcrumbs main={"home"} link={"/"} title={"Cookies Policy"} page={"cookies-policy"} />
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
                                    <span class="wow fadeInUp">Cookies Policy</span>
                                </div>
                                <p>
                                    The goal of resrevations.farelobby's cookies policy is to ensure that your online experience is healthy, rewarding, and valuable.We put a lot of effort into meeting all of our clients' demands and providing them with the greatest travel services available.Therefore, by employing pertinent cookies, we want to provide our users with the greatest possible experience on our website. How we use cookies and related technologies to enhance your online experience is explained in our Cookies Policy.</p>
                                <h3>Cookies: What Are They?</h3>

                                <p>
                                    Cookies are little text messages or data files that are saved in your browser to help websites remember your preferences and browsing history.Cookies are used by us to customize and adapt the resrevations.farelobby user experience to the demands of our customers.
                                </p>
                                <h3>
                                    Cookies We Use Types
                                </h3>
                                <span>
                                    <strong>
                                        We use a variety of cookie types, some of which include: </strong>
                                </span>
                                <ul className="custom-list">
                                    <li> These cookies are necessary for our website to work on your device. They assist you in using services such as booking forms and navigating our website.
                                    </li>
                                    <li>
                                        Performance Cookies: These cookies are intended to gather information about your usage of our website so that you can enhance both its overall functionality and user experience.</li>
                                    <li> Cookies from third parties on our website that target advertisements based on your browsing history are known as advertising cookies
                                    </li>                                </ul>

                                <h3>Your Rights</h3>
                                <p>
                                    We do not compromise your privacy, even though we use various kinds of cookies to improve your experience on our website.You can always opt to alter your cookie preferences or disable cookies if you ever feel that your privacy has been violated. </p>
                                <p>
                                    Farlobby respects your privacy and is dedicated to providing you with the best service possible.You agree to our use of cookies as outlined in this policy by making reservations through our website. </p>
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
