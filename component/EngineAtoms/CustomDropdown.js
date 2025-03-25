import { useState, useRef, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const CustomDropDown = ({ show, position }) => {
    if (!show) return null;

    return (
        <div
            className="custom-dropdown"
            style={{
                position: "absolute",
                top: position.top + "px",
                left: position.left + "px",
                width: position.width + "px",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
            }}
        >
            <ListGroup as="ol" numbered>
                {[1, 2, 3].map((item) => (
                    <ListGroup.Item
                        key={item}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <>
                            <Row>
                                <Col md={2} sm={2} lg={2}>
                                    <span>+</span>
                                    <span>1</span>
                                    <span>-</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} sm={2} lg={2}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} sm={2} lg={2}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Col>
                            </Row>
                            <Row>

                                <Col md={2} sm={2} lg={2}>
                                    BUSINESS
                                </Col>
                                <Col md={2} sm={2} lg={2}>
                                    ECONOMY
                                </Col>
                            </Row>
                        </>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};




export default CustomDropDown;