import styled, {css, keyframes} from 'styled-components'
import React from 'react'
import useTimeout from 'react-use/lib/useTimeout'
import {Spinner11} from 'styled-icons/icomoon'
import VisuallyHidden from '@reach/visually-hidden'

export const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

export const CircleButton = styled.button`
  border-radius: 30px;
  padding: 0;
  width: 40px;
  height: 40px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.gray10};
  cursor: pointer;
`

export const BookListUL = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 1em;
`

export const Button = styled.button<{
  variant?: 'primary' | 'secondary'
}>`
  padding: 10px 15px;
  border: 0;
  line-height: 1;
  ${({variant = 'primary', theme}) =>
    variant === 'primary'
      ? `background: ${theme.colors.indigo}
        color: ${theme.colors.base2}`
      : `background: ${theme.colors.gray}
        color: ${theme.colors.text}`};
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled(Spinner11).attrs(({size}) => ({
  title: 'Loading',
  size: size ? size : '24',
}))`
  animation: ${spin} 1s linear infinite;
`

export function FullPageSpinner() {
  const ready = useTimeout(0)
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-top: 100px;
      `}
    >
      <span title="Loading page..." role="alert" aria-live="assertive">
        {ready ? <Spinner size="48" /> : null}
        <VisuallyHidden>Retrieving user...</VisuallyHidden>
      </span>
    </div>
  )
}
