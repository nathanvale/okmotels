import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {getUser} from '../services/auth'

const Profile: React.FC<RouteComponentProps> = (): JSX.Element => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
  </>
)

export {Profile}
