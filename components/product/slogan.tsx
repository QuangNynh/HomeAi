import { Container, Image } from "react-bootstrap";

const Slogan = () => {
    return (
        <div className="component-slogan section-py-80">
            <Container className="d-flex justify-content-center">
                <div className="d-flex flex-column gap-3 align-items-center ">
                    <p className="fs-3 text-center">
                        Cuộc đời mình là do chính mình quyết định. Con đường đã
                        vạch ra, dù khó đến cũng cố gắng đi đến cùng. Bỏ cuộc
                        sớm thì làm sao gặt hái được quả ngọt? Chiến thắng đẹp
                        nhất là chiến thắng chính mình, để mình tiến bộ hơn,
                        vươn xa hơn.
                    </p>
                    <div className="author">
                        <div className="d-flex gap-2 align-items-center">
                            <div className="avatar">
                                <Image
                                    src="/images/product-tagging/author-slogan.jpg"
                                    className="rounded-5"
                                    width={70}
                                    height={70}
                                    alt=""
                                />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <div className="fs-5 fw-bolder">
                                        Trọng Duy{" "}
                                    </div>
                                    <div className="fs-6 opacity-75">
                                        Beginning October 4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Slogan;
