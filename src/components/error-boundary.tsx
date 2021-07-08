/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

class ErrorBoundary extends React.Component<any, {hasError: boolean}> {
  constructor(props: any) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true}
  }

  componentDidCatch(error: Error, info: any) {
    // You can also log the error to an error reporting service
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export {ErrorBoundary}
