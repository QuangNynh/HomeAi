import { Container } from "react-bootstrap";


interface AboutData {
    title: string;
    sologant: string;
}

const AboutPage: React.FC<AboutData> = (props) => {

    return (
        <Container>
            <div className="py-5">
                <p className="text-center fs-5 text-danger">
                    {props.title}
                </p>
                <p className="text-center fs-1">{props.sologant}</p>
            </div>

        </Container>
    )
}

export default AboutPage;