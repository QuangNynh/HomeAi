"use client";

import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Pricing {
    type: string;
    pricePerMonth: number;
    pricePerYear: number;
    description: string;
    character: string[];
}

const PricingList: Pricing[] = [
    {
        type: "Free",
        pricePerMonth: 0,
        pricePerYear: 0,
        description: "100 credits",
        character: [
            "Can't Buy More Credits ",
            " Can't upload Model Image in Virtual Dressing Room ",
            "Can't upload folder of image in Product Image Descriptions",
            "Can't upload folder of image in Product Catalog",
            "3 image project 3 content writing project",
            "Limited image and content writing options",
        ],
    },
    {
        type: "Standard",
        pricePerMonth: 9.9,
        pricePerYear: 100,
        description: "600 Credits/Month",
        character: [
            "Credit reset to 600 every month starting from your subcription date .Buy more as needed  ",
            "Upload Model Image in Virtual Dressing Room",
            "Upload folder of image in Product Image Descriptions",
            " Upload folder of maximum 50 image in Product Catalog",
            "Unlimited edit image and content writing project",
            "Unlimited edit image and content writing project",
        ],
    },
    {
        type: "Pro",
        pricePerMonth: 24.9,
        pricePerYear: 500,
        description: "2000 Credits/Month",
        character: [
            "2000 Credits/Month",
            "Upload Model Image in Virtual Dressing Room",
            "Upload folder of image in Product Image Descriptions",
            "Upload folder of maximum 100 image in Product Catalog",
            "Unlimited edit image and content writing project",
            "Unlimited edit image and content writing options",
        ],
    },
];

const PricingComponent = () => {

    const [price, setPrice] = useState(1);

    return (
        <Container className="margin-top-5">
            <h1 className="text-center">Choose the best plan for you</h1>
            <div className="d-flex justify-content-center w-100 py-3">
                <div className="bg-secondary-subtle border-50">
                    <button className={`${price == 1 ? "active-price" : ""} button-pricing`} onClick={() => setPrice(1)}>
                        Monthly
                    </button>
                    <button className={`${price == 2 ? "active-price" : ""} button-pricing`} onClick={() => setPrice(2)}>
                        Yearly <span className="text-info-price">-20% off</span>
                    </button>
                </div>
            </div>
            <div className="component-pricing">
                <div className="pricing">
                    {PricingList.map((Pricing, index) => (

                        <div key={index} className="pricing-item border shadow h-100 p-5 rounded-4 d-flex flex-column ">
                            <div className="d-flex flex-column gap-3">
                                <h2 className="fs-2 fw-bolder ">
                                    {Pricing.type}
                                </h2>
                                <h3 className="fs-1 fw-normal">
                                   ${price == 1 ?  Pricing.pricePerMonth :  Pricing.pricePerYear}
                                    <span className="fs-4 fw-bolder">
                                        /month
                                    </span>
                                    {""}
                                </h3>
                                <p className="fs-5 fw-medium">
                                    {Pricing.description}
                                </p>
                            </div>
                            <div className=" height-pricing d-flex flex-column justify-content-between flex-grow-1">
                                <div className=" d-flex flex-column gap-2 py-3 text-14">
                                    {Pricing.character.map(
                                        (character, index) => (
                                            <div
                                                className="d-flex gap-2 "
                                                key={index}
                                            >
                                                <i className="bi bi-check-circle-fill fs-6"></i>
                                                {character}
                                            </div>
                                        )
                                    )}
                                </div>
                                <button className="button-secondary ">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </Container>
    );
};

export default PricingComponent;
