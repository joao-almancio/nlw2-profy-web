import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/54258989?s=460&u=60a64bde3498be2fd0a64d4899f05f6f3dd4da71&v=4"
          alt="Joao Carlos Almancio"
        />
        <div>
          <strong>João Carlos Almancio</strong>
          <span>Contrabaixo</span>
        </div>
      </header>
      <p>
        Músico há mais de 20 anos doido de maluco.
        <br />
        <br />
        Experiente em práticas de grupo.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
