import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import {Container} from './styles';

export function Header(){
  const currentDate = format(new Date(), 'EEE, d MMM', {
    locale: ptBR
  });

  return(
    <Container>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </Container>
  );
}