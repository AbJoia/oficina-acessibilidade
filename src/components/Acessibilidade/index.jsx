import { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import iconeAcessibilidade from "../../assets/img/acessibilidadeIcon.png";
import iconeContrasteBranco from "../../assets/img/contrastIconWhite.png";
import { ThemeContext } from "../../context/ThemeContext";

import "./style.css";

export function Acessibilidade() {
  const { altoContraste, handleSetAltoContraste } = useContext(ThemeContext);  
  const [outlineIsActive, setOutlineIsActive] = useState(false);
  const selectors = "h1, h2, p, a, span, li, label, input, button, .titulo";
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

  useEffect(() => {
    if (altoContraste) {
      document.documentElement.style.setProperty(
        "--backgroud-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--font-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--backgroud-section-color-variant",
        "var(--preto-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color",
        "var(--branco-primario)"
      );
      document.documentElement.style.setProperty(
        "--title-color-variant",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--hover-color",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--accessibility-background-color",
        "var(--preto-secundario)"
      );
      document.documentElement.style.setProperty(
        "--button-color",
        "var(--amarelo-primario)"
      );
      document.documentElement.style.setProperty(
        "--default-border-color",
        "var(--amarelo-primario)"
      );
      return;
    }

    document.documentElement.style.setProperty(
      "--backgroud-color",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--font-color",
      "var(--preto-primario)"
    );
    document.documentElement.style.setProperty(
      "--font-color-variant",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--backgroud-section-color",
      "var(--branco-primario)"
    );
    document.documentElement.style.setProperty(
      "--backgroud-section-color-variant",
      "var(--branco-secundario)"
    );
    document.documentElement.style.setProperty(
      "--title-color",
      "var(--verde-primario)"
    );
    document.documentElement.style.setProperty(
      "--title-color-variant",
      "var(--preto-primario)"
    );
    document.documentElement.style.setProperty(
      "--hover-color",
      "var(--verde-primario)"
    );
    document.documentElement.style.setProperty(
      "--accessibility-background-color",
      "var(--cinza-claro)"
    );
    document.documentElement.style.setProperty(
      "--button-color",
      "var(--verde-escuro)"
    );
    document.documentElement.style.setProperty(
      "--default-border-color",
      "var(--preto-secundario)"
    );
    return;
  }, [altoContraste]);

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
      element.style.fontSize = +value + updateValue + "px";
    });
  }

  function handleTheme() {
    handleSetAltoContraste(!altoContraste);
    return;
  }

  return (
    <Container
      fluid      
      id="secao-acessibilidade"
      role="menuitem"
      aria-label="Seção de configurações de acessibilidade."
    >
      <Row>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-between flex-wrap"
        >
          <nav id="atalhos-navegacao">
            <ul              
              aria-label="Navegação por atalhos no teclado"
              className="d-flex justify-content-center mt-3 flex-wrap gap-2"
            >
              <li>
                <a href="#conteudo">Ir para conteúdo[1]</a>
              </li>
              <li>
                <a href="#menu">Ir para menu[2]</a>
              </li>
              <li>
                <a href="#footer">Ir para rodapé[3]</a>
              </li>
            </ul>
          </nav>
        </Col>
        <Col
          xl={6}
          className="d-flex justify-content-center justify-content-xl-end gap-3 align-items-center mb-2 mb-xl-0"
        >
          <div className="p-2">
            <img
              id="icone-acessibilidade"
              tabIndex={0}
              src={iconeAcessibilidade}
              alt="Icone mundial de acessibilidade."
            />
          </div>
          <Form.Switch
            tabIndex={0}
            aria-checked={outlineIsActive}
            type="switch"
            label="Moldurar Elementos"
            checked={outlineIsActive}
            aria-label="Ativar moldura mais destacadas aos elementos em foco"
            onChange={(e) => handleSetOutline(e)}
            onKeyDown={(e) => handleSetOutline(e)}
          />
          <div id="container-botoes">
            <button
              role="button"
              id="diminuir"
              aria-label="(-A) Diminuir tamanho do texto."
              onClick={() => handleFontSize(-1)}
            >
              -A
            </button>

            <button
              role="button"
              aria-label="(+A) Aumentar tamanho do texto."
              onClick={() => handleFontSize(1)}
            >
              +A
            </button>

            <button
              role="button"
              aria-label="Ativar alto contraste"
              aria-pressed={altoContraste}
              onClick={handleTheme}
            >
              <img
                id="icone-contraste"
                src={iconeContrasteBranco}
                alt="Icone para alterar contraste."
              />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
