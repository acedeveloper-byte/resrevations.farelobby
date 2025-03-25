"use client";
import React, { useRef } from "react";
import Breadcrumbs from "@/component/common_comp/Breadcrumbs";
import Footer from "@/component/common_comp/Footer";
import Header from "@/component/common_comp/Header";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Page = () => {
  const sectionRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header sectionRef={sectionRef} contactRef={contactRef} blogRef={blogRef} />
      <Breadcrumbs main="home" link="/" title="Terms & Conditions" page="Terms & Conditions" />

      <section className="contact-section section-padding fix">
        <div className="shape-1">
          <img src="/img/01.png" alt="img" />
        </div>
        <div className="shape-2">
          <img src="/img/02.png" alt="img" />
        </div>
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-12 main-content">
                <div className="section-title">
                  <span className="wow fadeInUp">Terms and Conditions - resrevations.farelobby</span>
                </div>
                <p>
                  Welcome to resrevations.farelobby! By using our website and services, you agree to be bound by the following
                  Terms and Conditions. Please read these terms carefully before using our website or services.
                </p>

                <ol> 
                  <li><strong>Introduction</strong></li>
                  <p>
                    These Terms and Conditions ("Agreement") outline the rules for your access to and use of the website 
                    www.resrevations.farelobby.com (the "Site") and the services offered by resrevations.farelobby ("Services"). By accessing or 
                    using the Site, you agree to follow these terms. If you do not agree with these Terms and Conditions, 
                    you should not use the Site or Services.
                  </p>

                  <li><strong>Changes to the Terms and Conditions</strong></li>
                  <p>
                    resrevations.farelobby reserves the right to revise these Terms and Conditions at any time. Any changes will be posted 
                    on this page, and the "Last Updated" date at the top of this page will reflect the latest revision. 
                    By continuing to access or use resrevations.farelobby after any modifications, you agree to comply with the updated terms.
                  </p>

                  <li><strong>Services Provided</strong></li>
                  <p>
                    resrevations.farelobby acts as an intermediary platform that provides access to airline-related services including, 
                    but not limited to, booking flights, purchasing tickets, and offering information on airline options. 
                    resrevations.farelobby is not an airline itself but rather a third-party service provider connecting users to airlines and travel partners.
                  </p>

                  <li><strong>Account Registration</strong></li>
                  <p>
                    In order to access certain features of the Site, you may be required to create an account with resrevations.farelobby. 
                    You agree to provide accurate and complete information during the registration process and to update 
                    your account details as necessary. You are responsible for maintaining the confidentiality of your account information.
                  </p>

                  <li><strong>Booking and Payment</strong></li>
                  <p>
                    When you make a booking through resrevations.farelobby, you are entering into an agreement with the airline or travel 
                    provider offering the service. resrevations.farelobby will facilitate the booking process and may charge fees for 
                    services rendered, such as booking fees or processing charges.
                  </p>
                  <p>
                    resrevations.farelobby is not responsible for any errors, cancellations, or disputes between you and the airline 
                    or travel provider. It is your responsibility to review the airline’s policies before completing any booking.
                  </p>

                  <li><strong>Privacy and Data Protection</strong></li>
                  <p>
                    resrevations.farelobby values your privacy. Please review our Privacy Policy to understand how we collect, use, 
                    and protect your personal information.
                  </p>

                  <li><strong>Limitation of Liability</strong></li>
                  <p>
                    To the fullest extent permitted by law, resrevations.farelobby and its affiliates shall not be liable for any 
                    indirect, incidental, punitive, special, or consequential damages or any loss of profit, revenue, 
                    or data arising from your use of the Site or Services.
                  </p>

                  <li><strong>Contact Us</strong></li>
                  <p>If you have any questions about these Terms and Conditions, please contact us at (XXX) XXX-XXXX.</p>
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

export default Page;
