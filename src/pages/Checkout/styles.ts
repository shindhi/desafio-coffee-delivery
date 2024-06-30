import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: row;
  gap: 3.2rem;
`

export const TitleSection = styled.h2`
  color: ${({ theme }) => theme['base-200']};
  font-size: 1.8rem;
  font-family: 'Baloo 2', cursive;
`

export const CardContainer = styled.div`
  background: ${({ theme }) => theme['base-800']};
  border-radius: 0.8rem;
  margin-top: 1.5rem;
  padding: 4rem;

  display: grid;
  gap: 1.5rem;
`

export const CoffeeInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.4rem;
  padding: 1.2rem;
  background: ${({ theme }) => theme['base-700']};
  color: ${({ theme }) => theme['base-300']};
  font-size: 1.4rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme['base-400']};
  }
`

export const InputOptionalWrapper = styled.div`
  position: relative;

  &::after {
    content: attr(data-optional);
    font-style: italic;
    position: absolute;
    right: 1.2rem;
    top: 50%;
    font-size: 1.4rem;
    transform: translateY(-50%);
    color: ${({ theme }) => theme['base-400']};
  }
`

export const CoffeeOrderWrapper = styled.div`
  form {
    display: grid;
    grid-template-columns: minmax(20rem, 1fr) minmax(27.6rem, 1fr) 6rem;
    grid-template-rows: 4;
    gap: 1.2rem;

    input#cep {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    input#rua {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
    }

    input#numero {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    /* input complemento */
    > div {
      grid-column: 2 / 4;
      grid-row: 3 / 4;
    }

    input#bairro {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }

    input#cidade {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }

    input#uf {
      grid-column: 3 / 4;
      grid-row: 4 / 5;
    }
  }
`

export const MethodPaymentsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1.2rem;
  grid-template-columns: repeat(3, 1fr);

  button {
    border: none;
    background: ${({ theme }) => theme['base-600']};
    padding: 1.6rem;
    text-transform: uppercase;
    font-size: 1.2rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme[`purple-400`]};
      font-size: 1.6rem;
    }
  }
`

export const CoffeeCardWrapper = styled.div`
  border-radius: 6px 44px;

  > div {
    border-radius: 6px 44px;
  }
`

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5rem;
  padding-bottom: 2.4rem;

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
    gap: 0.4rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;

    > svg {
      color: ${({ theme }) => theme['purple-400']};
    }
  }
`

export const SummaryOfValues = styled.div`
  border-top: 1px solid ${({ theme }) => theme['base-600']};
  padding-top: 2.4rem;
  padding-top: 2.4rem;
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: space-between;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 1.6rem;
    }
  }

  div:last-child {
    font-weight: 700;
    font-size: 2rem;
    color: ${({ theme }) => theme['base-200']};
  }
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme['yellow-400']};
  color: ${({ theme }) => theme.white};
  padding: 1.2rem 0;
  border-radius: 6px;
  text-transform: uppercase;
  margin-top: 2.4rem;
  font-weight: 700;
`
