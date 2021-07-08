import {} from 'styled-components/cssprop'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: string
      secondary: string
      tertiary: string
      highlight: string
      base2: string
      text: string
      gray: string
      gray10: string
      gray20: string
      gray80: string
      indigo: string
      indigoDarken10: string
      indigoLighten80: string
      yellow: string
      green: string
      danger: string
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
