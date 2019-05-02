import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import idx from 'idx'
import {ContentfulAsset, ContentfulFluid} from '../types/graphql'
import {Fluid} from '../types/custom-types'

interface HeroProps {
  title?: string
  height?: string
  position?: boolean
  fit?: boolean
  image?: Pick<ContentfulAsset, 'title'> & {
    fluid?: Pick<
      ContentfulFluid,
      'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >
  }
}

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`
const BgImg = styled(Img)<Pick<HeroProps, 'position' | 'fit' | 'height'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => (props.fit ? '' : 'cover')} !important;
    object-position: ${props => (props.position ? '' : '50% 50%')} !important;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`

const Hero: React.FC<HeroProps> = (props): JSX.Element => (
  <Wrapper>
    <BgImg
      height={props.height}
      fluid={
        idx<Pick<HeroProps, 'image'>, Fluid>(props, _ => _.image.fluid) ||
        undefined
      }
      backgroundColor="#eeeeee"
    />
    <Title>{props.title}</Title>
  </Wrapper>
)

export {Hero}
