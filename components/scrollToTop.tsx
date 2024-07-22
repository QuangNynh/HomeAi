"use client";
import React, { useState, useEffect } from "react";

import "../scss/components/scrollToTop.scss";

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="button-primary rounded-4"
                >
                    <i className="bi bi-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
