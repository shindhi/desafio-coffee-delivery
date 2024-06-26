import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  CoffeeOrderWrapper,
  Title,
  CoffeeCardWrapper,
  HeaderCardOrder,
  InputOptionalWrapper,
  CoffeeInput,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CoffeeOrderWrapper>
        <Title>Complete seu pedido</Title>

        <div>
          <HeaderCardOrder>
            <MapPinLine />

            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </HeaderCardOrder>

          <form action="">
            <CoffeeInput type="text" id="cep" placeholder="CEP" />
            <CoffeeInput type="text" id="rua" placeholder="Rua" />
            <CoffeeInput type="number" id="numero" placeholder="Número" />
            <InputOptionalWrapper
              id="complemento-container"
              data-optional="Opcional"
            >
              <CoffeeInput
                type="text"
                id="complemento"
                placeholder="Complemento"
              />
            </InputOptionalWrapper>
            <CoffeeInput type="text" id="bairro" placeholder="Bairro" />
            <CoffeeInput type="text" id="cidade" placeholder="Cidade" />
            <CoffeeInput type="text" id="uf" placeholder="UF" />
          </form>
        </div>

        <div>
          <HeaderCardOrder>
            <CurrencyDollar />

            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </HeaderCardOrder>
        </div>
      </CoffeeOrderWrapper>

      <CoffeeCardWrapper>
        <Title>Cafés selecionados</Title>
      </CoffeeCardWrapper>
    </CheckoutContainer>
  )
}
