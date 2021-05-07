import { useContext } from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { BiSun, BiMoon } from "react-icons/bi";

import { useTheme } from "../../hooks/useTheme";

import { Container } from "./styles";

export function Header() {
  const { switchTheme, theme } = useTheme();

  const currentDate = format(new Date(), "EEE, d MMM", {
    locale: ptBR,
  });

  return (
    <Container>
      {theme.title === "light" ? (
        <img src="/logo.svg" alt="Podcastr" />
      ) : (
        <img src="/logo-white.svg" alt="Podcastr" />
      )}

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>

      <a onClick={switchTheme}>
        {theme.title === "light" ? <BiMoon /> : <BiSun />}
      </a>
    </Container>
  );
}
