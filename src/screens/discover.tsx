/* eslint-disable complexity */
import React from 'react'
import Tooltip from '@reach/tooltip'
import {FaSearch, FaTimes} from 'react-icons/fa'
import {useAsync} from 'react-async'
import {css} from 'styled-components'
import {RouteComponentProps} from '@reach/router'
import * as booksClient from '../utils/books-client'
import {BookRow} from '../components/book-row'
import {BookListUL, Spinner} from '../components/lib'

function initialSearch() {
  return booksClient.search('')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function search([query]: any[]) {
  return booksClient.search(query)
}

const DiscoverBooksScreen: React.FC<RouteComponentProps> = () => {
  const [query, setQuery] = React.useState('')
  const [hasSearched, setHasSearched] = React.useState()
  const {data, isPending, isRejected, isResolved, error, reload} = useAsync({
    promiseFn: initialSearch,
    deferFn: search,
  })
  const {books} = data || {books: []}

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleSearchClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setHasSearched(true)
    reload()
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSearchClick}>
          <input
            onChange={handleInputChange}
            placeholder="Search books..."
            id="search"
            css={css({width: '100%'})}
          />
          <Tooltip label="Search Books">
            <label htmlFor="search">
              <button
                type="submit"
                css={css({
                  border: '0',
                  position: 'relative',
                  marginLeft: '-35px',
                  background: 'transparent',
                })}
              >
                {isPending ? (
                  <Spinner />
                ) : isRejected ? (
                  <FaTimes aria-label="error" css={css({color: 'red'})} />
                ) : (
                  <FaSearch aria-label="search" />
                )}
              </button>
            </label>
          </Tooltip>
        </form>

        {isRejected ? (
          <div css={css({color: 'red'})}>
            <p>There was an error:</p>
            <pre>{error && error.message}</pre>
          </div>
        ) : null}
      </div>
      <div>
        {hasSearched ? null : (
          <div
            css={css({marginTop: 20, fontSize: '1.2em', textAlign: 'center'})}
          >
            <p>Welcome to the discover page.</p>
            <p>Here, let me load a few books for you...</p>
            {isPending ? (
              <div css={css({width: '100%', margin: 'auto'})}>
                <Spinner />
              </div>
            ) : isResolved && books.length ? (
              <p>Here you go! Find more books with the search bar above.</p>
            ) : isResolved && !books.length ? (
              <p>
                Hmmm... I could not find any books to suggest for you. Sorry.
              </p>
            ) : null}
          </div>
        )}
        {isResolved ? (
          books.length ? (
            <BookListUL css={css({marginTop: 20})}>
              {books.map(book => (
                <li key={book.id}>
                  <BookRow key={book.id} book={book} />
                </li>
              ))}
            </BookListUL>
          ) : hasSearched ? (
            <div
              css={css({marginTop: 20, fontSize: '1.2em', textAlign: 'center'})}
            >
              <p>Hmmm... can't find any books</p>
              <p>Here, let me load a few books for you...</p>
              {isPending ? (
                <div css={css({width: '100%', margin: 'auto'})}>
                  <Spinner />
                </div>
              ) : (
                <p>
                  Hmmm... I couldn't find any books with the query "{query}."
                  Please try another.
                </p>
              )}
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  )
}

export {DiscoverBooksScreen}
