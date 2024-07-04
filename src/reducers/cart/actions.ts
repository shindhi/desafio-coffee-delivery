import { NavigateFunction } from 'react-router-dom'

import { Item, NewOrder } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMET_ITEM = 'INCREMET_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: { newItem: Item }
    }
  | {
      type:
        | ActionTypes.REMOVE_ITEM
        | ActionTypes.INCREMET_ITEM
        | ActionTypes.DECREMENT_ITEM
      payload: { itemId: Item['id'] }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: NewOrder
        callback: NavigateFunction
      }
    }

export function addItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: { newItem },
  } satisfies Actions
}

export function removeItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function incremetQuantityItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMET_ITEM,
    payload: { itemId },
  } satisfies Actions
}

export function decrementQuantityItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM,
    payload: { itemId },
  } satisfies Actions
}

export function checkoutCartAction(
  order: NewOrder,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}
