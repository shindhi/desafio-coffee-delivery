import styled from 'styled-components'

export const HeaderCardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  svg {
    color: ${({ theme }) => theme['yellow-400']};
    font-size: 2.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    span {
      color: ${({ theme }) => theme['base-200']};
      font-size: 1.6rem;
      line-height: 130%;
    }

    p {
      color: ${({ theme }) => theme['base-300']};
      font-size: 1.4rem;
    }
  }
`
