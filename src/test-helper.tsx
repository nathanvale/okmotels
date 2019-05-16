import React from 'react'

import {render, RenderResult, RenderOptions} from 'react-testing-library'
import {ThemeProvider} from 'styled-components'
import * as contentful from 'contentful'
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

export const createContentful = ({
  space = process.env.CONTENTFUL_SPACE_ID || '',
  accessToken = process.env.CONTENTFUL_CDA_TOKEN || '',
  environment = process.env.CONTENTFUL_ENVIRONMENT || '',
}: {
  space?: string
  accessToken?: string
  environment?: string
} = {}): contentful.ContentfulClientApi => {
  const client = contentful.createClient({
    space,
    accessToken,
    environment,
  })
  return client
}
