import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/global'
import config from '../utils/site-config'
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
      <Fragment>
        <div className="siteContent">
          <Menu />
          {children}
        </div>
        <Footer />
      </Fragment>
      <GlobalStyle />
    </div>
  )
}

export {Layout}
