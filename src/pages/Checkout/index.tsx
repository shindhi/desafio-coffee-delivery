import React, { useContext } from 'react'
import * as zod from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
  SummaryOfValues,
  ButtonConfirmOrder,
  CardDeliveryDetails,
  OptionPayment,
  MethodPaymentsContainer,
  AlertErrorMessage,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { CoffeeCard } from './components/CoffeeCard'

const shippingPrice = 3.5
const formatterPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const cepMask = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2')
}

const newOrder = zod.object({
  zipCode: zod
    .string()
    .min(1, 'Informe o CEP')
    .max(9, 'O CEP deve ter no máximo 8 caracteres.')
    .regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod.number({ invalid_type_error: 'Informe o número' }),
  addressComplement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod
    .string()
    .min(1, 'Informe o estado')
    .max(2, 'O estado deve ter no máximo 2 caracteres'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = zod.infer<typeof newOrder>

export function Checkout() {
  const { cart, checkout } = useContext(CartContext)

  const totalPriceItems = cart.reduce((acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderInfo>({ resolver: zodResolver(newOrder) })
  const selectedMethodPayment = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<OrderInfo> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    if (name === 'zipCode') {
      const maskedValue = cepMask(value)
      event.target.value = maskedValue
    }
  }

  return (
    <CheckoutContainer>
      <CoffeeOrderWrapper
        id="order"
        onSubmit={handleSubmit(handleOrderCheckout)}
      >
        <TitleSection>Complete seu pedido</TitleSection>

        <CardContainer>
          <HeaderCard
            title="Endereço de Entrega"
            description="Informe o endereço onde deseja receber seu pedido"
            icon={MapPinLine}
            color="yellow-700"
          />

          <CardDeliveryDetails>
            <div id="cep">
              <CoffeeInput
                placeholder="CEP"
                maxLength={9}
                type="string"
                {...register('zipCode', {
                  onChange: handleInputChange,
                })}
              />
              {errors.zipCode && <span>{errors.zipCode.message}</span>}
            </div>

            <div id="street">
              <CoffeeInput
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              {errors.street && <span>{errors.street.message}</span>}
            </div>

            <div id="number">
              <CoffeeInput
                type="number"
                placeholder="Número"
                {...register('number', {
                  valueAsNumber: true,
                })}
              />
              {errors.number && <span>{errors.number.message}</span>}
            </div>

            <InputOptionalWrapper
              id="addressComplement"
              data-optional="opcional"
            >
              <CoffeeInput
                type="text"
                placeholder="Complemento"
                {...register('addressComplement')}
              />
              {errors.addressComplement && (
                <span>{errors.addressComplement.message}</span>
              )}
            </InputOptionalWrapper>

            <div id="neighborhood">
              <CoffeeInput
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors.neighborhood && (
                <span>{errors.neighborhood.message}</span>
              )}
            </div>

            <div id="city">
              <CoffeeInput
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>

            <div id="uf">
              <CoffeeInput
                type="text"
                placeholder="UF"
                {...register('state')}
              />
            </div>
          </CardDeliveryDetails>
        </CardContainer>

        <CardContainer>
          <HeaderCard
            title="Pagamento"
            description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            icon={CurrencyDollar}
            color="purple-400"
          />

          <MethodPaymentsContainer>
            <OptionPayment selected={selectedMethodPayment === 'credit'}>
              <input
                type="radio"
                value="credit"
                {...register('paymentMethod')}
              />
              <CreditCard />
              Cartão de crédito
            </OptionPayment>

            <OptionPayment selected={selectedMethodPayment === 'debit'}>
              <input
                type="radio"
                value="debit"
                {...register('paymentMethod')}
              />
              <Bank />
              Cartão de débito
            </OptionPayment>

            <OptionPayment selected={selectedMethodPayment === 'cash'}>
              <input type="radio" value="cash" {...register('paymentMethod')} />
              <Money />
              Dinheiro
            </OptionPayment>
          </MethodPaymentsContainer>
          {errors.paymentMethod && (
            <AlertErrorMessage>
              {errors.paymentMethod.message}
            </AlertErrorMessage>
          )}
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
              Total de itens{' '}
              <span>{formatterPrice.format(totalPriceItems)}</span>
            </div>
            <div>
              Entrega <span>{formatterPrice.format(shippingPrice)}</span>
            </div>
            <div>
              Total
              <span>
                {formatterPrice.format(shippingPrice + totalPriceItems)}
              </span>
            </div>
          </SummaryOfValues>

          <ButtonConfirmOrder type="submit" form="order">
            Confirmar pedido
          </ButtonConfirmOrder>
        </CardContainer>
      </CoffeeCardWrapper>
    </CheckoutContainer>
  )
}
