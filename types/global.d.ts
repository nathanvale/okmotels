import 'jest-dom/extend-expect'

declare module '@aws-amplify/auth'
declare module 'contentful-management'
declare module 'contentful-migration/built/bin/cli'

declare module '*.ico' {
  const content: string
  // eslint-disable-next-line import/no-default-export
  export default content
}
declare global {
  interface Window {
    fetch: ((input: RequestInfo, init?: RequestInit) => Promise<Response>) &
      jest.Mock
  }
}
declare module 'console' {
  export = typeof import('console')
}

// and extend them!
