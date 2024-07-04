import { css, styled } from 'styled-components'

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

export const CoffeeOrderWrapper = styled.form``

export const CardDeliveryDetails = styled.div`
  display: grid;
  grid-template-columns: minmax(20rem, 1fr) minmax(27.6rem, 1fr) 6rem;
  grid-template-rows: repeat(4, 1fr);
  gap: 1.6rem;

  div#cep {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  div#street {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  div#number {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  /* input complemento */
  > div {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }

  div#neighborhood {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  div#city {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  div#uf {
    grid-column: 3 / 4;
    grid-row: 4 / 5;
  }

  span {
    font-size: 1.4rem;
    padding-inline: 0.8rem;
    color: red;
  }
`

export const MethodPaymentsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1.2rem;
  grid-template-columns: repeat(3, 1fr);
`

interface OptionPaymentProps {
  selected: boolean
}

export const OptionPayment = styled.label<OptionPaymentProps>`
  padding: 1.6rem;
  width: 100%;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme['base-600']};
  color: ${({ theme }) => theme['base-300']};
  text-transform: uppercase;
  transition: all 0.2s;
  font-size: 1.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    background: ${({ theme }) => theme['base-500']};
  }

  input {
    display: none;
  }

  ${({ selected = true }) =>
    selected &&
    css`
      background: ${({ theme }) => theme['purple-100']};
      border: 1px solid ${({ theme }) => theme['purple-400']};
    `};

  svg {
    color: ${({ theme }) => theme['purple-400']};
    font-size: 1.6rem;
  }
`

export const CoffeeCardWrapper = styled.div`
  width: 44.8rem;
  max-width: 100%;
  border-radius: 6px 44px;

  > div {
    border-radius: 6px 44px;
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
  padding: 1.2rem 0;
  background: ${({ theme }) => theme['yellow-400']};
  margin-top: 2.4rem;
  border-radius: 6px;

  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-weight: 700;

  cursor: pointer;
`

export const AlertErrorMessage = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  padding-inline: 0.8rem;
  color: red;
`
