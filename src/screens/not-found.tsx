import React from 'react'
import {Link, RouteComponentProps} from '@reach/router'
import {css} from 'styled-components'

const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <div
      css={css({
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <div>
        Sorry... nothing here. <Link to="/">Go home</Link>
      </div>
    </div>
  )
}

export {NotFound}
