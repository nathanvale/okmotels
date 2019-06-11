import React from 'react'
import {useAuth} from '../context/auth-context'

interface LogoutProps {
  trigger: JSX.Element
}

export function Logout({trigger}: LogoutProps) {
  const {logout} = useAuth()
  return React.cloneElement(trigger, {
    onClick: (event: Event) => {
      event.preventDefault()
      logout()
    },
  })
}
