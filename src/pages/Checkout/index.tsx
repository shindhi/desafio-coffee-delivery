import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import { coffees } from '../../../data.json'
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
  CoffeeCardInfo,
  CoffeeCardContainer,
  CoffeeCardDetails,
  SummaryOfValues,
  ButtonConfirmOrder,
} from './styles'
import { ItemsCounter } from '../../components/ItemsCounter'

export function Checkout() {
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
          {coffees.map((coffee) => {
            if (coffee.id < String(2)) {
              return (
                <CoffeeCardContainer key={coffee.id}>
                  <CoffeeCardInfo>
                    <img src={coffee.image} alt="" />

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

                  <span>
                    R${' '}
                    {coffee.price.toString().replace('.', ',').padEnd(4, '0')}
                  </span>
                </CoffeeCardContainer>
              )
            }
            return false
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
