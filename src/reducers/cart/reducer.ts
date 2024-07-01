import { produce } from 'immer'

import { ActionTypes, Actions } from './actions'

export interface Item {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  cart: Item[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const currentItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.newItem.id
      })

      return produce(state, (draft) => {
        if (currentItemIndex < 0) {
          draft.cart.push(action.payload.newItem)
        } else {
          draft.cart[currentItemIndex].quantity +=
            action.payload.newItem.quantity
        }
      })
    }
    case ActionTypes.REMOVE_ITEM:
      return state
    case ActionTypes.INCREMET_ITEM:
      return produce(state, (draft) => {
        const currentItemIndex = draft.cart.findIndex((item) => {
          return item.id === action.payload.itemId
        })

        draft.cart[currentItemIndex].quantity += 1
      })
    case ActionTypes.DECREMENT_ITEM:
      return state
    default:
      return state
  }
}
