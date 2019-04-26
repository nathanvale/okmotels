import React from 'react'
import {ThemeProvider} from 'styled-components'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import {Menu} from './Menu'
import {Footer} from './Footer'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const favicon = require('../images/favicon.ico')

const Layout: React.FC = ({children}): JSX.Element => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menu />
            {children}
          </div>
          <Footer />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export {Layout}
