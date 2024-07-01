import { styled } from 'styled-components'

export const ItemsCounterContainer = styled.div`
  /* max-width: 7.2rem; */
  width: fit-content;
  background: ${({ theme }) => theme['base-600']};
  border-radius: 0.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;

  > button {
    border: none;
    background: transparent;
    padding: 1.2rem 0.8rem;
    line-height: 0;

    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme[`purple-400`]};
      font-size: 1.4rem;
    }
  }

  button:disabled {
    opacity: 0.5;
  }

  > span {
    line-height: 0;
  }
`
