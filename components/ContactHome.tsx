"use client";
import React from "react";
import { Form, Image } from "react-bootstrap";

import "../scss/components/contactHome.scss";
import Link from "next/link";
const ContactHome: React.FC = () => {
    return (
        <div className="component-contact-home rounded-5">
            <div className="py-4 px-4 text  ">
                <h1 className="fs-0 text-center header mb-4">Be a Pioneer!</h1>
                <h6 className="fs-5 text-center opacity-50 subheader mb-4">
                    Ready to level up? Sign up for free and see the difference
                </h6>
                <div className="d-flex gap-3 justify-content-center">
                    <Link href="#" className="button-primary">Free Trial</Link>
                    <Link href="/pricing" className="button-secondary">
                        View pricing
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactHome;
