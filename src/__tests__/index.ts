import {
  within,
  waitForElementToBeRemoved,
  waitForElement,
  getByTitle,
} from 'react-testing-library'
import ReactDOM from 'react-dom'
import {Auth} from 'aws-amplify'

// mock out hacks because that's basically the backend and we don't really
// want the backend running in our tests because that's not how a real app is
// tested (for unit/integration level tests).
jest.mock('../hacks')
jest.mock('aws-amplify')

test('booting up the app from the index file does not break anything', async () => {
  // setup
  const div = document.createElement('div')
  div.setAttribute('id', 'root')
  document.body.appendChild(div)

  // run the file and wait for things to settle.
  require('..')
  const {getByTitle} = within(document.body)
  await waitForElementToBeRemoved(() => getByTitle(/loading page.../i))

  // cleanup
  ReactDOM.unmountComponentAtNode(div)
  document.body.removeChild(div)
})

const sleep = (t = Math.random() * 200 + 3000) =>
  new Promise(resolve => setTimeout(resolve, t))

test.only('should show spinner when getting user', async () => {
  console.log('fuck')
  console.log(Auth.currentAuthenticatedUser)
  expect(1).toBe(1)
  console.log()
  Auth.currentAuthenticatedUser.mockImplementation(() =>
    Promise.reject('not authenticated'),
  )
  const div = document.createElement('div')
  div.setAttribute('id', 'root')
  document.body.appendChild(div)

  // run the file and wait for things to settle.
  require('..')

  await waitForElement(() => getByTitle(document.body, /Loazding/i), {
    container: document.body,
  })
  //await waitForElementToBeRemoved(() => getByTitle(/loading pdage.../i))

  // cleanup
  ReactDOM.unmountComponentAtNode(div)
  document.body.removeChild(div)
})
