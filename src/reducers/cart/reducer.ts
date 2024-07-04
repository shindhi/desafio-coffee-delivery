import { produce } from 'immer'

import { ActionTypes, Actions } from './actions'

export interface Item {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

export interface NewOrder {
  zipCode: string
  street: string
  number: number
  addressComplement: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export interface Order extends NewOrder {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const currentItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.newItem.id
      })

      return produce(state, (draft) => {
        if (currentItemIndex <= 0) {
          draft.cart.push(action.payload.newItem)
        } else {
          draft.cart[currentItemIndex].quantity +=
            action.payload.newItem.quantity
        }
      })
    }
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = draft.cart.findIndex((item) => {
          return item.id === action.payload.itemId
        })

        if (currentItemIndex >= 0) {
          draft.cart.splice(currentItemIndex, 1)
        }
      })
    case ActionTypes.INCREMET_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = draft.cart.findIndex((item) => {
          return item.id === action.payload.itemId
        })

        if (currentItemIndex >= 0) {
          draft.cart[currentItemIndex].quantity += 1
        }
      })
    case ActionTypes.DECREMENT_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = draft.cart.findIndex((item) => {
          return item.id === action.payload.itemId
        })

        if (currentItemIndex >= 0) {
          draft.cart[currentItemIndex].quantity -= 1
        }
      })
    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }

        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`order/${newOrder.id}/success`)
      })
    default:
      return state
  }
}
