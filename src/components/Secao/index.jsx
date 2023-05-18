import { Container, Row, Col } from "react-bootstrap";
import { Card } from "../Card";

import "./style.css";

export function Secao({
  id,
  titulo,
  descricao,
  backgroundColor,
  dados,
  accessKey,
}) {
  return (
    <Container
      fluid
      className="secao-container p-5"
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <Row>
          <Col>
            <h2 id={id} tabIndex={0} accessKey={accessKey}>
              {titulo}
            </h2>
            <div className="linha" />
            <p tabIndex={0}>{descricao}</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center justify-content-lg-between mt-2 flex-wrap">
            {dados?.map((dado, index) => {
              return <Card key={index} dado={dado} />;
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
