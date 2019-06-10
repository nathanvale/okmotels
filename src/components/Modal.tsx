import {css} from 'styled-components'
import React, {ReactElement} from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog} from '@reach/dialog'
import {CircleButton} from './lib'

export interface ModalProps {
  trigger: ReactElement
  children: React.ReactNode
}

export function Modal({trigger: button, children}: ModalProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      {React.cloneElement(button, {
        onClick: async event => {
          event.preventDefault()
          //await new Promise(resolve => setTimeout(resolve, 0))
          setIsOpen(true)
        },
      })}
      <Dialog isOpen={isOpen}>
        <div css={css({display: 'flex', justifyContent: 'flex-end'})}>
          <CircleButton onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        {children}
      </Dialog>
    </React.Fragment>
  )
}
