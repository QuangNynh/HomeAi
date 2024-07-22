import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { UrlObject } from "url";
import MarqueeIcon from "./MarqueeIcon";
import bannerimage from "./images/landing-page/banner-page1.jpg"

interface BannerProps {
    tag?: string;
    title: string;
    description: string;
    buttonText?: string;
    linkButton?: string | UrlObject;
    thumbnail: string;
}

const Banner: React.FC<BannerProps> = (props) => {
    return (
        <div className=" bg-image-banner " >
            <div className="padding-custom"></div>
            <Container className="py-5 " >
                <Stack
                    direction="vertical"
                    className="justify-content-center align-items-center gap-3  text-center pt-5"
                >
                    {props.title && (
                        <h3
                            className="fw-bold font-text text-mobile "
                            style={{ letterSpacing: "5.4px", color: "#72a1fb", fontSize: "50px" }}
                        >
                            <i className="bi bi-stars"></i>
                            <span className="ps-2">{props.title}</span>
                        </h3>
                    )}

                    <p className=" fw-bold text-mobile" style={{ color: "#8d49a3", fontSize: '50px' }}>
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
                    <h2 className="fw-medium fs-5 pt-3 font-text " style={{ color: "#b9b6b1" }}>{props.tag}</h2>

                </Stack>
            </Container>
            {/* <img src="./images/landing-page/banner-page1.jpg" alt="banner" /> */}
            <MarqueeIcon
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/amazon.png"
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/shopee.png"
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/lazada.png"
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/shopify.png"
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/allegro.png"
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/etsy.png"
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/ebay.png"
                    },

                ]}
                direction="left"
            />

        </div>

    );
};

export default Banner;
