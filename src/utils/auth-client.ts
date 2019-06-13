import {Auth} from 'aws-amplify'
import {CognitoUser} from '@aws-amplify/auth'
import {
  LoginFormPayload,
  SignupFormPayload,
  User,
} from '../../types/custom-types'
import '../bootstrap'

import {UserPoolAttributes} from '../../types/aws-types'

const localStorageKey = '__bookshelf_token__'
const usersKey = '__bookshelf_users__'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const users: any = {}
const persist = () =>
  window.localStorage.setItem(usersKey, JSON.stringify(users))
const load = () =>
  Object.assign(users, JSON.parse(window.localStorage.getItem(usersKey) || ''))

const parseError = (e: string | Error) => {
  if (typeof e === 'string') {
    throw new Error(e)
  } else {
    throw e
  }
}

// initialize
try {
  load()
} catch (error) {
  persist()
  // ignore json parse error
}

//@ts-ignore
window.__bookshelf = window.__bookshelf || {}
//@ts-ignore
window.__bookshelf.purgeUsers = () => {
  Object.keys(users).forEach(key => {
    delete users[key]
  })
  persist()
}

 function getUser(): Promise<User | null> {
  return (
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: CognitoUser & {attributes: UserPoolAttributes}) => {
        const attributes = data.attributes
        const user: User = {
          id: attributes.sub || '',
          email: attributes.email || '',
          username: attributes.email || '',
          emailVerified: attributes.email_verified || false,
          phoneNumber: attributes.phone_number || '',
          phoneNumberVerified: attributes.phone_number_verified || false,
        }
        return Promise.resolve(user)
      })
      .catch((error: string | Error) => {
        if (error === 'not authenticated') {
          return Promise.resolve(null)
        } else {
          logout()
          return parseError(error)
        }
      })
  )
}

async function login({username, password}: LoginFormPayload) {
  const result: CognitoUser & {
    username: string
    attributes: UserPoolAttributes
  } = await Auth.signIn({
    username, // Required, the username
    password, // Optional, the password
  }).catch(parseError)
  const token = btoa(result.username)
  window.localStorage.setItem(localStorageKey, token)
  return result
}

async function register({username, password}: SignupFormPayload) {
  const result = await Auth.signUp({
    username,
    password,
  }).catch(parseError)

  const id = result.userSub
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token = btoa(id)
  window.localStorage.setItem(localStorageKey, token)
  users[id] = {
    id,
    username,
  }
  persist()
  return result
}

function logout(): Promise<void> {
  window.localStorage.removeItem(localStorageKey)
  return Auth.signOut().catch(parseError)
}

function verifyEmail({
  email,
  verificationCode,
}: {
  email: string
  verificationCode: string
}) {
  return Auth.confirmSignUp(email, verificationCode, {
    forceAliasCreation: true,
  }).catch(parseError)
}

export {login, register, logout, getUser, verifyEmail}
