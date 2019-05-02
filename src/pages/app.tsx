import React from 'react'
import {Router} from '@reach/router'
import {Layout} from '../components/Layout'
import {Profile} from '../components/Profile'
import {Login} from '../components/Login'
import {Container} from '../components/Container'
import {PrivateRoute} from '../components/PrivateRoute'

const App = (): JSX.Element => (
  <Layout>
    <Container>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </Container>
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default App
