import { Trash } from 'phosphor-react'

import { CoffeeProps } from '../../../Home/components/Card'
import { ItemsCounter } from '../../../../components/ItemsCounter'
import {
  CoffeeCardContainer,
  CoffeeCardInfo,
  CoffeeCardDetails,
} from './styles'

type CoffeeCardProps = {
  coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer key={coffee.id}>
      <CoffeeCardInfo>
        <img src={coffee.image} alt={`Café ${coffee.title}`} />

        <CoffeeCardDetails>
          <h3>{coffee.title}</h3>
          <div>
            <ItemsCounter />

            <button>
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
