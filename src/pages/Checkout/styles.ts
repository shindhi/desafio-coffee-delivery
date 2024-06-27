import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: row;
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
    border: 1px solid red;
    display: grid;
    /* grid-template-columns: minmax(20rem, 1fr) minmax(27.6rem, 1fr) minmax(
        6rem,
        1fr
      ); */
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

export const CoffeeCardWrapper = styled.div`
  form {
    display: grid;
    column-gap: 1.2rem;
    row-gap: 1.6rem;
    justify-content: start;
  }
`

export const MethodPaymentsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1.2rem;

  button {
    border: none;
    background: ${({ theme }) => theme['base-600']};
    padding: 1.6rem;
    text-transform: uppercase;
    font-size: 1.2rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme[`purple-400`]};
      font-size: 1.6rem;
    }
  }
`
