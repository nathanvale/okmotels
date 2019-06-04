import {Auth} from 'aws-amplify'
import {CognitoUser} from '@aws-amplify/auth'

import {
  LoginFormPayload,
  SignupFormPayload,
  User,
} from '../../types/custom-types'
import '../bootstrap'

import {UserPoolAttributes} from '../../types/aws-types'

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
  return result
}

function logout() {
  return Auth.signOut()
}

export {login, register, logout, getUser}
