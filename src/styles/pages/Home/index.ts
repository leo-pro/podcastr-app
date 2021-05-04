import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  padding: 0 2.5rem;
  width: 100%;
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;
  overflow-x: hidden;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const LatestEpisodes = styled.div`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  li {
    background: ${(props) => props.theme.colors.CardBackground};
    border: 1px solid ${(props) => props.theme.colors.BorderLineColor};
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;

    display: flex;
    align-items: center;

    img {
      width: 6rem !important;
      height: 6rem !important;
      border-radius: 1rem;
    }

    .episodeDetails {
      flex: 1;
      margin-left: 1rem;

      a {
        display: block;
        color: ${(props) => props.theme.colors.headings};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;

        &:hover {
          text-decoration: underline;
        }
      }

      p {
        font-size: 0.875rem;
        margin-top: 0.5rem;
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.875rem;

        &:last-child {
          margin-left: 0.5rem;
          padding-left: 0.5rem;
          position: relative;

          &::before {
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: #ddd;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
    button {
      position: absolute;
      right: 2rem;
      bottom: 2rem;

      width: 2.5rem;
      height: 2.5rem;
      background: ${(props) => props.theme.colors.CardPlayButtonBackground};
      border: 1px solid ${(props) => props.theme.colors.BorderLineColor};
      border-radius: 0.675rem;
      font-size: 0;

      transition: filter 0.2s;

      img {
        width: 1.5rem !important;
        height: 1.5rem !important;
      }

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;

export const EpisodeDetails = styled.div``;

export const AllEpisodes = styled.div`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.BorderLineColor};
    }

    th {
      color: ${(props) => props.theme.colors.text};
      text-transform: uppercase;
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
    }

    td {
      font-size: 0.875rem;

      img {
        width: 2.5rem !important;
        height: 2.5rem !important;
        border-radius: 0.5rem;
      }

      a {
        color: ${(props) => props.theme.colors.headings};
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 1.4rem;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        font-size: 0;

        width: 2rem;
        height: 2rem;
        background: ${(props) => props.theme.colors.CardPlayButtonBackground};
        border: 1px solid ${(props) => props.theme.colors.BorderLineColor};
        border-radius: 0.675rem;

        transition: filter 0.3s;

        img {
          width: 1.25rem !important;
          height: 1.25rem !important;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`;
