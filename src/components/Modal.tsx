import styled, {css} from 'styled-components'
import React, {ReactElement} from 'react'
import VisuallyHidden from '@reach/visually-hidden'
// eslint-disable-next-line import/no-extraneous-dependencies
import Component from '@reach/component-component'
import {Dialog} from '@reach/dialog'
import {CircleButton} from './lib'

export interface ModalProps {
  trigger: JSX.Element
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
  let isMounted = false
  function didMount() {
    isMounted = true
  }
  function willUnmount() {
    isMounted = false
  }
  return (
    <Component<ModalState>
      initialState={{showDialog: false, warn: false}}
      willUnmount={willUnmount}
      didMount={didMount}
    >
      {({setState: _setState, state}) => {
        function setState(value: Partial<ModalState>) {
          if (isMounted) {
            _setState(value)
          }
        }
        function onDismiss() {
          if (warnOnDismiss) setState({warn: true})
          else _setState({showDialog: false})
        }
        function onClose() {
          _setState({showDialog: false})
        }
        return (
          <React.Fragment>
            {React.cloneElement(trigger, {
              onClick: (event: Event) => {
                event.preventDefault()
                _setState({showDialog: true})
              },
            })}
            <Dialog isOpen={state.showDialog} onDismiss={onDismiss}>
              <div css={css({display: 'flex', justifyContent: 'flex-end'})}>
                <CircleButton onClick={onClose}>
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
