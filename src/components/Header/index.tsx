import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  ActionsWrapper,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styled'

export function Header() {
  const itensCart = 3

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />

      <ActionsWrapper>
        <LocationButton>
          <MapPin weight="fill" />
          Jaboticabal, SP
        </LocationButton>

        <CartButton itemsquantity={itensCart}>
          <ShoppingCart weight="fill" />
        </CartButton>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
