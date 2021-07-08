import React from 'react'
import {User} from '../../types/custom-types'
import {useAuth} from './auth-context'

type UserContextObject = User

const UserContext = React.createContext<UserContextObject | null | undefined>(
  undefined,
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function UserProvider(props: any) {
  const {
    data: {user},
  } = useAuth()

  return <UserContext.Provider value={user} {...props} />
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

export {UserProvider, useUser}
