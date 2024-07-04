import { ReactNode, createContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import { Item, NewOrder, Order, cartReducer } from '../reducers/cart/reducer'
import {
  addItemAction,
  checkoutCartAction,
  decrementQuantityItemAction,
  incremetQuantityItemAction,
  removeItemAction,
} from '../reducers/cart/actions'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  incrementQuantityItem: (itemId: Item['id']) => void
  decrementQuantityItem: (itemId: Item['id']) => void
  checkout: (order: NewOrder) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    orders: [],
  })

  const { cart, orders } = cartState
  const navigate = useNavigate()

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementQuantityItem(itemId: Item['id']) {
    dispatch(incremetQuantityItemAction(itemId))
  }

  function decrementQuantityItem(itemId: Item['id']) {
    dispatch(decrementQuantityItemAction(itemId))
  }

  function checkout(order: NewOrder) {
    dispatch(checkoutCartAction(order, navigate))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        incrementQuantityItem,
        decrementQuantityItem,
        orders,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
