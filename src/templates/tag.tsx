import React from 'react'
import {graphql} from 'gatsby'
import orderBy from 'lodash/orderBy'
import Helmet from 'react-helmet'
import * as moment from 'moment'
import config from '../utils/siteConfig'
import {Layout} from '../components/Layout'
import {Card} from '../components/Card'
import {CardList} from '../components/CardList'
import {PageTitle} from '../components/PageTitle'
import {Pagination} from '../components/Pagination'
import {Container} from '../components/Container'
import {TagTemplateQuery} from '../types/graphql'

interface TagProps {
  data: TagTemplateQuery
  pageContext: {
    readonly slug: string
    readonly limit: number
    readonly skip: number
    readonly numPages: number
    readonly currentPage: number
  }
}

const TagTemplate: React.FC<TagProps> = ({data, pageContext}): JSX.Element => {
  const posts = orderBy(
    data.contentfulTag && data.contentfulTag.post,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [(object: any) => moment.default(object.publishDateISO)],
    ['desc'],
  )

  const title = data.contentfulTag && data.contentfulTag.title
  const slug = data.contentfulTag && data.contentfulTag.slug
  const numberOfPosts = posts.length
  const skip = pageContext.skip
  const limit = pageContext.limit
  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${
            config.siteTitle
          }`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${
              config.siteTitle
            }`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}

      <Container>
        <PageTitle small>
          {numberOfPosts} Posts Tagged: &ldquo;
          {title}
          &rdquo;
        </PageTitle>

        <CardList>
          {posts.slice(skip, limit * currentPage).map(post => (
            <Card {...post} key={post && post.id} />
          ))}
        </CardList>
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query TagTemplate($slug: String!) {
    contentfulTag(slug: {eq: $slug}) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")
        heroImage {
          title
          fluid(maxWidth: 1800) {
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`

// eslint-disable-next-line import/no-default-export
export default TagTemplate
