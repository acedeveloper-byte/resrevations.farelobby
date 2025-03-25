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
            <Breadcrumbs main={"home"} link={"/"} title={"Cancellation Refund"} page={"cancellation refund"} />
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
                                    <span class="wow fadeInUp">Cancellation Refund</span>
                                </div>
                                <p> We must disclose that we are a travel solution provider before we can proceed with our refund and cancellation policies.We would like to emphasize, nonetheless, that we are not the only ones who make decisions about the cancellation and reimbursement of airline tickets. The airline's policies govern our cancellation and refund procedures, and we will abide by them. </p>


                                <span>
                                    <strong>
                                        Our cancellation and refund rules, which we and all travelers must follow, are as follows: </strong>
                                </span>
                                <ul className="custom-list">
                                    <li> Most of the time, we sell non-refundable plane tickets on our website. Nonetheless, according to their policies, certain airlines provide refundable tickets, and customers are entitled to reimbursements for any cancellations that may occur.  </li>
                                    <li>
                                        If a refund is available, passengers must request a flight cancellation within 24 hours after making their reservation.
                                    </li>
                                    <li> Additionally, we must assure you that we do not offer any guarantees or warranties regarding the cancellation and return of flight reservations. They can use the credit amount they were provided to make future travel arrangements.</li>
                                    <li>
                                        In the event that the credit is used, it is also crucial to pay the fare difference and the booking fee.
                                    </li>
                                    <li>
                                        Within ten days of purchase, any passenger who has not boarded the aircraft and notified our agents of the cancellation can receive a trip protection refund.
                                    </li>
                                    <li>
                                        The airline in question provides the promise of cancellation and refund, and we will not be held accountable.
                                    </li>
                                    <li>
                                        Refund requests for travelers with "No Show" reservations are occasionally approved by the airlines, and they are credited with airline credit or have their money deposited into their bank accounts.
                                    </li>
                                    <li>
                                        As a travel agency, we neither guarantee nor assert a time frame for processing cancellation and refund requests from customers. In order to process the refund, we handle each cancellation and refund request in a sequential sequence and forward it to the appropriate airlines for approval.                                      </li>
                                    <li>
                                        As a travel agency, we neither guarantee nor assert a time frame for processing cancellation and refund requests from customers. In order to process the refund, we handle each cancellation and refund request in a sequential sequence and forward it to the appropriate airlines for approval.                                      </li>
                                    <li>
                                        Once a cancellation request has been submitted through any channel, we will send the passengers an email confirming that we accept it along with a reference for any future interaction. The passengers are not certain that they would get their money back right away.                                     </li>
                                    <li>
                                        We are not responsible for returning the service charge in any of the cancellation procedures. The amount that the passenger is charged at the time of booking is known as the service fee.                                      </li>

                                    <li>
                                        Processing the reimbursement is entirely up to the airline. Usually, it takes 60 to 90 days from the date the cancellation request was made to complete the process.                                      </li>
                                    <li>
                                        The money is credited to your bank account shortly after the cancellation request is approved. Some airlines do, however, provide refunds in the form of airline credits for subsequent flights.</li>
                                    <li>
                                        If the airline determines that the refund request is not valid in accordance with the policies, it may impose a penalty. Additionally, there will be a service fee for the passengers. Additionally, the cost would change based on the kind of ticket and the number of travelers.</li>
                                    <li>
                                        We try our best to reimburse the service fee that was assessed at the time of ticket purchase if the airline rejects a passenger's request for a cancellation and refund. However, we subtract from the refund amount the booking fee that was paid at the time of booking the flight. </li>
                                </ul>
                                <p>
                                    There forementioned cancellation and refund policies are in compliance with each airline's airfare regulations found on our travel website. Since the airline is responsible for paying the refund, we have no authority over their rules or ability to obstruct their processes in any way.
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
