import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successImg from '../../assets/successImg.svg'
import {
  SuccessContainer,
  SuccessContent,
  InfoWrapper,
  Info,
  ItemInfo,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é so aguardar que logo o café chegará até você</p>
      <SuccessContent>
        <Info>
          <InfoWrapper>
            <ItemInfo>
              <span>
                <MapPin weight="fill" />
              </span>
              <div>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </div>
            </ItemInfo>

            <ItemInfo>
              <span>
                <Timer weight="fill" />
              </span>
              <div>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </ItemInfo>

            <ItemInfo>
              <span>
                <CurrencyDollar weight="fill" />
              </span>
              <div>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </div>
            </ItemInfo>
          </InfoWrapper>
        </Info>
        <img src={successImg} alt="Imagem de sucesso" />
      </SuccessContent>
    </SuccessContainer>
  )
}
