import { useContext } from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { ThemeContext } from "styled-components";

import { BiSun, BiMoon } from "react-icons/bi";

import { Container } from "./styles";

interface HeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);

  const currentDate = format(new Date(), "EEE, d MMM", {
    locale: ptBR,
  });

  return (
    <Container>
      {title === "light" ? (
        <img src="/logo.svg" alt="Podcastr" />
      ) : (
        <img src="/logo-white.svg" alt="Podcastr" />
      )}

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <a onClick={toggleTheme}>{title === "light" ? <BiMoon /> : <BiSun />}</a>
    </Container>
  );
}
