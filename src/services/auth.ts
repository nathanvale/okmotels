interface User {
  name?: string
  username?: string
  password?: string
  email?: string
}

export const isBrowser = (): boolean => typeof window !== 'undefined'

export const getUser = (): User =>
  isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser') || '')
    : {}

const setUser = (user: User): void =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const handleLogin = ({username, password}: User): boolean | void => {
  if (username === `nathanvale` && password === `qwerty`) {
    return setUser({
      username: `nathanvale`,
      name: `Nathan`,
      email: `hi@nathanvale.com`,
      password,
    })
  }

  return false
}

export const isLoggedIn = (): boolean => {
  const user = getUser()

  return !!user.username
}

export const logout = (callback: Function): void => {
  setUser({})
  callback()
}
