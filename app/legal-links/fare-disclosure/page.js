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
            <Breadcrumbs main={"home"} link={"/"} title={"Fare Disclousre"} page={"Fare dislcousre"} />
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
                                    <span class="wow fadeInUp">Fare Disclousre</span>
                                </div>
                                <p>
                                    You receive exactly what you see!
                                </p>
                                <p>
                                    resrevations.farelobby offers clear and honest pricing since we fully believe in and adhere to the aforementioned motto. All taxes and fees are included in the fares you see on our website.
                                </p>

                                <span>
                                    <strong>
                                        Here is what you can anticipate from us, as we believe in transparent pricing:                                      </strong>
                                </span>
                                <ul className="custom-list">
                                    <li>When you make a reservation on our website, there are no additional costs. You must pay the same amount as the fares you see in order to finalize your reservation with us. Our website shows all-inclusive rates. </li>
                                    <li> Therefore, you may rest easy knowing that all government taxes and other expenses are covered by the total fare you see.  </li>
                                    <li> Before you confirm your reservation, all information will be shown on your screen so that you are aware of any fuel surcharges that may be applied at the time of checkout.  </li>

                                </ul>
                                <p>
                                    Before you confirm your reservation, all information will be shown on your screen so that you are aware of any fuel surcharges that may be applied at the time of checkout.                                  </p>
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
