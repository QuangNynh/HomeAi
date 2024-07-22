import React from "react";
import { Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";

import "../scss/components/marquee.scss";
interface ImageContent {
    thumbnail: string;

}

interface ImageMarqueeIconProps {
    content: ImageContent[];
    direction: "left" | "right" | "up" | "down";
}

const MarqueeIcon: React.FC<ImageMarqueeIconProps> = ({
    content,
    direction,
}) => {
    return (
        <div className="marquee-icon  my-5">
            <Marquee direction={direction} >
                {content.map((content, index) => (
                    <div
                        key={index}
                        className=" mx-5 marquee-item"
                    >
                        <Image
                            src={content.thumbnail}
                            className="object-fit-cover"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeIcon;
