import { ReactNode } from "react";

import {
  Container,
  EmptyPlayer,
  BarProgress,
  ControlButtons,
  Slider,
  EmptySlider,
  PlayButton,
} from "./styles";

interface PlayerProps {
  children: ReactNode;
}

function Player() {
  return (
    <Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <EmptyPlayer>
        <strong>Selecione um podcast para ouvir</strong>
      </EmptyPlayer>

      <footer className="empty">
        <BarProgress>
          <span>00:00</span>
          <Slider>
            <EmptySlider />
          </Slider>
          <span>00:00</span>
        </BarProgress>

        <ControlButtons>
          <button type="button">
            <img src="/shuffle.svg" alt="Aleatory" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Play previous" />
          </button>
          <PlayButton>
            <img src="/play.svg" alt="Play" />
          </PlayButton>
          <button type="button">
            <img src="/play-next.svg" alt="Play next" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repeat" />
          </button>
        </ControlButtons>
      </footer>
    </Container>
  );
}

export default Player;
