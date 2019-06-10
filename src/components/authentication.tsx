import styled, {css} from 'styled-components'
import React from 'react'
import {useAuth, AuthContextObject} from '../context/auth-context'
import {useCallbackStatus} from '../utils/use-callback-status'
import {Modal} from './Modal'
import {Button, FormGroup, Spinner} from './lib'

interface UserFormProps {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void
  buttonText: string
  isPending: boolean
  error: Error | null
  isRejected: boolean
}

interface UserPayload {
  username: string
  password: string
}

interface VerifyUserFormProps {
  verifyEmail: AuthContextObject['verifyEmail']
  email: string
  onVerified: () => void
}

const ModalTitle = styled.h3({
  textAlign: 'center',
  fontSize: '2em',
})

export function LoginForm() {
  const {login, verifyEmail} = useAuth()
  const {isPending, isRejected, error, run} = useCallbackStatus()
  const [isVerifyRequired, setIsVerifyRequired] = React.useState(false)
  const [user, setUser] = React.useState<UserPayload | undefined>()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {username, password} = (event.target as any).elements

    const payload: UserPayload = {
      username: username.value,
      password: password.value,
    }

    setUser(payload)

    run(
      login(payload).catch((e: Error) => {
        if (e.message === 'User is not confirmed.') {
          setIsVerifyRequired(true)
        } else {
          throw e
        }
      }),
    )
  }

  function onVerified() {
    setIsVerifyRequired(false)
    if (user) run(login(user))
  }

  return isVerifyRequired && user ? (
    <VerifyUserForm
      email={user.username}
      verifyEmail={verifyEmail}
      onVerified={onVerified}
    />
  ) : (
    <UserForm
      buttonText="Login"
      handleSubmit={handleSubmit}
      isPending={isPending}
      error={error}
      isRejected={isRejected}
    />
  )
}

function RegisterForm() {
  const {login, register, verifyEmail} = useAuth()
  const [isUserRegistered, setIsUserRegistered] = React.useState(false)
  const [isUserVerified, setIsUserVerified] = React.useState(false)
  const [user, setUser] = React.useState<UserPayload | undefined>()
  const {isPending, isRejected, error, run} = useCallbackStatus()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {username, password} = (event.target as any).elements
    const payload: UserPayload = {
      username: username.value,
      password: password.value,
    }

    setUser(payload)

    run(
      register(payload).then(() => {
        setIsUserRegistered(true)
      }),
    )
  }

  function onVerified() {
    setIsUserVerified(true)
    if (user) run(login(user))
  }

  return isUserRegistered && !isUserVerified && user ? (
    <VerifyUserForm
      email={user.username}
      verifyEmail={verifyEmail}
      onVerified={onVerified}
    />
  ) : (
    <UserForm
      buttonText="Register"
      handleSubmit={handleSubmit}
      isPending={isPending}
      error={error}
      isRejected={isRejected}
    />
  )
}

function UserForm({
  handleSubmit,
  buttonText,
  isPending,
  isRejected,
  error,
}: UserFormProps) {
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

function VerifyUserForm({verifyEmail, email, onVerified}: VerifyUserFormProps) {
  const {isPending, isRejected, error, run} = useCallbackStatus()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const {verificationCode} = (event.target as any).elements

    run(
      verifyEmail({
        email,
        verificationCode: verificationCode.value,
      }).then(onVerified),
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
        <label htmlFor="verificationCode">Verification Code</label>
        <input id="verificationCode" />
      </FormGroup>
      <div>
        Enter the verifaction code that was sent to the email address you
        provided
        <Button type="submit">
          Verify email address{' '}
          {isPending ? <Spinner css={css({marginLeft: 5})} /> : null}
        </Button>
      </div>
      {isRejected ? (
        <div css={css({color: 'red'})}>{error ? error.message : null}</div>
      ) : null}
    </form>
  )
}

interface LoginModalProps {
  trigger: React.ReactElement
}

interface RegisterModalProps {
  trigger: React.ReactElement
}

export function LoginModal({trigger}: LoginModalProps) {
  return (
    <Modal trigger={trigger}>
      <ModalTitle>Login</ModalTitle>
      <LoginForm />
    </Modal>
  )
}

export function RegisterModal({trigger}: RegisterModalProps) {
  return (
    <Modal trigger={trigger}>
      <ModalTitle>Register</ModalTitle>
      <RegisterForm />
    </Modal>
  )
}
