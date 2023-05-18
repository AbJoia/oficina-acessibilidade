import {Container, Row, Col} from "react-bootstrap";

import "./style.css";

export function Footer(){
    return(
        <Container tabIndex={0} accessKey="6" fluid className="footer-container">
            <Row>
                <Col className="d-flex p-3 justify-content-center align-items-center">
                    <span tabIndex={0}>Ciclo de palestras Residência em TIC Software 2023.1</span>
                </Col>
            </Row>
        </Container>
    )
}
