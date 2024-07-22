import React, { use, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import "../scss/components/aboutProduct.scss";
import { AboutProduct as AboutProductType } from "@/interface/AboutProduct";
import Link from "next/link";

interface AboutProductProps {
    header: string;
    description: string;
    template: number;
    linkButton: string;
    buttonText: string;
    background: boolean;
    content: AboutProductType[];
}

const AboutProduct: React.FC<AboutProductProps> = (props) => {
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const [description, setDescription] = useState<string>(
        props.content[0].description
    );
    const handleItemClick = (index: number) => {
        setSelectedItem(index);
        setDescription(props.content[index].description);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedItem(prevItem => {
                const newItem = (prevItem + 1) % props.content.length;
                setDescription(props.content[newItem].description);
                return newItem;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div
            className={`${props.background === true ? "background-f1f1f2" : ""} `}
        >
            <Container className="py-5">
                <Stack
                    direction="vertical"
                    gap={3}
                    className="align-items-center"
                >
                    <h2 className="fs-1 text-center">{props.header}</h2>
                    <h2 className="fs-5 text-center fw-normal ">{props.description}</h2>
                    <div
                        className={`aboutProduct-gird template-grid-${props.template} pt-4`}
                    >
                        <Stack
                            direction="vertical"
                            className="about-product-title-box w-100 height-content"
                            gap={2}
                        >
                            {props.content.map((about, index) => (
                                <div
                                    key={index}
                                    className={`fs-4 opacity-50 title-about-product ${index === selectedItem
                                        ? "opacity-100"
                                        : ""
                                        }`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <span className="me-2">{about.title}</span>
                                    <i
                                        className={`bi bi-arrow-right ${index === selectedItem
                                            ? ""
                                            : "d-none"
                                            }`}
                                    ></i>
                                </div>
                            ))}
                            <p className="mt-3 mb-3">{description}</p>

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
                        </Stack>
                        <div className="w-100 h-100 about-product-video-box">
                            <iframe
                                className="w-100 h-100"
                                title="YouTube Video"
                                src={`https://www.youtube-nocookie.com/embed/F5tS5m86bOI?autoplay=1&loop=1&playlist=F5tS5m86bOI&controls=0&rel=0`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </Stack>
            </Container>
        </div>
    );
};

export default AboutProduct;
