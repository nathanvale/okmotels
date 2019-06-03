import React from 'react'
import {Link, RouteComponentProps} from '@reach/router'
import {ListItemList} from '../components/list-item-list'

const ListScreen: React.FC<RouteComponentProps> = () => {
  return (
    <ListItemList
      filterListItems={li => !li.finishDate}
      noListItems={
        <p>
          Hey there! Welcome to your bookshelf reading list. Get started by
          heading over to <Link to="/app/discover">the Discover page</Link> to
          add books to your list.
        </p>
      }
      noFilteredListItems={
        <p>
          Looks like you've finished all your books! Check them out in your{' '}
          <Link to="/app/finished">finished books</Link> or{' '}
          <Link to="/app/discover">discover more</Link>.
        </p>
      }
    />
  )
}

export {ListScreen}
