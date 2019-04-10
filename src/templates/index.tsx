/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import Seo from '../components/SEO'
import config from '../utils/siteConfig'
import {IndexQuery} from '../graphql'

interface Props {
  data: IndexQuery
  pageContext: any
}

const Index: React.SFC<Props> = ({data, pageContext}): JSX.Element => {
  const posts = data.allContentfulPost && data.allContentfulPost.edges
  const featuredPost = posts && posts[0].node
  const {currentPage} = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <Seo />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {isFirstPage ? (
          <CardList>
            <Card {...featuredPost} featured />
            {posts &&
              posts
                .slice(1)
                .map(({node: post}) => <Card key={post.id} {...post} />)}
          </CardList>
        ) : (
          <CardList>
            {posts &&
              posts.map(({node: post}) => <Card key={post.id} {...post} />)}
          </CardList>
        )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query Index($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: {fields: [publishDate], order: DESC}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
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
  }
`

// eslint-disable-next-line import/no-default-export
export default Index
