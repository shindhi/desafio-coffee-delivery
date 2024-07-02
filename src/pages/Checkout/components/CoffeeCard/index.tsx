import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { ItemsCounter } from '../../../../components/ItemsCounter'
import {
  CoffeeCardContainer,
  CoffeeCardInfo,
  CoffeeCardDetails,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardType {
  id: string
  image: string
  title: string
  price: number
  quantity: number
}

type CoffeeCardProps = {
  coffee: CoffeeCardType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { incrementQuantityItem, decrementQuantityItem, removeItem } =
    useContext(CartContext)

  function handleIncrementQuantity() {
    incrementQuantityItem(coffee.id)
  }

  function handleDecrementQuantity() {
    decrementQuantityItem(coffee.id)
  }

  function handleRemoveItem() {
    removeItem(coffee.id)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <CoffeeCardInfo>
        <img src={coffee.image} alt={`Café ${coffee.title}`} />

        <CoffeeCardDetails>
          <h3>{coffee.title}</h3>
          <div>
            <ItemsCounter
              quantityItems={coffee.quantity}
              incrementQuantity={handleIncrementQuantity}
              decrementQuantity={handleDecrementQuantity}
            />

            <button onClick={handleRemoveItem}>
              <Trash />
              remover
            </button>
          </div>
        </CoffeeCardDetails>
      </CoffeeCardInfo>

      <span>R$ {coffee.price.toString().replace('.', ',').padEnd(4, '0')}</span>
    </CoffeeCardContainer>
  )
}
