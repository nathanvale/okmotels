/* eslint-disable require-await */
import React from 'react'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  within,
} from 'react-testing-library'
import faker from 'faker'
import {ThemeProvider} from 'styled-components'
import {buildUser, buildBook, buildListItem} from '../../test/generate'
import {bootstrapAppData} from '../../utils/bootstrap'
import {AuthProvider} from '../../context/auth-context'
import {UserProvider} from '../../context/user-context'
import {ListItemProvider} from '../../context/list-item-context'
import {BookScreen} from '../book'
import theme from '../../styles/theme'
import {User, Book, ListItem} from '../../../types/custom-types'

jest.mock('../../utils/bootstrap')
const bootstrapAppDataMock = bootstrapAppData as jest.Mock

async function renderBookScreen({
  user = buildUser(),
  bookId = faker.random.uuid(),
  book = buildBook({id: bookId}),
  listItem = buildListItem({owner: user, book: book ? book : undefined}),
}: {
  user?: User
  bookId?: string
  book?: Book | null
  listItem?: ListItem | null
} = {}) {
  bootstrapAppDataMock.mockResolvedValueOnce({
    user,
    listItems: [listItem].filter(Boolean),
  })
  window.fetch.mockResolvedValueOnce({
    status: 200,

    async json() {
      return {
        book,
      }
    },
  })

  const utils = render(
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <ListItemProvider>
            <BookScreen bookId={book ? book.id : bookId} />
          </ListItemProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>,
  )

  await waitForElementToBeRemoved(() => utils.queryByTitle(/Loading page.../i))

  window.fetch.mockClear()

  return {
    ...utils,
    book,
    user,
    listItem,
  }
}

test('renders all the book information', async () => {
  const {
    queryByLabelText,
    getByText,
    getByLabelText,
    book,
  } = await renderBookScreen({listItem: null})

  if (book) {
    getByText(book.title)
    getByText(book.author)
    getByText(book.publisher)
    getByText(book.synopsis)
  }
  getByLabelText(/add to list/i)

  expect(queryByLabelText(/loading/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/remove from list/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/mark as read/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/mark as unread/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/notes/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/start date/i)).not.toBeInTheDocument()
})

test('can create a list item for the book', async () => {
  const {getByLabelText, queryByLabelText, user, book} = await renderBookScreen(
    {listItem: null},
  )

  window.fetch.mockImplementationOnce(async (url, config) => {
    expect(url).toMatch(/list-item/)
    expect(config.method).toBe('POST')
    const body = JSON.parse(config.body)
    if (book) {
      expect(body).toEqual({ownerId: user.id, bookId: book.id})
    }

    return {
      status: 200,

      async json() {
        return {
          listItem: buildListItem({
            book,
            startDate: 1558045613440,
            finishDate: null,
            ...body,
          }),
        }
      },
    }
  })

  const addToListButton = getByLabelText(/add to list/i).querySelector('button')
  if (addToListButton) fireEvent.click(addToListButton)
  expect(addToListButton).toBeDisabled()

  if (addToListButton)
    await waitForElementToBeRemoved(() =>
      within(addToListButton).getByTitle(/^loading$/i),
    )

  getByLabelText(/mark as read/i)
  getByLabelText(/remove from list/i)
  expect(queryByLabelText(/add to list/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/unmark as read/i)).not.toBeInTheDocument()
  getByLabelText(/notes/i)
  const startDateNode = getByLabelText(/start date/i)
  expect(startDateNode).toHaveTextContent('May 19')
  getByLabelText(/1 star/i)
})

test('can remove a list item for the book', async () => {
  const {getByLabelText, queryByLabelText, listItem} = await renderBookScreen()

  window.fetch.mockImplementationOnce(async (url, config) => {
    expect(url).toMatch(/list-item/)
    expect(url.endsWith(listItem && listItem.id)).toBe(true)
    expect(config.method).toBe('DELETE')
    return {
      status: 200,

      async json() {
        return {success: true}
      },
    }
  })

  const removeFromListButton = getByLabelText(
    /remove from list/i,
  ).querySelector('button')
  if (removeFromListButton) fireEvent.click(removeFromListButton)
  expect(removeFromListButton).toBeDisabled()
  if (removeFromListButton)
    await waitForElementToBeRemoved(() =>
      within(removeFromListButton).getByTitle(/^loading$/i),
    )

  getByLabelText(/add to list/i)

  expect(queryByLabelText(/loading/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/remove from list/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/mark as read/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/mark as unread/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/notes/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/start date/i)).not.toBeInTheDocument()
})

