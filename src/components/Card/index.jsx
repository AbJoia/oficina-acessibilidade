import {useContext} from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Card as CardBootstrap } from "react-bootstrap";

import "./style.css";

export function Card({ dado }) {
  const {altoContraste} = useContext(ThemeContext);

  return (
    <CardBootstrap
      tabIndex={0}
      aria-label={dado?.titulo}
      style={{ width: "22rem" }}
      className="mt-3 mt-xl-0 card"
    >
      <CardBootstrap.Img className={altoContraste? "imagem-escala-cinza": ""}
        tabIndex={0}
        variant="top"
        src={dado?.imagem.url}
        alt={dado?.imagem.alt}
      />
      <CardBootstrap.Body>
        <CardBootstrap.Title className="titulo">
          {dado?.titulo}
        </CardBootstrap.Title>
        <div className="linha-card" />

        <CardBootstrap.Text tabIndex={0}>{dado?.texto}</CardBootstrap.Text>
      </CardBootstrap.Body>
    </CardBootstrap>
  );
}
