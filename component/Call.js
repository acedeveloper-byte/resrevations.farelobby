import React from "react";
import { FaPhone } from "react-icons/fa";

const FloatingCallButton = () => {
    return (
        <a
            href="tel:+1234567890" // Replace with your phone number
            className="floating-call-btn"
        >
            <FaPhone />
        </a>
    );
};

export default FloatingCallButton;
