import React from "react";
import { Container, Image } from "react-bootstrap";

import "../scss/components/founder.scss";
import Link from "next/link";
interface founder {
    avatar: string;
    name: string;
    position: string;
    contact: {
        facebook: string;
    };
}

const listFounder: founder[] = [
    {
        avatar: "./images/founder/02.png",
        name: "Duy",
        position: "CEO",
        contact: { facebook: "https://www.facebook.com/ttnnguyenad2707/" },
    },
    {
        avatar: "./images/founder/02.png",
        name: "Duy",
        position: "CEO",
        contact: { facebook: "https://www.facebook.com/ttnnguyenad2707/" },
    },
    {
        avatar: "./images/founder/02.png",
        name: "Duy",
        position: "CEO",
        contact: { facebook: "https://www.facebook.com/ttnnguyenad2707/" },
    },
    {
        avatar: "./images/founder/02.png",
        name: "Duy",
        position: "CEO",
        contact: { facebook: "https://www.facebook.com/ttnnguyenad2707/" },
    },
    {
        avatar: "./images/founder/02.png",
        name: "Duy",
        position: "CEO",
        contact: { facebook: "https://www.facebook.com/ttnnguyenad2707/" },
    },
];

const Founder: React.FC = () => {
    return (
        <div className="component-founder section-py-80">
            <Container>
                <h1 className="fs-0 text-center fw-bolder mb-5">
                    Meet the artists
                </h1>
                <div className="list-founder pt-4">
                    {listFounder.map((founder, index) => (
                        <div
                            key={index}
                            className={`founder rounded-4 d-flex flex-column gap-2 align-items-center ${
                                index % 2 === 1 ? "mt-5" : ""
                            } `}
                        >
                            <Image
                                src={founder.avatar}
                                width={`100%`}
                                height={200}
                                className="rounded-4 mb-3"
                            />
                            <div className="founder-name">{founder.name}</div>
                            <div className="founder-position">
                                {founder.position}
                            </div>
                            <div className="founder-contact d-flex justify-content-between w-50">
                                <Link
                                    href={founder.contact.facebook}
                                    target="_blank"
                                >
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link
                                    href={founder.contact.facebook}
                                    target="_blank"
                                >
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link
                                    href={founder.contact.facebook}
                                    target="_blank"
                                >
                                    <i className="bi bi-twitter"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Founder;
