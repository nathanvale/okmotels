import {css} from 'styled-components'
import React from 'react'
import {Logo} from '../components/logo'
import {Button, Centered} from '../components/lib'
import {Layout} from '../components/Layout'
import {LoginModal, RegisterModal} from '../components/authentication'

function UnauthenticatedApp() {
  return (
    <Layout>
      <Centered>
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>
        <div css={css({display: 'flex'})}>
          <LoginModal
            trigger={<Button css={css({marginRight: 6})}>Login</Button>}
          />
          <RegisterModal
            trigger={<Button variant="secondary">Register</Button>}
          />
        </div>
      </Centered>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default UnauthenticatedApp
