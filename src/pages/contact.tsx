// TODO: remove this line
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import {Layout} from '../components/Layout'
import {Container} from '../components/Container'
import {PageTitle} from '../components/PageTitle'
import {ContactForm} from '../components/ContactForm'
import {SEO} from '../components/SEO'

const Contact: React.FC = (): JSX.Element => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode as any} pagePath="contact" customTitle />
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Contact
