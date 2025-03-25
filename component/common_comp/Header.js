import React from 'react'

const Header = ({ sectionRef, contactRef, blogRef }) => {


    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToBlog = () => {
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    // const scrollToSection = () => {
    //     sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <header class="header-section header-inner">
            <div id="header-sticky" class="header-1 header-4">
                <div class="container-fluid">
                    <div class="mega-menu-wrapper">
                        <div class="header-main">
                            <div class="header-left">
                                <div class="logo">
                                    <a href="/" class="header-logo">
                                        <img src="/img/logo/colour-logo.png" alt="logo-img" class="img-logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="header-right d-flex justify-content-end align-items-center">
                                <div class="mean__menu-wrapper">
                                    <div class="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="https://www.resrevations.farelobby.com/" class="text-decoration-none">
                                                        Home
                                                    </a>
                                                </li>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="/about-us" class="text-decoration-none" onClick={() => scrollToSection()}>
                                                        About Us

                                                    </a>
                                                </li>
                                                <li class="has-dropdown menu-thumb">
                                                    <a href="/contact-us" class="text-decoration-none" >
                                                        Contact Us
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="contact-items">
                                    <div class="content">
                                        <a class="alert-button" href="tel:+1(855) 497-3456">Call @ (855) 497-3456</a>
                                    </div>
                                </div>

                                <div class="header__call-button d-xl-none my-auto">
                                    <a href="tel:+1(855) 497-3456" className="text-decoration-none text-black">
                                        <i class="fas fa-phone-alt"></i> Call Now @
                                        (855) 497-3456
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
