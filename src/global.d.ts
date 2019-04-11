import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: string
      secondary: string
      tertiary: string
      highlight: string
    }
    sizes: {
      maxWidth: string
      maxWidthCentered: string
    }
    responsive: {
      small: string
      medium: string
      large: string
    }
  }
}
