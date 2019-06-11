import styled, {css} from 'styled-components'
import React, {ReactElement} from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog, Component} from '@reach/dialog'
import {CircleButton} from './lib'

export interface ModalProps {
  trigger: ReactElement
  title: string
  warnOnDismiss?: boolean
  children: (props: ModalRenderProps) => JSX.Element
}
interface ModalRenderProps {
  setState: (value: Partial<ModalState>) => void
  state: ModalState
}
interface ModalState {
  showDialog: boolean
  warn: boolean
}

const ModalTitle = styled.h3({
  textAlign: 'center',
  fontSize: '2em',
})

export function Modal({
  trigger,
  title,
  children,
  warnOnDismiss = false,
}: ModalProps) {
  return (
    <Component<ModalState> initialState={{showDialog: false, warn: false}}>
      {({setState, state}) => {
        function onDismiss() {
          if (warnOnDismiss) setState({warn: true})
          else setState({showDialog: false})
        }
        return (
          <React.Fragment>
            {React.cloneElement(trigger, {
              onClick: (event: Event) => {
                event.preventDefault()
                setState({showDialog: true})
              },
            })}
            <Dialog isOpen={state.showDialog} onDismiss={onDismiss}>
              <div css={css({display: 'flex', justifyContent: 'flex-end'})}>
                <CircleButton onClick={() => setState({showDialog: false})}>
                  <VisuallyHidden>Close</VisuallyHidden>
                  <span aria-hidden>×</span>
                </CircleButton>
              </div>
              <ModalTitle>{title}</ModalTitle>
              {state.warn && (
                <p style={{color: 'red'}}>You must make a choice, sorry :(</p>
              )}
              {children({
                setState,
                state,
              })}
            </Dialog>
          </React.Fragment>
        )
      }}
    </Component>
  )
}
