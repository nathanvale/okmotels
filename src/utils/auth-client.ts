import {
  LoginFormPayload,
  SignupFormPayload,
  User,
} from '../../types/custom-types'
import {client} from './api-client'
import '../bootstrap'

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

function handleUserResponse({
  user: {token, ...user},
}: {
  user: User & {token?: string}
}): User {
  window.localStorage.setItem(localStorageKey, token || '')
  return user
}

function getUser() {
  const token = getToken()
  if (!token) {
    return Promise.resolve(undefined)
  }
  return client<GetUserResponse>('me').catch(error => {
    logout()
    return Promise.reject(error)
  })
}

async function login({username, password}: LoginFormPayload) {
  const result = await client<LoginResponse>('login', {
    body: {username, password},
  })
  return handleUserResponse(result)
}

async function register({username, password}: SignupFormPayload) {
  const result = await client<RegisterResponse>('register', {
    body: {username, password},
  })
  return handleUserResponse(result)
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
  return Promise.resolve()
}

function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

// ;(async () => {
//   let user = await register({
//     username: 'hi@nathanvale.com',
//     password: 'qwerty',
//   })
//   console.log(user)
//   user = await getUser()
//   console.log(user)
//   await logout()
//   user = await getUser()
//   console.log(user)
//   user = await login({
//     username: 'hi@nathanvale.com',
//     password: 'qwerty',
//   })
//   console.log(user)
// })()

export {login, register, logout, getToken, getUser}
