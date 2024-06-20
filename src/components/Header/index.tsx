import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  ActionsWrapper,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />

      <ActionsWrapper>
        <LocationButton>
          <MapPin weight="fill" />
          Jaboticabal, SP
        </LocationButton>

        <CartButton>
          <ShoppingCart weight="fill" />
        </CartButton>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
