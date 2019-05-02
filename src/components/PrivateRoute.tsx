import React from 'react'
import {navigate} from 'gatsby'
import {RouterProps, RouteComponentProps} from '@reach/router'
import {isLoggedIn} from '../services/auth'

const PrivateRoute: React.FC<RouteComponentProps<RouterProps>> = ({
  component: Component,
  location,
  ...rest
}): JSX.Element | null => {
  if (!isLoggedIn() && location && location.pathname !== `/app/login`) {
    navigate(`/app/login`)
    return null
  }

  if (Component) {
    return <Component {...rest} />
  }

  return null
}

export {PrivateRoute}
