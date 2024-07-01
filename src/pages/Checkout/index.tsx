import { useContext } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { HeaderCard } from './components/HeaderCard'
import {
  CheckoutContainer,
  CoffeeOrderWrapper,
  CoffeeCardWrapper,
  InputOptionalWrapper,
  CoffeeInput,
  TitleSection,
  CardContainer,
  MethodPaymentsContainer,
  SummaryOfValues,
  ButtonConfirmOrder,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'

import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CoffeeOrderWrapper>
        <TitleSection>Complete seu pedido</TitleSection>

        <CardContainer>
          <HeaderCard
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            icon={MapPinLine}
            color="yellow-700"
          />

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
        </CardContainer>

        <CardContainer>
          <HeaderCard
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={CurrencyDollar}
            color="purple-400"
          />

          <MethodPaymentsContainer>
            <button>
              <CreditCard />
              Cartão de crédito
            </button>
            <button>
              <Bank />
              Cartão de débito
            </button>
            <button>
              <Money />
              Dinheiro
            </button>
          </MethodPaymentsContainer>
        </CardContainer>
      </CoffeeOrderWrapper>

      <CoffeeCardWrapper>
        <TitleSection>Cafés selecionados</TitleSection>

        <CardContainer>
          {cart.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}

          <SummaryOfValues>
            <div>
              Total de itens <span>R$ 29,70</span>
            </div>
            <div>
              Entrega <span>R$ 3,50</span>
            </div>
            <div>
              Total<span>R$ 33,20</span>
            </div>
          </SummaryOfValues>

          <ButtonConfirmOrder>Confirmar pedido</ButtonConfirmOrder>
        </CardContainer>
      </CoffeeCardWrapper>
    </CheckoutContainer>
  )
}
