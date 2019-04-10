import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {Maybe, ContentfulAsset, MarkdownRemark} from '../graphql'

import {Fluid} from '../types'

//extends Pick<ContentfulPost, 'title' | 'id' | 'slug' | 'publishDate'>
interface Props {
  featured?: boolean
  // heroImage: Maybe<Pick<ContentfulAsset, 'title'> & {fluid: Fluid}>
  // body: Maybe<{
  //   childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'excerpt'>>
  // }>
}

const Post = styled.li<Props>`
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

const Card: React.SFC<Props> = ({
  slug,
  heroImage,
  title,
  publishDate,
  body,
  ...props
}): JSX.Element => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage && heroImage.fluid} backgroundColor="#eeeeee" />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html:
              body &&
              body.childMarkdownRemark &&
              body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
