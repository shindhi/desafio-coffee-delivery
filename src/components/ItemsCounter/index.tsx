import { Minus, Plus } from 'phosphor-react'
import { ItemsCounterContainer } from './styled'

export function ItemsCounter() {
  return (
    <ItemsCounterContainer>
      <button>
        <Minus weight="bold" />
      </button>
      <span>0</span>
      <button>
        <Plus weight="bold" />
      </button>
    </ItemsCounterContainer>
  )
}
