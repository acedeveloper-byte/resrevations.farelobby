'use client';

import { useEffect, useState } from 'react';
import { FaRandom, FaMoneyBill, FaCalendarAlt, FaTimesCircle, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FlightSupport() {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModal(true);
        }, 2000);
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            {modal && (
                <div className="overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)', zIndex: 999999 }}>
                    <div className="support-container bg-white rounded-4 shadow-lg p-4 position-relative" style={{ maxWidth: '500px', width: '90%' }}>
                        <button className="btn-close position-absolute top-0 end-0 m-3" onClick={() => setModal(false)}><i class="fa fa-close"></i></button>
                        <div className="text-center mb-3">
                            <Image src="/img/agent/call-girl.jpg" alt="Agent" width={80} height={80} className="rounded-circle border border-3" />
                            <h5 className="mt-3 fw-bold">Exclusive Flight Deals</h5>
                            <p className="text-muted">Call us now for 24/7 support and amazing offers!</p>
                        </div>

                        <div className="call-button text-center mb-4">
                            <a href="tel:+1 (855) 497-3456" className="btn btn-danger px-4 py-2 rounded-pill shadow-sm">
                                <FaPhoneAlt className="me-2" /> +1 855 497-3456
                            </a>
                        </div>

                        <div className="row g-3">
                            <div className="col-6">
                                <button className="btn w-100 py-3 rounded-3 text-dark" style={{ background: "#FFD8D8" }}>
                                    <FaRandom className="me-2" /> Changes
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn w-100 py-3 rounded-3 text-dark" style={{ background: "#D4E9F4" }}>
                                    <FaMoneyBill className="me-2" /> Refund
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn w-100 py-3 rounded-3 text-dark" style={{ background: "#DCDCDC" }}>
                                    <FaCalendarAlt className="me-2" /> Reservation
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn w-100 py-3 rounded-3 text-dark" style={{ background: "#FFCFC6" }}>
                                    <FaTimesCircle className="me-2" /> Cancellation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
