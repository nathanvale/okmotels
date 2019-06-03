/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

function useIsMounted() {
  const mounted = React.useRef(false)
  React.useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  return mounted
}

function useCallbackStatus() {
  const isMounted = useIsMounted()
  const [{status, error}, setState] = React.useReducer(
    (s, a) => ({...s, ...a}),
    {status: 'rest', error: null},
  )

  // @ts-ignore
  const safeSetState = (...args) =>
    // @ts-ignore
    isMounted.current ? setState(...args) : null

  const isPending = status === 'pending'
  const isRejected = status === 'rejected'

  // eslint-disable-next-line require-await
  async function run(promise: Promise<any>) {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useCallbackStatus().run must be a promise. Maybe a function that's passed isn't returning anything?`,
      )
    }
    safeSetState({status: 'pending'})
    return promise.then(
      value => {
        safeSetState({status: 'rest'})
        return value
      },
      // eslint-disable-next-line no-shadow
      (error: Error) => {
        safeSetState({status: 'rejected', error})
        return Promise.reject(error)
      },
    )
  }

  return {
    isPending,
    isRejected,
    error,
    status,
    run,
  }
}

export {useCallbackStatus}
