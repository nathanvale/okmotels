export const Auth = {
  currentAuthenticatedUser: jest.fn(() => Promise.reject('not authenticated')),
  signIn: jest.fn(),
  signOut: jest.fn(),
  signUp: jest.fn(),
}
