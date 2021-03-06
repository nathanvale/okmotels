import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import idx from 'idx'
import {Fluid} from '../../types/custom-types'
import {
  ContentfulAsset,
  MarkdownRemark,
  ContentfulFluid,
} from '../../types/graphql'

interface CardProps {
  title?: string
  id?: string
  slug?: string
  publishDate?: string
  heroImage?: Pick<ContentfulAsset, 'title'> & {
    fluid?: Pick<
      ContentfulFluid,
      'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >
  }
  body?: {
    childMarkdownRemark?: Pick<MarkdownRemark, 'html' | 'excerpt'>
  }
  featured?: boolean
}

interface PostProps {
  featured?: boolean
}

const Post = styled.li<PostProps>`
  position: relative;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`
const fluidFactory = ({
  aspectRatio = 1,
  src = '',
  srcSet = '',
  srcWebp,
  srcSetWebp,
  sizes = '',
}: Pick<
  ContentfulFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
> = {}): Fluid => ({
  aspectRatio,
  src,
  srcSet,
  srcWebp,
  srcSetWebp,
  sizes,
})

const Card: React.FC<CardProps> = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  ...props
}): JSX.Element => {
  const excerpt = idx(body, _ => _.childMarkdownRemark.excerpt)
  const fluid = fluidFactory(heroImage && heroImage.fluid)
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={fluid} backgroundColor="#eeeeee" />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: excerpt ? excerpt : '',
          }}
        />
      </Link>
    </Post>
  )
}

export {Card}
