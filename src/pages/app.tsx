import React from 'react'
import {FullPageSpinner} from '../components/lib'
import {useUser} from '../context/user-context'

const loadAuthenticatedApp = () => import('./authenticated-app')
const AuthenticatedApp = React.lazy(loadAuthenticatedApp)
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const user = useUser()
  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  React.useLayoutEffect(() => {
    loadAuthenticatedApp()
  }, [])
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
