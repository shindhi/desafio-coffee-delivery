import { Minus, Plus } from 'phosphor-react'
import { ItemsCounterContainer } from './styled'

interface ItemsCounterProps {
  quantityItems: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function ItemsCounter({
  quantityItems,
  incrementQuantity,
  decrementQuantity,
}: ItemsCounterProps) {
  const isDisabled = quantityItems === 1

  return (
    <ItemsCounterContainer>
      <button onClick={decrementQuantity} disabled={isDisabled}>
        <Minus weight="bold" />
      </button>
      <span>{quantityItems}</span>
      <button onClick={incrementQuantity}>
        <Plus weight="bold" />
      </button>
    </ItemsCounterContainer>
  )
}
