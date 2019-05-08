import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import {Layout} from '../components/Layout'
import {Container} from '../components/Container'
import {PageTitle} from '../components/PageTitle'
import {PageBody} from '../components/PageBody'
import {SEO} from '../components/SEO'
import {PageTemplateQuery} from '../types/graphql'

interface PageTempateProps {
  data: PageTemplateQuery
  pageContext: {
    limit: number
    skip: number
    numPages: number
    currentPage: number
  }
}

const PageTemplate: React.FC<PageTempateProps> = ({data}): JSX.Element => {
  const title = data.contentfulPage && data.contentfulPage.title
  const slug = data.contentfulPage && data.contentfulPage.slug
  const body = data.contentfulPage && data.contentfulPage.body

  const postNode = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      <Container data-testid="page">
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PageTemplate($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

// eslint-disable-next-line import/no-default-export
export default PageTemplate
