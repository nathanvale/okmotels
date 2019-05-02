import React from 'react'
import styled from 'styled-components'

interface PostDateProps {
  date: string
}

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Date = styled.p`
  display: inline-block;
  span {
    font-weight: 600;
  }
`

const PostDate: React.FC<PostDateProps> = (props): JSX.Element => {
  return (
    <Wrapper>
      <Date>
        <span>Published:</span> {props.date}
      </Date>
    </Wrapper>
  )
}

export {PostDate}