import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  ActionsWrapper,
  CartLink,
  HeaderContainer,
  LocationButton,
} from './styled'

export function Header() {
  const itensCart = 0

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
      </NavLink>

      <ActionsWrapper>
        <LocationButton>
          <MapPin weight="fill" />
          Jaboticabal, SP
        </LocationButton>

        <CartLink to={'/checkout'} itemsquantity={itensCart}>
          <ShoppingCart weight="fill" />
        </CartLink>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
