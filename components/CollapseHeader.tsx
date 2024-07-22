"use client";
import React, { useEffect, useRef, useState } from "react";
import { Collapse, Form, Image, Nav } from "react-bootstrap";

import "../scss/components/contactHome.scss";
import Link from "next/link";

interface CollapseHeaderProps {
    open: boolean;
    setOpenProps: (key: string, value: boolean) => void;
    type: string;
    data:{
    href: string;
    title: string;
    poster: string;
    src: string;
    titlevideo: string;
}[];
}
interface LinkItem {
    href: string;
    title: string;
    poster: string;
    src: string;
    titlevideo: string;
}



const CollapseHeader: React.FC<CollapseHeaderProps> = ({ open, setOpenProps, type, data }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [indexHover, setIndexHover] = useState<number | null>(null);
    const [videoNew, setVideoNew] = useState("/images/dropdown-header/optimised.mp4")
    const [videos, setVideos] = useState<{
        poster: string;
        src: string;
        titlevideo: string;
        tryit: string;
    }>({
        poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
        src: "/images/dropdown-header/optimised.mp4",
        titlevideo: "Try on clothes online and see how different outfits look on you.",
        tryit: "Try it free now",
    });

    const handleHover = (item: LinkItem, index: number) => {
        setIndexHover(index);
        setVideos({
            poster: item.poster,
            src: item.src,
            titlevideo: item.titlevideo, // Adjust this if needed
            tryit: "", // Adjust this if needed
        });

    }

    const handleCloseHover = () => {
        setIndexHover(null);
        setVideoNew("/images/dropdown-header/5sfacetions.mp4");
        setVideos({
            poster: "https://d3phaj0sisr2ct.cloudfront.net/site/videos/homepage/RW_WebMain_HERO_poster.webp",
            src: "/images/dropdown-header/optimised.mp4",
            titlevideo: "Try on clothes online and see how different outfits look on you.",
            tryit: "Try it free now",
        });

    }
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [videos.src]);


    return (
        <>

            <div className={`menu-kkkkk ${open ? "open" : ""}`}>
                <div className="quang-nynh">
                    <div className="video-dropdown">
                        <div className="item-dropdown">
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                poster={videos.poster}
                            >
                                {/* <source src="/images/dropdown-header/optimised.webp" type="video/webm" /> */}
                                <source src={videos.src} type="video/mp4" />
                            </video>
                            <div className="fs-7 fw-medium text-black pt-2">{videos.titlevideo}</div>
                            {videos.tryit ? <Nav.Link href="/login" className="fs-6 fw-normal p-0">Try it free now</Nav.Link> : <></>}
                            {/* <Nav.Link href="/login" className="fs-6 fw-normal p-0">Try it free now</Nav.Link> */}
                        </div>
                    </div>
                    <div className="vr"></div>
                    <div className="ai-tools">
                        <p className="text-secondary">AI Tools</p>
                        <div>
                            {
                                data.map((item, index) => (
                                    <Nav.Link key={index} href={item.href} className={`${indexHover == index ? "text-primary" : ""}  fs-5 fw-medium p-1 `} onMouseEnter={() => handleHover(item, index)} onMouseLeave={handleCloseHover}>
                                        {indexHover == index ? <i className="bi bi-arrow-right fs-4 text-primary"></i> : <></>}
                                        {item.title}
                                    </Nav.Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="opacity-header" onMouseEnter={() => setOpenProps(type, false)}></div>

            </div>

        </>
    );
};

export default CollapseHeader;
