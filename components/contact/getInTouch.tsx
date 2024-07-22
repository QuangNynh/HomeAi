"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "../../scss/components/getInTouch.scss";

const founder = {
    contact: {
        facebook: "https://www.facebook.com/",
    },
};
const GetInTouch: React.FC = () => {
    return (
        <div className="component-get-in-touch section-py-80">
            <Container>
                <div className="title pb-5">
                    <h1 className="fs-0 fw-bolder text-center">Contact Us</h1>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="form-contact w-100">
                            <div className="rounded-4 p-4 shadow-lg h-100">
                                <div className="form-title pb-3 fw-bolder fs-4">
                                    Send us a message
                                </div>
                                <div className="d-flex flex-column gap-1">
                                    <Form>
                                        <div className="d-flex justify-content-between gap-4">
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="your-name">
                                                <i className="bi bi-person"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                                aria-describedby="your-name"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="your-name">
                                                <i className="bi bi-person"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Last name"
                                                aria-describedby="your-name"
                                            />
                                        </InputGroup>
                                        </div>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="email">
                                                <i className="bi bi-envelope"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                placeholder="Work email"
                                                aria-describedby="email"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="company">
                                                <i className="bi bi-buildings"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Company"
                                                aria-describedby="company"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="subject">
                                                <i className="bi bi-patch-minus"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Your subject"
                                                aria-describedby="subject"
                                            />
                                        </InputGroup>                                        
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text
                                                id="message"
                                                className="align-items-start"
                                            >
                                                <i className="bi bi-chat-dots"></i>
                                            </InputGroup.Text>
                                            <Form.Control
                                                as={`textarea`}
                                                placeholder="Message"
                                                rows={7}
                                            />
                                        </InputGroup>
                                        <div className="d-flex">
                                            <button
                                                className="button-primary"
                                                type="submit"
                                            >
                                                <i className="bi bi-send"></i>
                                                <span className="ms-2">
                                                    Send
                                                </span>
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="info py-3 p-md-4 shadow-lg rounded-4 h-100">
                            <div>
                                <h6 className="fw-bolder fs-4 mb-3">
                                    Chat with us
                                </h6>
                                <p className="mb-3">
                                    Share your thoughts, questions, or partnership proposals with us.
                                </p>
                                <button className="button-primary fs-6 py-2">
                                    Start a conversation
                                </button>
                            </div>
                            <div className="d-flex flex-column gap-1 mt-4">
                                <h6 className="fw-bolder fs-4 mb-3">
                                    Follow us
                                </h6>
                                <div className="d-flex list-contact gap-4">
                                    <Link
                                        href={founder.contact.facebook}
                                        target="_blank"
                                        className="contact-item fs-3"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </Link>                                    
                                    <Link
                                        href={founder.contact.facebook}
                                        target="_blank"
                                        className="contact-item fs-3"
                                    >
                                        <i className="bi bi-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h6 className="fw-bolder fs-4 mb-3">
                                    Our address
                                </h6>
                                <p className="mb-1">
                                    Geckoboard, Third floor, 60 Worship
                                </p>
                                <p className="mb-1">Street, London, EC2A 2EZ</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetInTouch;
