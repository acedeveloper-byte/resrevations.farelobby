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
            <Breadcrumbs main={"home"} link={"/"} title={"Taxes and Fees"} page={"taxes-and-fees"} />
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
                                    <span class="wow fadeInUp">Taxes and Fees</span>
                                </div>
                                <div class="table-responsive">
                                    <table class="taxes-table table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Description</th>
                                                <th>May applicable to </th>
                                                <th>Code</th>
                                                <th>Amount</th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>U.S. Federal Segment Fee</b>
                                                    <p>Per-segment fee applicable to flights within the continental United States.</p>
                                                </td>
                                                <td>U.S. Domestic and International</td>
                                                <td>ZP</td>
                                                <td><strong>$4.00</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>U.S. Excise Tax<br />(aka U.S. Domestic Transportation Tax, U.S. Ticket Tax)</b>

                                                    <p>Percentage of fare; applies to flights within the continental U.S. or Canada/Mexico 225-mile buffer zones and is prorated for flights between the continental U.S. and Alaska/Hawaii based on the transportation mileage in continental U.S. airspace.</p>
                                                </td>
                                                <td>U.S. Domestic and International</td>
                                                <td>US</td>
                                                <td><strong>7.5% of fare</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Travel Facilities Tax <br />(aka Alaska/Hawaii Ticket Tax)</b>

                                                    <p>Applies to flight segments between the continental U.S. and Alaska or Hawaii.</p>
                                                </td>
                                                <td>U.S. Domestic and International</td>
                                                <td>US</td>
                                                <td><strong>$12.20</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Passenger Facility Charge (PFC)</b>
                                                    <p>Variable fee up to $4.50 based on airport for facilities improvement. A maximum of four charges per itinerary applies.</p>
                                                </td>
                                                <td>U.S. Domestic and International</td>
                                                <td>XF</td>
                                                <td><strong>UP TO $18.00</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>
                                                        September 11th Security Fee<br />
                                                        (aka U.S. Passenger Civil Aviation Security Fee)
                                                    </b>
                                                    <p>$5.60 per one-way trip originating at a U.S. airport, $11.20 per round-trip, fee may accrue multiple times for itineraries with stopovers.</p>
                                                </td>
                                                <td>U.S. Domestic and International</td>
                                                <td>AY</td>
                                                <td><strong>$5.60 per U.S. enplanement</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>U.S. International Transportation (Arrival/Departure) Tax</b>
                                                    <p>Applies to all international flights arriving in or departing from the United States and to flights between the United States (defined as the 50 U.S. states and District of Columbia) and U.S. territories and possessions such as Puerto Rico or the U.S. Virgin Islands.</p>
                                                </td>
                                                <td>International</td>
                                                <td>US</td>
                                                <td><strong>$17.50</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>U.S. Animal and Plant Health Inspection Service (APHIS) User Fee</b>
                                                    <p>Applies to all flights originating abroad, except Canada, and landing in the United States, Puerto Rico or the U.S. Virgin Islands.</p>
                                                </td>
                                                <td>International</td>
                                                <td>XA</td>
                                                <td><strong>$5.00</strong></td>
                                            </tr>
                                            <tr>
                                                <td><b>
                                                    U.S. Immigration and Inspection User Fee
                                                </b>
                                                    <p>Applies to international arrivals to the U.S., Puerto Rico or the U.S. Virgin Islands.</p>
                                                </td>
                                                <td>International</td>
                                                <td>XY</td>
                                                <td><strong>$7.00</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>U.S. Customs Inspection User Fee</b>
                                                    <p>Applies to international arrivals from outside of the U.S. Customs territory.</p></td>
                                                <td>International</td>
                                                <td>YC</td>
                                                <td>$5.50</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Foreign Government-Imposed Taxes and Fees and Foreign Airport Fees</b>
                                                    <p>Various foreign government-imposed taxes and fees such as inspection fees and security charges and foreign airport departure taxes.</p>
                                                </td>
                                                <td>International</td>
                                                <td>Varies</td>
                                                <td><strong>up to Several hundred dollars</strong></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Our Service Fees</b>
                                                    <p>
                                                        Online Air Transaction Services Fees <br />
                                                        Depending on the cabin type, trip type and certain other factors, a service fee of up to $100 is charged per person for all passenger types**
                                                    </p>
                                                </td>
                                                <td>U.S. Domestic and International</td>
                                                <td>Fees</td>
                                                <td><strong>up to $100.00</strong></td>
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
