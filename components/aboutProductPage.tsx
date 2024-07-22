import React, { use, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import "../scss/components/aboutProduct.scss";
import { AboutProduct as AboutProductType } from "@/interface/AboutProduct";
import Link from "next/link";

interface AboutProductProps {
    title: string;
    buttonText: string;
    header: string;
    description: string;
    linkButton: string;
    thumbnail: string;

}

const AboutProductPage: React.FC<AboutProductProps> = (props) => {

    return (
        <div>
            <Container className="py-5">
                <Stack
                    direction="vertical"
                    className="align-items-center text-center"
                >
                    { props.header && <p className="fs-6 text-color-violet text-spacing ">{props.header}</p>}
                    <p className="fs-2 fw-bold">{props.title}</p>
                    <p className="fs-5 fw-medium">{props.description}</p>
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

                    <img src={props.thumbnail} width={950} height={600} decoding="async" loading="lazy" className="img-about-product pt-5"/>

                </Stack>

            </Container>
        </div>
    );
};

export default AboutProductPage;
