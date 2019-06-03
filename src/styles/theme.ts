import {DefaultTheme} from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    base: '#121212', // Black
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#f3f3f3', // Light Gray
    highlight: '#5b8bf7', // Light Blue
    base2: 'white',
    text: '#434449',
    gray: '#f1f2f7',
    gray10: '#f1f1f4',
    gray20: '#e4e5e9',
    gray80: '#6f7077',
    indigo: '#3f51b5',
    indigoDarken10: '#364495',
    indigoLighten80: '#b7c1f8',
    yellow: '#ffc107',
    green: '#4caf50',
    danger: '#ef5350',
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}

// eslint-disable-next-line import/no-default-export
export default theme
