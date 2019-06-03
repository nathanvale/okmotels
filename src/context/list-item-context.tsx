import React from 'react'
import * as listItemClient from '../utils/list-items-client'
import {ListItem} from '../../types/custom-types'
import {useAuth} from './auth-context'
import {useUser} from './user-context'

const ListItemStateContext = React.createContext<ListItem[]>([])
const ListItemDispatchContext = React.createContext<
  React.Dispatch<ListItemAction> | undefined
>(undefined)

export type ListItemAction =
  | {type: 'add'; listItem: ListItem}
  | {type: 'remove'; id: string}
  | {type: 'update'; listItem: ListItem}

type ListItemsState = ListItem[]

function listReducer(
  listItems: ListItemsState,
  action: ListItemAction,
): ListItem[] {
  switch (action.type) {
    case 'add': {
      return [...listItems, action.listItem]
    }
    case 'remove': {
      return listItems.filter(li => li.id !== action.id)
    }
    case 'update': {
      return listItems.map(li => {
        if (li.id === action.listItem.id) {
          return {...li, ...action.listItem}
        }
        return li
      })
    }
    default: {
      //@ts-ignore
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ListItemProvider({children}: React.Props<any>) {
  const {data} = useAuth()
  const [state, dispatch] = React.useReducer(listReducer, data.listItems)
  return (
    <ListItemStateContext.Provider value={state}>
      <ListItemDispatchContext.Provider value={dispatch}>
        {children}
      </ListItemDispatchContext.Provider>
    </ListItemStateContext.Provider>
  )
}

async function removeListItem(
  dispatch: React.Dispatch<ListItemAction>,
  id: string,
) {
  const data = await listItemClient.remove(id)
  dispatch({type: 'remove', id})
  return data
}

async function addListItem(
  dispatch: React.Dispatch<ListItemAction>,
  listItemData: Partial<ListItem>,
) {
  const data = await listItemClient.create(listItemData)
  dispatch({type: 'add', listItem: data.listItem})
  return data
}

async function updateListItem(
  dispatch: React.Dispatch<ListItemAction>,
  listItemId: string,
  updates: Partial<ListItem>,
) {
  const data = await listItemClient.update(listItemId, updates)
  dispatch({type: 'update', listItem: data.listItem})
  return data
}

function useListItemDispatch() {
  const context = React.useContext(ListItemDispatchContext)
  if (context === undefined) {
    throw new Error(
      `useListItemDispatch must be used within a ListItemProvider`,
    )
  }
  return context
}

function useListItemState() {
  const context = React.useContext(ListItemStateContext)
  if (context === undefined) {
    throw new Error(`useListItemState must be used within a ListItemProvider`)
  }
  return context
}

function useSingleListItemState(bookId: string) {
  const listItems = useListItemState()
  if (!listItems) {
    throw new Error(`useListItemState must be used within a ListItemProvider`)
  }
  const user = useUser()
  if (!user) throw new Error(`User not logged in!`)
  const listItem = listItems.find(
    li => li.ownerId === user.id && li.bookId === bookId,
  )
  return listItem
}

export {
  ListItemProvider,
  useListItemDispatch,
  useListItemState,
  useSingleListItemState,
  removeListItem,
  addListItem,
  updateListItem,
}
