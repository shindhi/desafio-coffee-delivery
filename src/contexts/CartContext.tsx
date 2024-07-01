import { ReactNode, createContext, useReducer } from 'react'

import { Item, cartReducer } from '../reducers/cart/reducer'
import { addItemAction, removeItemAction } from '../reducers/cart/actions'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] })

  const { cart } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
