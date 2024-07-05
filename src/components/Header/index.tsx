import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import {
  ActionsWrapper,
  CartLink,
  HeaderContainer,
  LocationButton,
} from './styled'

export function Header() {
  const { cart } = useContext(CartContext)
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0)
  const emptyCart = cart.length === 0

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />
      </Link>

      <ActionsWrapper>
        <LocationButton>
          <MapPin weight="fill" />
          Jaboticabal, SP
        </LocationButton>

        <CartLink
          to={'/checkout'}
          itemsquantity={totalCartItems}
          aria-disabled={emptyCart}
        >
          <ShoppingCart weight="fill" />
        </CartLink>
      </ActionsWrapper>
    </HeaderContainer>
  )
}
