"use client";
import Breadcrumbs from "@/component/common_comp/Breadcrumbs";
import Footer from "@/component/common_comp/Footer";
import Header from "@/component/common_comp/Header";
import React, { useRef } from "react";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const page = () => {
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
      <Breadcrumbs
        main={"home"}
        link={"/"}
        title={"Privacy Policy"}
        page={"Privacy Policy"}
      />
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
                  <span class="wow fadeInUp">Privacy Policy - resrevations.farelobby</span>
                </div>
                <p>
                  Your privacy is important to us at resrevations.farelobby, that’s why we
                  have put systems in place to protect your information. This
                  policy outlines how we gather, use, and secure your
                  information while booking your flight using our website's
                  service.
                </p>

                <ol>
                  <li>
                    <b>Information We Collect</b>
                  </li>
                  <p>
                    When interacting with resrevations.farelobby, we collect the following
                    types of personal information:
                  </p>

                  <ul className="custom-list">
                    <li>
                      <b>Personal Information -</b> This consists of your full
                      names, email address, your mobile number, payments details
                      such as credit card information, boarding pass detail, and
                      more information that are necessary to facilitate your
                      flight bookings.
                    </li>

                    <li>
                      <b>Booking Information -</b> Your travel destination and
                      travel days along with the number of passengers are
                      classified under your travel preferences.
                    </li>

                    <li>
                      <b>Device Information -</b>The type of device you used to
                      access the website, the browser you are using, its IP
                      address, operating system and general surfing habits are
                      referred to as device information.
                    </li>

                    <li>
                      <b>Cookies and Tracking Technologies -</b> We implement
                      cookies and other forms of tracking technologies in order
                      to enhance your website visits, track activities on the
                      site, and offer personalized content.
                    </li>
                  </ul>

                  <li>
                    <b>How resrevations.farelobby Uses Your Information</b>
                  </li>
                  <p>
                    The information collected is used for the purposes below:
                  </p>
                  <ul className="custom-list">
                    <li>
                      To assist with the processes in bookings and payment
                      transactions for flights.
                    </li>
                    <li>
                      To assist you if further communication is needed
                      concerning your purchase which includes informing you
                      about booking reminders and automatic booking
                      confirmations.
                    </li>
                    <li>
                      To improve our website and services, including analyzing
                      user behavior and preferences.
                    </li>
                    <li>
                      To send you marketing communications, special offers, and
                      promotions related to flight bookings, unless you have
                      opted out of such communications.
                    </li>
                    <li>
                      To provide customer support and address any inquiries or
                      issues related to your flight bookings.{" "}
                    </li>
                    <li>To comply with legal and regulatory requirements.</li>
                  </ul>

                  <li>
                    <b>Sharing of Your Personal Details</b>
                  </li>

                  <p>
                    resrevations.farelobby is permitted to disclose your personal information
                    to the below named third parties:
                  </p>

                  <ul className="custom-list">
                    <li>
                      <b>Airlines: </b> For the purpose of commencing and
                      completing your flight bookings.
                    </li>
                    <li>
                      <b>Payment Processors:</b> To facilitate secure payments
                      for booking transactions.
                    </li>

                    <li>
                      <b>Service Providers:</b> For assistance in customer
                      support, website functionality improvement, data analysis,
                      etc.
                    </li>
                    <li>
                      <b>Government Authorities:</b> If lawfully applicable, as
                      in instances for ID verification or fulfilling legal
                      obligations.
                    </li>
                    <p>
                      We do not promote, sell, or furnish your personal
                      information to any entity for advertising purposes without
                      your consent.
                    </p>
                  </ul>

                  <li>
                    <b>Protection Of Information</b>
                  </li>
                  <p>
                    At resrevations.farelobby, protecting your personal information is one of
                    our core commitments and as such, we strive to employ the
                    requisite technical and organizational policies to prevent
                    unauthorized access, destruction, disclosure, or
                    modification of information. Due to the absence of a fully
                    secure way of transmitting information over the Internet or
                    storing it electronically, we are not able to provide full
                    security guarantees.
                  </p>

                  <li>
                    <b>Your Rights and Your choices </b>
                  </li>
                  <ul className="custom-list">
                    <li>
                      <b>Withdrawal from Marketing Communications:</b> You have
                      the option to withdraw from receiving promotional emails
                      by clicking on the “unsubscribe” link in our emails.
                      Alternatively, you may communicate with us directly to be
                      removed from the email list.
                    </li>

                    <li>
                      <b>Accessing and Updating Account Information: </b> Customers can request to examine and amend any records
                      that we hold regarding them.
                    </li>

                    <li>
                      <b>Data Deletion:</b> Customers are able to obtain the
                      deletion of their private data if they reach us. Keep in
                      mind that for some purposes, resrevations.farelobby might need to
                      retain some information in order to satisfy legal
                      requirements or finish other business obligations.
                    </li>
                  </ul>

                  <li>
                    <b>Third-Party Websites</b>
                  </li>
                  <p>
                    resrevations.farelobby does not make any claims about the information
                    contained on other sites. External services and/or sites
                    may, at their discretion, include links to resrevations.farelobby.
                    resrevations.farelobby.com holds no responsibility for the safeguarding
                    of your data on these sites and recommends clients to
                    analyze the terms of data collection from these external
                    sites, which may include personal information prior to this.
                  </p>

                  <li>
                    <b>Changes to This Privacy Policy</b>
                  </li>
                  <p>
                    resrevations.farelobby reserves the right to update this Privacy Policy
                    at any time. When we do, it will be effective immediately
                    after posting. We encourage you to periodically review this
                    page for any updates.
                  </p>

                  <li>
                    <b>Contact Us</b>
                  </li>
                  <p>
                    If you have any questions or concerns about this Privacy
                    Policy or our practices, please contact us at: +1 (855)
                    497-3456.
                  </p>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
