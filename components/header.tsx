"use client";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image, Stack } from "react-bootstrap";

import "../scss/components/header.scss";
import useSticky from "@/hooks/useSticky";
import Link from "next/link";
import CollapseHeader from "./CollapseHeader";


const link = {
    product: [
        {
            href: "/product/visual-dressing-room",
            title: "Virtual Dressing Room ",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 1",
        },
        {

            href: "/product/ai-photoshoots-studio-design",
            title: "AI Photoshoots Studio Design",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 2",
        },
        {

            href: "/product/ai-content-writing",
            title: "AI content writing",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 3",
        },
    ],
    pricing: [
        {
            href: "/pricing",
            title: "Pricing",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 4",
        }
    ],
    company: [
        {
            href: "/product/visual-dressing-room",
            title: "About us",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 4",
        },
        {
            href: "/product/visual-dressing-room",
            title: "Help",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 4",
        },
        {
            href: "/product/visual-dressing-room",
            title: "FAQ",
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/birds.webm",
            titlevideo: "video 4",
        },
    ]


}
const Header: React.FC = () => {
    const { sticky } = useSticky();
    const [open, setOpen] = useState<{ [key: string]: boolean }>({});


    const handleMouseEnter = (key: string) => {
        setOpen(prevState => ({ ...prevState, [key]: true }));
    };

    const handleMouseLeave = (key: string) => {
        setOpen(prevState => ({ ...prevState, [key]: false }));
    };
    const setOpenProps = (key: string, value: boolean) => {
        setOpen(prevState => ({ ...prevState, [key]: value }));
    };
    return (
        <div className={`${sticky ? "sticky-menu" : "sticky-menu-no"}`}>
            <Navbar expand="lg" className="custom-navbar">
                <Navbar.Brand
                    href="/"
                    className="fs-5 fw-bolder me-5 d-flex align-items-center tille-logo"
                >
                    <Image
                        src="/images/logo/logo.png"
                        height="100%"
                       width=" 40px"
                        className="me-2 "
                    />
                    Alphii Ai
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="gap-3 mobile-tablet">
                        <NavDropdown
                            autoClose="outside"
                            align="start"
                            title="Product"
                            className="fs-6 fw-bolder cs-nav-item text-warning"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="/product/visual-dressing-room">
                                <div className="fw-light fs-6">
                                    Virtual Dressing Room
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/product/ai-photoshoots-studio-design">
                                <div className="fs-6 fw-normal product-nav-title">
                                    AI Photoshoots Studio Design
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/product/ai-content-writing">
                                <div className="fs-6 fw-normal product-nav-title">
                                    AI content writing
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item>
                            <Nav.Link
                                href="#about-me"
                                className="cs-nav-item fs-6 fw-bolder "
                            >
                                Solution
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                href="/pricing"
                                className="cs-nav-item fs-6 fw-bolder "
                            >
                                Pricing
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <NavDropdown
                                autoClose="outside"
                                align="start"
                                title="Company"
                                className="fs-6 fw-bolder cs-nav-item"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="/product/visual-dressing-room">
                                    <div className="fs-6 fw-normal product-nav-title">
                                        About us
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/product/ai-photoshoots-studio-design">
                                    <div className="fs-6 fw-normal product-nav-title">
                                        Help
                                    </div>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/product/ai-content-writing">
                                    <div className="fs-6 fw-normal product-nav-title">
                                        FAQ
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav.Item>
                    </Nav>
                    <Nav className="gap-3 h-100 tablet-desktop">
                        <Nav.Item
                            onMouseEnter={() => handleMouseEnter("product")}
                            onMouseLeave={() => handleMouseLeave("product")}
                            className={`${open["product"] ? "bg-hover" : ""} d-flex align-items-center h-100 `}
                        >
                            <div
                                className="fs-6 fw-bolder cs-nav-item nav-link"
                            >
                                <div className="d-flex">
                                    Product
                                    <div className={`${open["product"] ? "icon-hover" : "icon-hover-no"}`}>
                                        <i className="bi bi-arrow-down p-1"></i>
                                    </div>
                                </div>
                                <CollapseHeader open={open["product"]} setOpenProps={setOpenProps} type="product" data={link.product} />
                            </div>
                        </Nav.Item>

                        <Nav.Item
                            className="d-flex align-items-center h-100"
                        >
                            <Nav.Link href="#about-me" className="cs-nav-item fs-6 fw-bolder d-flex align-items-center h-100">
                                Solution
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item
                            className="d-flex align-items-center h-100"
                        >
                            <Nav.Link href="/pricing" className="cs-nav-item fs-6 fw-bolder d-flex align-items-center h-100">
                                Pricing
                            </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item
                            onMouseEnter={() => handleMouseEnter("pricing")}
                            onMouseLeave={() => handleMouseLeave("pricing")}
                            className="d-flex align-items-center h-100"
                        >
                            <div
                                className="fs-6 fw-bolder cs-nav-item nav-link"
                            >
                                <div className="d-flex">
                                    Pricing
                                    <div className={`${open["pricing"] ? "icon-hover" : "icon-hover-no"}`}>
                                        <i className="bi bi-arrow-down p-1"></i>
                                    </div>
                                </div>
                                <CollapseHeader open={open["pricing"]} setOpenProps={setOpenProps} type="pricing" data={link.pricing}/>
                            </div>
                        </Nav.Item> */}
                        <Nav.Item
                            onMouseEnter={() => handleMouseEnter("company")}
                            onMouseLeave={() => handleMouseLeave("company")}
                            className="d-flex align-items-center h-100"
                        >
                            <div
                                className="fs-6 fw-bolder cs-nav-item nav-link"
                            >
                                <div className="d-flex">
                                    Company
                                    <div className={`${open["company"] ? "icon-hover" : "icon-hover-no"}`}>
                                        <i className="bi bi-arrow-down p-1"></i>
                                    </div>
                                </div>
                                <CollapseHeader open={open["company"]} setOpenProps={setOpenProps} type="company" data={link.company} />
                            </div>
                        </Nav.Item>


                    </Nav>

                    <div className="ms-auto button-mobile">
                        <button className="button-secondary">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span className="ms-2">Login</span>
                        </button>
                        <Link href="#" className="button-primary ms-2">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span className="ms-2">Join Free</span>
                        </Link>
                    </div>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
