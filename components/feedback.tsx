import React, { useState } from "react";
import Marquee from "react-fast-marquee";

interface Feedback {
    author: string;
    job: string;
    title: string;
    description: string;
    star: number;
}

interface FeedbackProps {
    Feedbacks: Feedback[];
    direction: "left" | "right";
}

const Feedback: React.FC<FeedbackProps> = ({ Feedbacks, direction }) => {
    return (
        <div className="component-feedback">
            <Marquee direction={direction}>
                {Feedbacks.map((feedback, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-4 p-4 border border-1 feedback-item mx-3"
                    >
                        <div className="d-flex flex-column gap-2 h-100">
                            <h3 className="">{feedback.title}</h3>
                            <p>{feedback.description}</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Feedback;
