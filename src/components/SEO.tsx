/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React, {Component} from 'react'
import Helmet from 'react-helmet'
import idx from 'idx'
import {
  WebSite,
  BreadcrumbList,
  BlogPosting,
  WithContext,
  WebPage,
} from 'schema-dts'
import config from '../utils/siteConfig'
import {
  ContentfulPage,
  MarkdownRemark,
  Internal,
  ContentfulPost,
  PostTemplateQuery,
  PageTemplateQuery,
} from '../types/graphql'
import {Maybe} from '../types/custom-types'

type z = Maybe<
  Pick<ContentfulPage, 'title' | 'slug'> & {
    readonly metaDescription: Maybe<{
      readonly internal: Pick<Internal, 'content'>
    }>
    readonly body: Maybe<{
      readonly childMarkdownRemark: Maybe<
        Pick<MarkdownRemark, 'html' | 'excerpt'>
      >
    }>
  }
>
interface SEOProps {
  postNode:
    | PostTemplateQuery['contentfulPost']
    | PageTemplateQuery['contentfulPage']
  pageSEO?: boolean
  postSEO?: boolean
  pagePath?: string
  customTitle?: string
}

class SEO extends Component<SEOProps> {
  render(): JSX.Element {
    const {postNode, pagePath, postSEO, pageSEO, customTitle} = this.props
    let title: string,
      description: string,
      image: string,
      imgWidth: number,
      imgHeight: number,
      pageUrl: string

    // Set Default OpenGraph Parameters for Fallback
    title = config.siteTitle
    description = config.siteDescription
    image = config.siteUrl + config.shareImage
    imgWidth = config.shareImageWidth
    imgHeight = config.shareImageHeight
    pageUrl = config.siteUrl

    if (customTitle) {
      title = (postNode && postNode.title) || ''
      pageUrl = `${config.siteUrl}/${pagePath}/`
    }

    // Replace with Page Parameters if post or page
    if (postSEO || pageSEO) {
      title = (postNode && postNode.title) || ''
      description =
        postNode && postNode.metaDescription === null
          ? idx<SEOProps['postNode'], string>(
              postNode,
              _ => _.body.childMarkdownRemark.excerpt,
            ) || ''
          : idx<SEOProps['postNode'], string>(
              postNode,
              _ => _.metaDescription.internal.content,
            ) || ''

      pageUrl = `${config.siteUrl}/${pagePath}/`
    }
    // Use Hero Image for OpenGraph
    if (postSEO) {
      image = `https:${idx(postNode, _ => _.heroImage.ogimg.src)}`
      imgWidth =
        idx<Maybe<ContentfulPost>, number>(
          postNode,
          _ => _.heroImage.ogimg.width,
        ) || 0
      imgHeight =
        idx<SEOProps['postNode'], number>(
          postNode,
          _ => _.heroImage.ogimg.height,
        ) || 0
    }

    // Default Website Schema
    const schemaOrgJSONLD: (
      | WithContext<WebSite>
      | WithContext<BreadcrumbList>
      | WithContext<BlogPosting>
      | WithContext<WebPage>)[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: config.siteUrl,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]

    // Blog Post Schema
    if (postSEO) {
      const breadcrumbList: WithContext<BreadcrumbList> = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': config.siteUrl,
              name: config.siteTitle || undefined,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any,
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': pageUrl,
              name: title,
            },
          },
        ],
      }

      const blogPosting: WithContext<BlogPosting> = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        url: pageUrl,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
          width: imgWidth,
          height: imgHeight,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any,
        author: {
          '@type': 'Person',
          name: config.author,
          url: config.authorUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: config.publisher,
          url: config.siteUrl,
        },
        datePublished: postNode && postNode.publishDateISO,
        mainEntityOfPage: pageUrl,
      }
      schemaOrgJSONLD.push(breadcrumbList, blogPosting)
    }

    // Page SEO Schema
    if (pageSEO) {
      schemaOrgJSONLD.push({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: pageUrl,
        name: title,
        alternateName: '',
      })
    }

    return (
      <Helmet>
        {/* General tags */}
        <meta name="image" content={image} />
        <meta name="description" content={description} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        {postSEO ? <meta property="og:type" content="article" /> : null}

        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={String(imgWidth)} />
        <meta property="og:image:height" content={String(imgHeight)} />
        <meta property="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    )
  }
}

export {SEO}
