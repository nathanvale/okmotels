import React from 'react'

import {Link, RouteComponentProps} from '@reach/router'
import {ListItemList} from '../components/list-item-list'

const FinishedScreen: React.FC<RouteComponentProps> = () => {
  return (
    <ListItemList
      filterListItems={li => Boolean(li.finishDate)}
      noListItems={
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to{' '}
          <Link to="/app/discover">the Discover page</Link> to add books to your
          list.
        </p>
      }
      noFilteredListItems={
        <p>
          Looks like you've got some reading to do! Check them out in your{' '}
          <Link to="/app/list">reading list</Link> or{' '}
          <Link to="/app/discover">discover more</Link>.
        </p>
      }
    />
  )
}

export {FinishedScreen}
