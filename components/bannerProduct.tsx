import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { UrlObject } from "url";

interface BannerProps {
    tag?: string;
    title: string;
    description: string;
    buttonText?: string;
    linkButton?: string | UrlObject;
    thumbnail: string;
}

const BannerProduct: React.FC<BannerProps> = (props) => {
    return (
        <React.Fragment>
            <Container className="py-5">
                <Row>
                    <Col md={5} className="order-1 order-md-0">
                        <Stack
                            direction="vertical"
                            className="justify-content-center h-100 gap-3"
                        >
                            {props.tag && (
                                <h3
                                    className="fs-5 opacity-50"
                                    style={{ letterSpacing: "5.4px" }}
                                >
                                    <i className="bi bi-stars"></i>
                                    <span className="ps-2">{props.tag}</span>
                                </h3>
                            )}

                            <h2 className="fw-bolder fs-2">{props.title}</h2>
                            <p className="fs-6 fw-medium opacity-50">
                                {props.description}
                            </p>
                            {props.buttonText && props.linkButton && (
                                <Link
                                    href={props.linkButton}
                                    className="flex-grow-0 button-primary"
                                    style={{ width: "fit-content" }}
                                >
                                    <span className="me-2">
                                        {props.buttonText}
                                    </span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                            )}
                        </Stack>
                    </Col>
                    <Col className="p-5">
                        <Image
                            src={props.thumbnail}
                            width="100%"
                            className="rounded-4"
                        ></Image>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default BannerProduct;
