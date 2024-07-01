import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { ItemsCounter } from '../../../../components/ItemsCounter'
import {
  ActionsWrapper,
  AddToCartButton,
  BuyContainer,
  CardContainer,
  Description,
  Price,
  Tags,
  Title,
} from './styled'
import { CartContext } from '../../../../contexts/CartContext'

export interface CoffeeProps {
  id: string
  title: string
  description: string
  price: number
  image: string
  tags: string[]
}

type CardProps = {
  coffee: CoffeeProps
}

export function Card({ coffee }: CardProps) {
  const { addItem } = useContext(CartContext)
  const [quantityItems, setQuantityItems] = useState(1)

  function handleAddItemToCart() {
    const addItemToCart = {
      id: coffee.id,
      title: coffee.title,
      price: coffee.price,
      image: coffee.image,
      quantity: quantityItems,
    }

    addItem(addItemToCart)
    setQuantityItems(1)
  }

  function handleIncrementItem() {
    setQuantityItems((state) => state + 1)
  }

  function handleDecrementItem() {
    setQuantityItems((state) => state - 1)
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={`Café ${coffee.title}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <BuyContainer>
        <Price>
          <span>R$</span>{' '}
          <span>
            {coffee.price.toString().replace('.', ',').padEnd(4, '0')}
          </span>
        </Price>

        <ActionsWrapper>
          <ItemsCounter
            quantityItems={quantityItems}
            incrementQuantity={handleIncrementItem}
            decrementQuantity={handleDecrementItem}
          />

          <AddToCartButton onClick={handleAddItemToCart}>
            <ShoppingCart weight="fill" />
          </AddToCartButton>
        </ActionsWrapper>
      </BuyContainer>
    </CardContainer>
  )
}
