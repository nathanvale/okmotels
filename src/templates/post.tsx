import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'

import config from '../utils/siteConfig'
import {Layout} from '../components/Layout'
import {Hero} from '../components/Hero'
import {Container} from '../components/Container'
import {PageBody} from '../components/PageBody'
import {TagList} from '../components/TagList'
import {PostLinks} from '../components/PostLinks'
import {PostDate} from '../components/PostDate'
import {SEO} from '../components/SEO'
import {PostTemplateQuery} from '../types/graphql'

interface PostTemplateProps {
  readonly data: PostTemplateQuery
  pageContext: {
    readonly slug: string
    readonly prev: {slug: string}
    readonly next: {slug: string}
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({
  data,
  pageContext,
}): JSX.Element => {
  const title = data.contentfulPost && data.contentfulPost.title
  const slug = data.contentfulPost && data.contentfulPost.slug
  const body = data.contentfulPost && data.contentfulPost.body
  const heroImage = data.contentfulPost && data.contentfulPost.heroImage
  const publishDate = data.contentfulPost && data.contentfulPost.publishDate
  const tags = data.contentfulPost && data.contentfulPost.tags

  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height="50vh" />

      <Container>
        {tags && <TagList tags={tags} />}
        <PostDate date={publishDate} />
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query PostTemplate($slug: String!) {
    contentfulPost(slug: {eq: $slug}) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
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
        ogimg: resize(width: 1800) {
          src
          width
          height
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
export default PostTemplate
