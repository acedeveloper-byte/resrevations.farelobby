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
            <Breadcrumbs main={"home"} link={"/"} title={"Post ticketing service fees"} page={"Post ticketing service fees"} />
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
                                    <span class="wow fadeInUp">Post ticketing service fees</span>
                                </div>
                                <div className="table-responsive">
                                    <table className="taxes-table table table-bordered text-center">
                                        <tbody>
                                            <tr style={{ background: "#0054af", color: "#fff", fontWeight: 500 }}>
                                                <td colSpan="14">Post Ticketing Service Fee</td>
                                            </tr>
                                            <tr style={{ background: "#0054af", color: "#fff" }}>
                                                <td colSpan="7">Applies to</td>
                                                <td colSpan="4">For</td>
                                                <td colSpan="4">Amount per ticket</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7">Service executive assisted Cancellation</td>
                                                <td colSpan="4">Cancellation requested within 24 hours from booking</td>
                                                <td colSpan="4">
                                                    *Per passenger, per ticket fees:<br /> Domestic: $75.00 <br />
                                                    International: $100.00<br /> Business Class &amp; First Class: $100.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14" style={{ background: "#0054af", color: "#fff", fontWeight: 500 }}>
                                                    Cancellation requested beyond 24 hours from booking
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7">Service executive assisted Cancellation w/Future Credit</td>
                                                <td colSpan="7">
                                                    Domestic: $75.00 <br />International: $75.00<br /> Business/First - Domestic: $100.00<br />
                                                    Business/First - International: $100.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7">Service executive assisted Cancellation w/Refund</td>
                                                <td colSpan="7">
                                                    Domestic: $150.00<br /> International: $250.00<br />
                                                    Business/First - Domestic: $250.00<br />
                                                    Business/First - International: $250.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14" style={{ background: "#0054af", color: "#fff", fontWeight: 500 }}>
                                                    Changes to Existing Tickets
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7">Service executive assisted changes</td>
                                                <td colSpan="4">Air Travel - Economy</td>
                                                <td colSpan="3">Air Travel - Business/First</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7"></td>
                                                <td colSpan="2">Domestic</td>
                                                <td colSpan="2">International</td>
                                                <td colSpan="2">Domestic</td>
                                                <td colSpan="2">International</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7">Within 10 Days of new travel dates</td>
                                                <td colSpan="2">$125.00</td>
                                                <td colSpan="2">$200.00</td>
                                                <td colSpan="2">$200.00</td>
                                                <td colSpan="2">$200.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7">Beyond 10 Days of new travel dates</td>
                                                <td colSpan="2">$100.00</td>
                                                <td colSpan="2">$175.00</td>
                                                <td colSpan="2">$175.00</td>
                                                <td colSpan="2">$175.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14" style={{ background: "#0054af", color: "#fff", fontWeight: 500 }}>
                                                    Special Services
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7" rowSpan="3" style={{ verticalAlign: "middle" }}>
                                                    Service executive assisted waivers
                                                </td>
                                                <td colSpan="4">Air Travel - Economy</td>
                                                <td colSpan="5">Air Travel - Business/First</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Domestic</td>
                                                <td colSpan="2">International</td>
                                                <td colSpan="2">Domestic</td>
                                                <td colSpan="2">International</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">$75.00</td>
                                                <td colSpan="2">$100.00</td>
                                                <td colSpan="2">$100.00</td>
                                                <td colSpan="2">$150.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Fees for Executive assistance Seeking future airline credit/refund for listed reason(s)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3">Death/Bereavement</td>
                                                <td colSpan="3">Duplicate Booking</td>
                                                <td>Medical</td>
                                                <td colSpan="3">Name Change</td>
                                                <td colSpan="3">Name Correction</td>
                                                <td colSpan="3">No Show</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Routing Change</td>
                                                <td colSpan="2">UNMR</td>
                                                <td colSpan="2">Visa Issues</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14" style={{ fontWeight: 600, textDecoration: "underline" }}>
                                                    Other Terms &amp; Conditions
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Refunds/Future credits are subject to airline(s) fare rules &amp; policies. Service fees for
                                                    Changes, Refunds, cancellations and Future credit will be charged on a per passenger, per ticket basis.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Our Service fees are non-refundable and are subject to change without notice. Our fees will be
                                                    applied over and above any airline and/or supplier-imposed fees and charges.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Government-imposed taxes and fees are subject to change. The amount posted on your card statement
                                                    will be the final amount displayed on our website or quoted by our executive.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Most airline tickets are non-refundable. Refunds are only available if the ticket fare rules allow
                                                    cancellation and refunds, and you are not a "no show". Only applicable if we have accepted your
                                                    request for a refund.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Airline Refund/Future Credits are subject to airline fare rules &amp; policies.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="14">
                                                    Special services - All Special Services are on a request basis ONLY. Special Service Fees will be
                                                    charged upon service provision and can be refunded upon request denial by the airline, as each request
                                                    is subject to the airline's review and approval process.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

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
