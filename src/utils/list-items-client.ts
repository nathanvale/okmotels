import {ListItem} from '../../types/custom-types'
import {client} from './api-client'

function create(
  listItemData: Partial<ListItem>,
): Promise<{listItem: ListItem}> {
  return client('list-item', {body: listItemData})
}

function read(listItemIds: string[]): Promise<{listItems: ListItem[]} | {}> {
  if (!listItemIds.length) {
    return Promise.resolve({})
  }
  return client(
    `list-item?listItemIds=${encodeURIComponent(listItemIds.join(','))}`,
  )
}

function update(
  listItemId: string,
  updates: Partial<ListItem>,
): Promise<{listItem: ListItem}> {
  return client(`list-item/${listItemId}`, {
    method: 'PUT',
    body: updates,
  })
}

function readForUser(
  ownerId: string,
): Promise<{
  listItems: ListItem[]
}> {
  return client(`list-item?ownerId=${encodeURIComponent(ownerId)}`)
}

function remove(listItemId: string): Promise<{success: boolean}> {
  return client(`list-item/${listItemId}`, {method: 'DELETE'})
}

export {create, read, remove, readForUser, update}
