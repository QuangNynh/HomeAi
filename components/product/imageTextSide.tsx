import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

interface ImageTextSideProps {
    side: number;
    title: string;
    description: string;
    thumbnail: string;
}
const ImageTextSide: React.FC<ImageTextSideProps> = (props) => {
    return (
        <div className="component-image-text-side my-5">
            <Container className="" >
                <Row>
                    <Col md={6} className={`order-${props.side}`}>
                        <div className="d-flex gap-3 flex-column justify-content-center h-100">
                            <h3 className="fs-3 fw-bolder">{props.title}</h3>
                            <p className="">{props.description}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Image
                            src={props.thumbnail}
                            width={`100%`}
                            height={`100%`}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImageTextSide;
