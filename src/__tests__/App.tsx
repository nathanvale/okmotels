import React from 'react'
import {
  render,
  fireEvent,
  RenderResult,
  waitForDomChange,
} from 'react-testing-library'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
  History,
} from '@reach/router'
import * as gatsby from 'gatsby'
import App from '../pages/app'
import {mock} from '../test-helper'

jest.mock('gatsby')

function renderWithRouter(
  ui: React.ReactNode,
  {route = '/', history = createHistory(createMemorySource(route))} = {},
): RenderResult & {history: History} {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  }
}

test.skip('login page redirects to profile page on correct authentication', async () => {
  const {
    getByLabelText,
    getByTestId,
    getByText,
    history: {navigate},
  } = renderWithRouter(<App />, {
    route: '/app/login',
  })
  mock(gatsby, 'navigate', jest.fn(navigate))
  expect(getByTestId('login')).toMatchSnapshot()
  fireEvent.change(getByLabelText(/Username/i), {target: {value: 'nathanvale'}})
  fireEvent.change(getByLabelText(/Password/i), {target: {value: 'qwerty'}})
  fireEvent.click(getByText(/Log In/i))
  await waitForDomChange()
  expect(getByTestId('profile')).toMatchSnapshot()
})
