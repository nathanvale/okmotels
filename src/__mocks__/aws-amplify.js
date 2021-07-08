export const Auth = {
  currentAuthenticatedUser: jest.fn(() => Promise.reject('not authenticateda')),
  signIn: jest.fn(),
  signOut: jest.fn(),
  signUp: jest.fn(),
}
