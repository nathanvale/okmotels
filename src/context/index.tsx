import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../styles/theme'
import {AuthProvider} from './auth-context'
import {UserProvider} from './user-context'

function AppProviders({children}: React.Props<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export {AppProviders}
