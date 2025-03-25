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
      <Breadcrumbs main="home" link="/" title="About Us" page="About Us" />

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
                  <span className="wow fadeInUp">About Us - resrevations.farelobby</span>
                </div>
              
        <p><i>Let resrevations.farelobby Take You to Your Next Dream Destination!
        </i></p>
        <p>resrevations.farelobby aims at facilitating flyers with the best travel experience so that they can cherish for a lifetime. When you book tickets with us, you become eligible for an unforgettable journey to your dream destination. At resrevations.farelobby, you will find amazing deals on flight tickets to different destinations worldwide. We are your one-stop platform, where you will find exclusive deals and competitive fares for your next trip. Book tickets with us and enhance your travel experience to the maximum. 
        </p>

        <h3>Find Exclusive Travel Deals On resrevations.farelobby!
        </h3>
        <p>resrevations.farelobby promises to make your journey an affordable venture. Just share your travel priorities with our agents, and they will help you find the best travel deals for you.  We offer unmatched travel deals on flights to various destinations worldwide; get your hands on the deal, and enjoy extra savings on your next trip. You can also find the ongoing discounts on our official site. To look for the discount based on your preferences, get in touch with resrevations.farelobby experts.
        </p>

        <h3>Personalize Your Travel Experience With Us!</h3>
           <p>Do you want a tailor-made trip that meets your requirements? Yes! Get in touch with our experts, and share your preferences. The resrevations.farelobby experts will customize a travel plan as per your needs. We believe that going on a trip is not only about reaching a destination; it’s all about the memories you create during the trip. Therefore, we allow all our customers to go on a trip to their liking. </p>

           <p>From seating preferences to meals, you can book all the extras for additional comfort in your journey. Reach out to our representatives at any time of the day, and add a personal touch to your journey of dreams. 
           </p>

           <h3>What We Offer?
           </h3>
           <p>resrevations.farelobby strives to provide you with a pleasurable flight experience and, therefore offers top-notch services. We offer the following services to our customers.
           </p>

           <ul className="custom-list">
<li>Seamless booking process</li>
<li>Unlimited travel deals</li>
<li>Personalized travel plans</li>
<li>Round the clock customer assistance
</li>
<li>Safe and secure transactions
</li>
<li>Best fares guaranteed
</li>

            </ul>

            <p>Planning to fly to another destination on your bucket list? Visit resrevations.farelobby.com and book your flight tickets with us for a memorable flying experience. Fetch lucrative flight deals and travel at competitive fares. 
            </p>
             
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