test('can mark a list item as read', async () => {
  const user = buildUser()
  const book = buildBook()
  const listItem = buildListItem({
    owner: user,
    book,
    finishDate: null,
    startDate: 1551052800000,
  })
  const {getByLabelText, queryByLabelText} = await renderBookScreen({
    user,
    book,
    listItem,
  })

  window.fetch.mockImplementationOnce(async (url, config) => {
    expect(url).toMatch(/list-item/)
    expect(config.method).toBe('PUT')
    const body = JSON.parse(config.body)
    expect(body.finishDate).toEqual(expect.any(Number))
    return {
      status: 200,

      async json() {
        return {
          listItem: buildListItem({
            ...listItem,
            finishDate: 1558045613440,
            ...body,
          }),
        }
      },
    }
  })

  const markAsReadButton = getByLabelText(/mark as read/i).querySelector(
    'button',
  )
  if (markAsReadButton) fireEvent.click(markAsReadButton)
  expect(markAsReadButton).toBeDisabled()

  if (markAsReadButton)
    await waitForElementToBeRemoved(() =>
      within(markAsReadButton).getByTitle(/^loading$/i),
    )

  getByLabelText(/unmark as read/i)
  getByLabelText(/remove from list/i)
  expect(queryByLabelText(/add to list/i)).not.toBeInTheDocument()
  expect(queryByLabelText(/^mark as read/i)).not.toBeInTheDocument()
  getByLabelText(/notes/i)
  const startAndFinishNode = getByLabelText(/start and finish date/i)
  expect(startAndFinishNode).toHaveTextContent(/Feb 19 .* Jun 19/)
  getByLabelText(/1 star/i)
})

test('shows an error message when the book fails to load', async () => {
  const user = buildUser()

  bootstrapAppDataMock.mockResolvedValueOnce({
    user,
    listItems: [],
  })

  const testError = '__test_error__'

  window.fetch.mockRejectedValueOnce({
    status: 500,
    message: testError,
  })

  const {getByLabelText, getByText} = render(
    <AuthProvider>
      <UserProvider>
        <ListItemProvider>
          <BookScreen bookId="some-id" />
        </ListItemProvider>
      </UserProvider>
    </AuthProvider>,
  )

  await waitForElementToBeRemoved(() => getByLabelText(/loading/i))

  getByText(testError)
})

test('shows an error message when there is no book by the given id', async () => {
  const {getByText} = await renderBookScreen({book: null})
  getByText(/try another/i)
})

test('can edit a note', async () => {
  const {getByLabelText, listItem} = await renderBookScreen()

  if (!listItem) return

  const newNotes = faker.lorem.words()
  const notesTextarea = getByLabelText(/notes/i) as HTMLTextAreaElement

  window.fetch.mockImplementationOnce(async (url, config) => {
    expect(url).toMatch(new RegExp(`list-item/${listItem.id}`))
    expect(config.method).toBe('PUT')
    const body = JSON.parse(config.body)
    expect(body.notes).toEqual(newNotes)
    return {
      status: 200,
      async json() {
        return {
          listItem: {
            ...listItem,
            notes: newNotes,
          },
        }
      },
    }
  })

  // using fake timers to skip debounce time
  jest.useFakeTimers()
  fireEvent.change(notesTextarea, {target: {value: newNotes}})
  jest.runAllTimers()
  jest.useRealTimers()

  await waitForElementToBeRemoved(() => getByLabelText(/loading/i))
  expect(window.fetch).toHaveBeenCalledTimes(1)
  expect(notesTextarea.value).toBe(newNotes)
})

test('note update failures are displayed', async () => {
  const {getByLabelText, listItem, getByText} = await renderBookScreen()

  if (!listItem) return

  const newNotes = faker.lorem.words()
  const notesTextarea = getByLabelText(/notes/i)

  const testErrorMessage = '__test_error_message__'

  window.fetch.mockImplementationOnce(async (url, config) => {
    expect(url).toMatch(new RegExp(`list-item/${listItem.id}`))
    expect(config.method).toBe('PUT')
    const body = JSON.parse(config.body)
    expect(body.notes).toEqual(newNotes)
    return Promise.reject({
      status: 500,
      message: testErrorMessage,
    })
  })

  // using fake timers to skip debounce time
  jest.useFakeTimers()
  fireEvent.change(notesTextarea, {target: {value: newNotes}})
  jest.runAllTimers()
  jest.useRealTimers()

  await waitForElementToBeRemoved(() => getByLabelText(/loading/i))
  expect(window.fetch).toHaveBeenCalledTimes(1)
  getByText(testErrorMessage)
})
