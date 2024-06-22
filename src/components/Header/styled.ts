import { LinkHTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`

interface CartLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  itemsquantity: number
}

export const CartLink = styled(NavLink)<CartLinkProps>`
  text-decoration: none;
  background: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};
  line-height: 0;
  padding: 0.8rem;
  border-radius: 6px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ itemsquantity, theme }) =>
    itemsquantity > 0 &&
    `
  &::after {
    content: '${itemsquantity}';
    position: absolute;
    top: calc(1rem - 2rem);
    right: calc(1rem - 2rem);
    width: 2rem;
    height: 2rem;
    background: ${theme['yellow-700']};
    color: ${theme.white};
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50%;
    line-height: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  `}

  > svg {
    font-size: 2.2rem;
  }
`

export const LocationButton = styled.button`
  background: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-700']};
  border: none;
  line-height: 0;
  padding: 0.8rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  cursor: pointer;

  svg {
    font-size: 2.2rem;
  }
`
