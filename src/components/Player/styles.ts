import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 4rem;
  width: 26.5rem;
  height: 100vh;

  background: ${props => props.theme.colors.purple_500};
  color: ${props => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;

  header{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  strong{
    font-family: Lexend, sans-serif;
    font-weight: 600;
  }

  footer{
    align-self: stretch;
    &.empty{
      opacity: 0.5;
    }
  }
`;

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 3.5px dashed ${props => props.theme.colors.purple_300};
  border-radius: 1.5rem;
  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0,0,0,0) 100%);

  padding: 4rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BarProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span{
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`;

export const Slider = styled.div`
  flex: 1;
`;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.purple_300};
  border-radius: 2px;
`;

export const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button{
    background: transparent;
    border: 0;
    font-size: 0;
  }
`;

export const PlayButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.purple_400} !important;
`;