import styled, { css } from 'styled-components'

export const Container = styled.figure<{ handleButton: boolean }>`
  display: flex;
  max-width: 330px;
  overflow: hidden;
  border-radius: 5px;
  height: fit-content;

  img {
    object-fit: cover;
    animation-play-state: 'paused';
    width: 100%;
    transition: transform 300ms ease;

    ${({ handleButton }) =>
      handleButton &&
      css`
        cursor: pointer;
      `}

    &:hover {
      transform: ${(props) => (props.handleButton ? 'scale(1.2)' : 'none')};
    }
  }
`
