import React from 'react'
import {useAsync} from 'react-async'
import {bootstrapAppData} from '../utils/bootstrap'
import * as authClient from '../utils/auth-client'
import {FullPageSpinner} from '../components/lib'
import {
  AuthContentData,
  LoginFormPayload,
  SignupFormPayload,
} from '../../types/custom-types'

export interface AuthContextObject {
  data: AuthContentData
  login: (form: LoginFormPayload) => Promise<void>
  register: typeof authClient.register
  logout: typeof authClient.logout
  verifyEmail: typeof authClient.verifyEmail
}

const AuthContext = React.createContext<AuthContextObject | undefined>(
  undefined,
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AuthProvider(props: React.Props<any>) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false)
  const {
    data = {user: null, listItems: []},
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync<AuthContentData>({
    promiseFn: bootstrapAppData,
  })

  React.useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true)
    }
  }, [isSettled])

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />
    }
  }

  if (isRejected) {
    return (
      <div style={{color: 'red'}}>
        <p>Uh oh... There is a problem. Try refreshing the app.</p>
        <pre>{error && error.message}</pre>
      </div>
    )
  }

  const login = (form: LoginFormPayload) => authClient.login(form).then(reload)
  const register = (form: SignupFormPayload) => authClient.register(form)
  const logout = () => authClient.logout().then(reload)
  const verifyEmail = ({
    email,
    verificationCode,
  }: {
    email: string
    verificationCode: string
  }) => authClient.verifyEmail({email, verificationCode})
  return (
    <AuthContext.Provider
      value={{data, login, logout, register, verifyEmail}}
      {...props}
    />
  )
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export {AuthProvider, useAuth}