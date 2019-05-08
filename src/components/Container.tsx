import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  ['data-testid']: string
}

const Wrapper = styled.section`
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  flex-grow: 1;
`

const Container: React.FC<ContainerProps> = ({
  'data-testid': dataTestId,
  children,
}): JSX.Element => {
  return <Wrapper data-testid={dataTestId}>{children}</Wrapper>
}

export {Container}
