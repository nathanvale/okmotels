import Amplify, {Auth} from 'aws-amplify'
import fetch from 'node-fetch'
import {
  LoginFormPayload,
  SignupFormPayload,
  User,
} from '../../types/custom-types'
import '../bootstrap'
import awsmobile from '../aws-exports'
import {client} from './api-client'
import {CognitoUser} from '@aws-amplify/auth'
import console = require('console')

global.fetch = fetch

Amplify.configure(awsmobile)

const localStorageKey = '__bookshelf_token__'

interface GetUserPayload {
  user: User
}
interface LoginResponse {
  user: User & {
    token: string
  }
}
interface GetUserResponse {
  user: User
}

interface RegisterResponse {
  user: User
}
interface HandleUserResponse {
  user: User & {token?: string}
}

function handleUserResponse(user: CognitoUser): CognitoUser {
  return user
}

function getUser(): Promise<User | null> {
  return (
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: CognitoUser & {attributes: any}) => {
        const attributes = data.attributes
        console.log(attributes)
        const user: User = {
          id: attributes.sub,
          email: attributes.email,
          username: attributes.email,
          emailVerified: attributes.email_verified,
          phoneNumber: attributes.phone_number,
          phoneNumberVerified: attributes.phone_number_verified,
        }

        return Promise.resolve(user)
      })
      .catch(error => {
        if (error === 'not authenticated') {
          return Promise.resolve(null)
        } else {
          logout()
          return Promise.reject(error)
        }
      })
  )
}

async function updateUserAttributes() {
  let user = await Auth.currentAuthenticatedUser()
  let result = await Auth.updateUserAttributes(user, {
    given_name: 'Nathan',
    family_name: 'Vale',
  })
  return result
}

async function login({username, password}: LoginFormPayload) {
  const result: CognitoUser = await Auth.signIn({
    username, // Required, the username
    password, // Optional, the password
  })
  return result
}

async function register({username, password}: SignupFormPayload) {
  const result = await Auth.signUp({
    username,
    password,
  })
  console.log(result)
  return result
}

function logout() {
  return Auth.signOut()
}

;(async () => {
  try {
    console.log(await getUser())
    const cognitoUser = await login({
      username: 'hi@nathanvale.com',
      password: 'Passw0rd1873!',
    })
    cognitoUser.confirmRegistration(e => console.log(e))
    signUpResult.user.deleteUser(e => console.log(e))
    const signUpResult = await register({
      username: 'hi@nathanvale.com',
      password: 'Passw0rd1873!',
    })
    signUpResult.user.deleteUser(e => console.log(e))
    const cognitoUser = await login({
      username: 'hi@nathanvale.com',
      password: 'Passw0rd1873!',
    })
    console.log(cognitoUser)
    cognitoUser = await getUser() //?
    console.log(cognitoUser)
    console.log(await updateUserAttributes())
    console.log(cognitoUser.pool)
    console.log(cognitoUser.Session)
    console.log(cognitoUser.client)
    console.log(cognitoUser.signInUserSession)
    console.log(cognitoUser.authenticationFlowType)
    console.log(cognitoUser.keyPrefix)
    console.log(cognitoUser.userDataKey)
    await logout()
    cognitoUser = await getUser()
    console.log(cognitoUser)
    cognitoUser = await logout()
    console.log(cognitoUser)
  } catch (error) {
    console.log(error)
  }
  /*   let user = await register({
    username: 'hireme@nathanvale.com',
    password: 'Passw0rd1873!',
  }) */
  //console.log(user)
})()

export {login, register, logout, getUser}
