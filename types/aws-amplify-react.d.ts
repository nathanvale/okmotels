/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'aws-amplify-react' {
  export type Override =
    | 'Greetings'
    | 'SignIn'
    | 'ConfirmSignIn'
    | 'RequireNewPassword'
    | 'SignUp'
    | 'ConfirmSignUp'
    | 'VerifyContact'
    | 'ForgotPassword'
    | 'TOTPSetup'
    | 'Loading'
  export interface AuthenticatorProps {
    authState?: AuthState
    amplifyConfig?: any
    onStateChange?: (state: AuthState, data: any) => void
    theme?: any
    errorMessage?: any
    container?: any
    children?: React.ReactNode
  }
  export const Authenticator: React.FC<AuthenticatorProps>
  export type AuthState =
    | 'signIn'
    | 'signUp'
    | 'confirmSignIn'
    | 'confirmSignUp'
    | 'forgotPassword'
    | 'verifyContact'
    | 'signedIn'
}
