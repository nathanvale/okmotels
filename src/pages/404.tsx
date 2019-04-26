import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {PageTitle} from '../components/PageTitle'
import {Container} from '../components/Container'
import {Layout} from '../components/Layout'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const NotFoundPage: React.FC = (): JSX.Element => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <PageTitle>Page Not Found</PageTitle>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default NotFoundPage
