import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.colors.HeaderBackground};
  height: 6.5rem;

  display: flex;
  align-items: center;

  padding: 2rem 4rem;

  border-bottom: 1px solid
    ${(props) => props.theme.colors.HeaderBorderLineColor};

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid
      ${(props) => props.theme.colors.HeaderBorderLineColor};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }

  svg {
    margin-left: 20px;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.purple_300};
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.purple_500};
    }
  }
`;
