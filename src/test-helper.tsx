import React from 'react'

import {render, RenderResult, RenderOptions} from 'react-testing-library'
import {ThemeProvider} from 'styled-components'
import {Omit} from './helper'

export const mock = <T extends {}, K extends keyof T>(
  object: T,
  property: K,
  value: T[K],
): void => {
  Object.defineProperty(object, property, {get: () => value})
}

export const renderWithTheme = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: React.ReactElement<any>,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)
