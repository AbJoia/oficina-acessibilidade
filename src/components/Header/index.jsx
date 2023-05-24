import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

import userIcon from "../../assets/img/usericon.svg";

import "./style.css";

export function Header() {
  const { altoContraste } = useContext(ThemeContext);

  return (
    <Container fluid className="header-container">
      <Container>
        <Row className="d-flex flex-lg-row p-1 justify-content-center">
          <Col className="d-flex mt-2 flex-row align-items-center justify-content-center justify-content-lg-start">
            <a
              href="#pontos-turisticos"
              aria-label="Saltar para o conteúdo principal"
            >
              <p tabIndex={0} id="header-title">
                SERRA<span>TOUR</span>
              </p>
            </a>
          </Col>
          <Col className="d-flex mt-2 align-items-center justify-content-center justify-content-lg-end">
            <nav role="navigation">
              <ul>
                <li>
                  <a href="#pontos-turisticos">Pontos Turísticos</a>
                </li>
                <li>
                  <a href="#gastronomia">Gastronomia</a>
                </li>
                <li>
                  <a href="#newsletter">Newsletter</a>
                </li>
                <li>
                  <div className="elipse">
                    <img
                      tabIndex={0}
                      src={userIcon}
                      alt="Icone ilustrativo representando um usuário"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
