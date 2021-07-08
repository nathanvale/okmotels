import React from 'react'
import {css} from 'styled-components'
import {useListItemState} from '../context/list-item-context'
import {ListItem} from '../../types/custom-types'
import {BookListUL} from './lib'
import {BookRow} from './book-row'

interface ListItemListProps {
  filterListItems: (
    listItem: ListItem,
    index?: number,
    array?: ListItem[],
  ) => boolean
  noListItems: React.ReactNode
  noFilteredListItems: React.ReactNode
}
function ListItemList({
  filterListItems,
  noListItems,
  noFilteredListItems,
}: ListItemListProps) {
  const listItems = useListItemState()
  const filteredListItems = listItems.filter(filterListItems)

  if (!listItems.length) {
    return (
      <div css={css({marginTop: '1em', fontSize: '1.2em'})}>{noListItems}</div>
    )
  }
  if (!filteredListItems.length) {
    return (
      <div css={css({marginTop: '1em', fontSize: '1.2em'})}>
        {noFilteredListItems}
      </div>
    )
  }

  return (
    <div css={css({marginTop: '1em'})}>
      <BookListUL>
        {filteredListItems.map(listItem => (
          <li key={listItem.id}>
            <BookRow book={listItem.book} />
          </li>
        ))}
      </BookListUL>
    </div>
  )
}

export {ListItemList}
