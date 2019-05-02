import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {ContentfulTag} from '../types/graphql'
import {Maybe} from '../types/custom-types'

// prettier-ignore
interface TagListProps {
  tags?:  Maybe<Pick<ContentfulTag, 'title' | 'slug' | 'id'>>[]
}

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  a {
    float: left;
    transition: 0.2s;
    background: ${props => props.theme.colors.tertiary};
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    border: 1px solid ${props => props.theme.colors.secondary};
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
`

const TagList: React.FC<TagListProps> = (props): JSX.Element => {
  return (
    <List>
      {props.tags &&
        props.tags.map(tag => (
          <Tag key={tag && tag.id}>
            <Link to={`/tag/${tag && tag.slug}/`}>{tag && tag.title}</Link>
          </Tag>
        ))}
    </List>
  )
}

export {TagList}
