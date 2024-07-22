"use client";
import React from "react";
import { Accordion, Container } from "react-bootstrap";

interface FAQ {
    question: string;
    answers: string;
}

const listFAQs: FAQ[] = [
    {
        question: "Câu hỏi 1",
        answers: "Câu trả lời cho câu hỏi 1",
    },
    {
        question: "Câu hỏi 2",
        answers: "Câu trả lời cho câu hỏi 2",
    },
    {
        question: "Câu hỏi 3",
        answers: "Câu trả lời cho câu hỏi 3",
    },
    {
        question: "Câu hỏi 4",
        answers: "Câu trả lời cho câu hỏi 4",
    },
];

const FAQs: React.FC = () => {
    return (
        <div className="component-faqs section-py-80  border-top border-2">
            <Container>
                <div className="title pb-5">
                    <h1 className="text-center fs-1 fw-bolder">
                        Frequently Asked Questions
                    </h1>
                </div>
                <div className="list-faqs px-5">
                    <Accordion>
                        {listFAQs.map((FAQ, index) => (
                            <Accordion.Item
                                className="my-4 border rounded-1 overflow-hidden"
                                eventKey={`${index}`}
                                key={index}
                            >
                                <Accordion.Header>
                                    {FAQ.question}
                                </Accordion.Header>
                                <Accordion.Body>{FAQ.answers}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default FAQs;
