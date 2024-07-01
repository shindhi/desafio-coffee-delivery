import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  padding-bottom: 2.4rem;

  gap: 5rem;
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  > span {
    color: ${({ theme }) => theme['base-300']};
    font-weight: 800;
    white-space: nowrap;
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme['base-600']};
    padding-top: 2.4rem;
  }
`

export const CoffeeCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }
`

export const CoffeeCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }

  button {
    border: none;
    background: ${({ theme }) => theme['base-600']};
    line-height: 0;
    padding: 0.8rem;
    border-radius: 6px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    > svg {
      color: ${({ theme }) => theme['purple-400']};
    }
  }
`
