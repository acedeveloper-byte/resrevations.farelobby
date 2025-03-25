import React from "react";

const Footer = ({ contactRef }) => {
  return (
    <>
      <footer
        class="footer-section fix section-bg bg-cover"
        style={{ backgroundImage: `url('/img/footer/bg-image.jpg')` }}
      >
        <div class="container" ref={contactRef}>
          <div class="footer-newsletter-items">
            <h2>Get Updated the Our Latest Newsletter</h2>
            <div class="footer-input">
              <input type="email" id="email2" placeholder="Enter your email" />
              <button class="newsletter-btn" type="submit">
                Subscribe <i class="far fa-search"></i>
              </button>
            </div>
          </div>

          <div class="footer-wrapper ">
            <div class="row">
              <div class="col-xl-4 col-lg-7 col-md-12">
                <div class="footer-widget-items">
                  <div class="widget-title">
                    <a href="#" class="footer-logo">
                      <img
                        src="/img/logo/colour-logo.png"
                        alt="img"
                        class="img-logo"
                      />
                    </a>
                  </div>
                  <p>
                    Book with resrevations.farelobby to experience ultimate comfort on your
                    trip to your dream destination. We offer unlimited deals and
                    disocunts on various destinations worldwide. Select your
                    destination, find the best deals, and save your money. Start
                    planning your trip with resrevations.farelobby today!
                  </p>
                  <div class="footer-content">
                    <div class="social-icon">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-5 col-md-4 col-sm-6">
                <div class="footer-widget-items">
                  <div class="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul class="list-items">
                    <li>
                      <a href="tel:+1(855) 497-3456">24/7 Support</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div class="footer-widget-items">
                  <div class="widget-title">
                    <h3>About resrevations.farelobby</h3>
                  </div>
                  <ul class="list-items">
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>

                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Terms & Conditions </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div class="footer-widget-items">
                  <div class="widget-title">
                    <h3>Legal Links</h3>
                  </div>
                  <ul class="list-items">
                    <li>
                      <a href="/legal-links/cookies-policy">Cookies Policy </a>
                    </li>
                    <li>
                      <a href="/legal-links/taxes-and-fees">Taxes and Fees </a>
                    </li>
                    <li>
                      <a href="/legal-links/post-ticketing-service-fees">
                        Post Ticketing service Fees
                      </a>
                    </li>
                    <li>
                      <a href="/legal-links/price-match-promise">
                        Price Match Promise
                      </a>
                    </li>
                    <li>
                      <a href="/legal-links/fare-disclosure">Fare Disclousre</a>
                    </li>
                    <li>
                      <a href="/legal-links/fulfillment-policy">
                        Fulfillment Policy
                      </a>
                    </li>
                    <li>
                      <a href="/legal-links/advertiser-disclosure">
                        Advertiser Disclousre
                      </a>
                    </li>
                    <li>
                      <a href="/legal-links/cancellation-refund">
                        Cancellation refund
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p style={{ marginTop: "30px" }}>
              <b>Disclaimer: </b>
              resrevations.farelobby is your one-stop platform to book flights at the lowest
              fares. Connect with our experts to find flights to your dream
              destination effortlessly. Please note that we are just a
              connection between airlines and customers. We don’t claim to be
              affiliated with any particular airline. We will help you connect
              to your destination for less. Book your tickets on resrevations.farelobby, and
              travel the world for less.
            </p>
          </div>
        </div>
        <div class="footer-bottom-1">
          <div class="container">
            <div class="footer-bottom-wrapper">
              <p class="wow fadeInUp" data-wow-delay=".3s">
                © 2025 resrevations.farelobby A ll rights reserved.
              </p>
              <ul class="footer-menu wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
