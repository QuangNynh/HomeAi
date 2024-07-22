import React from "react";
import { Container, Image, Stack } from "react-bootstrap";

import "../scss/components/imageText.scss";
import Link from "next/link";
const ImageText: React.FC = () => {
    return (
        <div>
            <div className="component-image-text">
                <Image
                    src="./images/landing-page/home_wall.webp"
                    height={650}
                    width={`100%`}
                    className="object-fit-cover image"
                />
                <div className="bg-white py-4 px-4 rounded text w-75">
                    <h6 className="text-center opacity-50 subheader mb-4">
                        VALUE DELIVERED
                    </h6>
                    <h1 className="text-center header">
                        Create 10x more{" "}
                        <span className="text-color-violet">personalized </span>{" "}
                        Model, product and content faster
                    </h1>
                </div>
            </div>
            <Stack className=" py-5 gap-3">
                <p className="text-center">-----------------------------------------</p>
                <h1 className="text-center fw-bolder text-color-violet">
                    Explore more AI tools
                </h1>
                <h4 className="text-center text-color-violet">
                    Ready to level up? Sign up for free and see the tool.
                </h4>
                <div className="d-flex justify-content-center">
                    <Link href="#">
                        <button className="button-secondary ms-2">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span className="ms-2">Get Started</span>
                        </button>
                    </Link>
                    <Link href="#" className="button-primary ms-2">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span className="ms-2">View Pricing</span>
                    </Link>
                </div>
            </Stack>
        </div>
    );
};

export default ImageText;
