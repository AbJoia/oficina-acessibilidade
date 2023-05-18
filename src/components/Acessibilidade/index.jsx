import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";

import "./style.css";

export function Acessibilidade() {
  const [acessibilityIsOpen, setAcessibilityIsOpen] = useState(false);
  const [outlineIsActive, setOutlineIsActive] = useState(false);
  const selectors = "h1, h2, p, a, span, li, label, input, button";
  const outlineStyle =
    "*:focus{outline: 5px solid var(--azul-primario) !important};";

  useEffect(() => {
    if (outlineIsActive) {
      const styleTag = document.createElement("style");
      styleTag.innerHTML = outlineStyle;
      document.head.insertAdjacentElement("beforeend", styleTag);
      return;
    }

    var elements = document.querySelectorAll("style");
    elements.forEach((element) => {
      if (element.innerHTML === outlineStyle) {
        element.remove();
      }
    });
  }, [outlineIsActive]);

  function handleSetOutline(event) {
    if (
      (event.nativeEvent instanceof KeyboardEvent && event.key === "Enter") ||
      event.nativeEvent instanceof PointerEvent
    ) {
      setOutlineIsActive(!outlineIsActive);
      return;
    }
  }

  function handleFontSize(updateValue) {
    var elements = document.querySelectorAll(selectors);
    elements.forEach((element) => {
      var value = window
        .getComputedStyle(element, null)
        .getPropertyValue("font-size")
        .split("px")[0];
      element.style.fontSize = +value +updateValue + "px";
    });
  }

  return (
    <Container
      fluid
      id="secao-acessibilidade"
      role="menuitem"
      aria-label="Seção de configurações de acessibilidade."
    >
      <Container>
        <Row>
          <Col className="d-flex justify-content-center justify-content-xl-start align-items-center">
            <img
              id="icone-acessibilidade"
              tabIndex={0}
              src={iconeAcessibilidade}
              alt="null"
            />
            <button
              id="botao-acessibilidade"
              tabIndex={0}
              role="button"
              aria-label="Abrir opções de acessibilidade."
              aria-pressed={acessibilityIsOpen ? "true" : "false"}
              onClick={(e) => setAcessibilityIsOpen(!acessibilityIsOpen)}
            >
              Acessibilidade{" "}
              {acessibilityIsOpen ? <BiUpArrow /> : <BiDownArrow />}
            </button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={acessibilityIsOpen ? "d-block" : "d-none"}>
          <Col className="d-flex justify-content-center justify-content-xl-between flex-wrap">
            <div className="p-2">
              <Form.Switch
                tabIndex={0}
                aria-checked={outlineIsActive}
                type="switch"
                label="Moldurar Elementos"
                checked={outlineIsActive}               
                aria-label="Ativar moldura mais destacadas aos elementos em foco"
                onClick={(e) => handleSetOutline(e)}
                onKeyDown={(e) => handleSetOutline(e)}
              />
              <div
                id="container-botoes"
                className="d-flex justify-content-xl-start justify-content-center gap-2 mb-2 mt-2"
              >
                <button
                  role="button"
                  aria-label="Diminuir tamanho do texto."
                  onClick={() => handleFontSize(-1)}
                >
                  -A
                </button>

                <button
                  role="button"
                  aria-label="Aumentar tamanho do texto."
                  onClick={() => handleFontSize(1)}
                >
                  +A
                </button>

                <button>
                  <img
                    id="icone-contraste"
                    src={iconeContrasteBranco}
                    alt="Icone para alterar contraste."
                  />
                </button>
              </div>
            </div>
            <nav>
              <ul
                tabIndex={0}
                aria-label="Navegação por atalhos no teclado"
                className="d-flex justify-content-center mt-3 flex-wrap gap-2"
              >
                <li>
                  <a href="#">Cabeçalho[1]</a>
                </li>
                <li>
                  <a href="#">Buscar Hotéis[2]</a>
                </li>
                <li>
                  <a href="#">Pontos Turísticos[3]</a>
                </li>
                <li>
                  <a href="#">Gastronomia[4]</a>
                </li>
                <li>
                  <a href="#">Newsletter[5]</a>
                </li>
                <li>
                  <a href="#">Rodapé[6]</a>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
