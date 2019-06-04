import styled, {css} from 'styled-components'
import React, {ReactElement} from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog} from '@reach/dialog'

import {Logo} from '../components/logo'
import {
  CircleButton,
  Button,
  Spinner,
  FormGroup,
  Centered,
} from '../components/lib'
import {useAuth} from '../context/auth-context'
import {useCallbackStatus} from '../utils/use-callback-status'
import {LoginFormPayload, SignupFormPayload} from '../../types/custom-types'
import {Layout} from '../components/Layout'

interface LoginFormProps {
  onSubmit: (form: SignupFormPayload | LoginFormPayload) => Promise<void>
  buttonText: string
}
function LoginForm({onSubmit, buttonText}: LoginFormProps) {
  const {isPending, isRejected, error, run} = useCallbackStatus() as {
    isPending: boolean
    isRejected: boolean
    run: (promise: Promise<void>) => Promise<void>
    error: Error
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {username, password} = (event.target as any).elements

    run(
      onSubmit({
        username: username.value,
        password: password.value,
      }),
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      })}
    >
      <FormGroup>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </FormGroup>
      <div>
        <Button type="submit">
          {buttonText}{' '}
          {isPending ? <Spinner css={css({marginLeft: 5})} /> : null}
        </Button>
      </div>
      {isRejected ? (
        <div css={css({color: 'red'})}>{error ? error.message : null}</div>
      ) : null}
    </form>
  )
}

interface ModalProps {
  button: ReactElement
  children: React.ReactNode
}

function Modal({button, children}: ModalProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      {React.cloneElement(button, {onClick: () => setIsOpen(true)})}
      <Dialog isOpen={isOpen}>
        <div css={css({display: 'flex', justifyContent: 'flex-end'})}>
          <CircleButton onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        {children}
      </Dialog>
    </React.Fragment>
  )
}

const ModalTitle = styled.h3({
  textAlign: 'center',
  fontSize: '2em',
})

function UnauthenticatedApp() {
  const {login, register} = useAuth()

  return (
    <Layout>
      <Centered>
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>
        <div css={css({display: 'flex'})}>
          <Modal button={<Button css={css({marginRight: 6})}>Login</Button>}>
            <ModalTitle>Login</ModalTitle>
            <LoginForm onSubmit={login} buttonText="Login" />
          </Modal>
          <Modal button={<Button variant="secondary">Register</Button>}>
            <ModalTitle>Register</ModalTitle>
            <LoginForm onSubmit={register} buttonText="Register" />
          </Modal>
        </div>
      </Centered>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default UnauthenticatedApp
