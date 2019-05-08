import React from 'react'
import {RouteComponentProps} from '@reach/router'
import Helmet from 'react-helmet'
import {getUser} from '../services/auth'
import {Container} from '../components/Container'

const Profile: React.FC<RouteComponentProps> = (): JSX.Element => (
  <>
    <Helmet>
      <title>{`Login`}</title>
    </Helmet>
    <Container data-testid="profile">
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </Container>
  </>
)

export {Profile}
