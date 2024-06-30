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
          <ItemsCounter />

          <AddToCartButton>
            <ShoppingCart weight="fill" />
          </AddToCartButton>
        </ActionsWrapper>
      </BuyContainer>
    </CardContainer>
  )
}
