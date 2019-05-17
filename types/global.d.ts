import 'styled-components'

declare module 'contentful-management'
declare module 'contentful-migration/built/bin/cli'

declare module '*.ico' {
  const content: string
  // eslint-disable-next-line import/no-default-export
  export default content
}

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
