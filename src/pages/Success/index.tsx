import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useParams } from 'react-router-dom'

import successImg from '../../assets/successImg.svg'
import {
  SuccessContainer,
  SuccessContent,
  InfoWrapper,
  Info,
  ItemInfo,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { useTheme } from 'styled-components'

const paymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function Success() {
  const { orderId } = useParams()
  const { orders } = useContext(CartContext)

  const theme = useTheme()

  const currentOrderInfo = orders.find((order) => order.id === Number(orderId))

  if (!currentOrderInfo?.id) {
    return null
  }

  const { street, number, neighborhood, city, state, paymentMethod } =
    currentOrderInfo

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é so aguardar que logo o café chegará até você</p>
      <SuccessContent>
        <Info>
          <InfoWrapper>
            <ItemInfo>
              <span style={{ background: theme['purple-400'] }}>
                <MapPin weight="fill" />
              </span>
              <div>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
                <br />
                {neighborhood} - {city}, {state}
              </div>
            </ItemInfo>

            <ItemInfo>
              <span style={{ background: theme['yellow-400'] }}>
                <Timer weight="fill" />
              </span>
              <div>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </ItemInfo>

            <ItemInfo>
              <span style={{ background: theme['yellow-700'] }}>
                <CurrencyDollar weight="fill" />
              </span>
              <div>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[paymentMethod]}</strong>
              </div>
            </ItemInfo>
          </InfoWrapper>
        </Info>

        <img src={successImg} alt="Imagem de sucesso" />
      </SuccessContent>
    </SuccessContainer>
  )
}
