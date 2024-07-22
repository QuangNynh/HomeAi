import React from "react";
import { Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import "../scss/components/marquee.scss";
interface ImageContent {
    thumbnail: string;
    title: string;
    description: string;
}

interface ImageMarqueeProps {
    content: ImageContent[];
    direction: "left" | "right" | "up" | "down";
}

const MarqueeComponent: React.FC<ImageMarqueeProps> = ({
    content,
    direction,
}) => {
    return (
        <div className="marquee-component my-5">
            <Marquee direction={direction}>
                {content.map((content, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-4 p-4 border border-1 marquee-item mx-3"
                    >
                        <div className="d-flex flex-column gap-2 h-100">
                            <div className="thumbnail">
                                <Image
                                    src={content.thumbnail}
                                    className="object-fit-cover"
                                />
                            </div>
                            <h2 className="fs-5 fw-bolder marquee-title">
                                {content.title}
                            </h2>
                            <p className="fs-6 p-0 marquee-description">
                                {content.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
