import React from 'react'
import {useAsync} from 'react-async'
import debounceFn from 'debounce-fn'
import {FaRegCalendarAlt} from 'react-icons/fa'
import Tooltip from '@reach/tooltip'
import {css, DefaultTheme} from 'styled-components'
import {RouteComponentProps} from '@reach/router'
import {Spinner} from '../components/lib'
import {
  useListItemDispatch,
  useSingleListItemState,
  updateListItem,
  ListItemAction,
} from '../context/list-item-context'
import {Rating} from '../components/rating'
import * as bookClient from '../utils/books-client'
import {StatusButtons} from '../components/status-buttons'
import {ListItem} from '../../types/custom-types'
import {media} from '../styles/media-queries'

interface BookScreenProps extends RouteComponentProps {
  bookId?: string
  theme?: DefaultTheme
}

async function getBook({bookId}: {bookId?: string}) {
  if (bookId) {
    const data = await bookClient.read(bookId)
    return data.book
  }
  return Promise.reject('Missing props!')
}

const formatDate = (date: Date | number | null) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: '2-digit',
  }).format(date as Date | number | undefined)
}

function BookScreen({bookId = '', theme}: BookScreenProps) {
  const {data: book, isPending, isRejected, isResolved, error} = useAsync({
    promiseFn: getBook,
    bookId,
  })

  const listItem = useSingleListItemState(bookId)

  if (isPending) {
    return (
      <div css={css({marginTop: '2em', fontSize: '2em', textAlign: 'center'})}>
        <Spinner />
      </div>
    )
  }
  if (isRejected) {
    return (
      <div css={css({color: 'red'})}>
        <p>Oh no, there was an error.</p>
        <pre>{error && error.message}</pre>
      </div>
    )
  }

  if (isResolved && !book) {
    return (
      <div css={css({color: 'red'})}>
        <p>Hmmm... Something is not quite right. Please try another book.</p>
      </div>
    )
  }

  if (!book) return null
  const {title, author, coverImageUrl, publisher, synopsis} = book

  return (
    <div>
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gridGap: '2em',
          marginBottom: '1em',
          [media.sm]: {
            display: 'flex',
            flexDirection: 'column',
          },
        })}
      >
        <img
          src={coverImageUrl}
          alt={`${title} book cover`}
          css={css({
            width: '100%',
            maxWidth: 200,
          })}
        />
        <div>
          <div css={css({display: 'flex', position: 'relative'})}>
            <div css={css({flex: 1, justifyContent: 'space-between'})}>
              <h1>{title}</h1>
              <div>
                <i>{author}</i>
                <span css={css({marginRight: 6, marginLeft: 6})}>|</span>
                <i>{publisher}</i>
              </div>
            </div>
            <div
              css={css({
                right: 0,
                color: theme && theme.colors.gray80,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                minHeight: 100,
              })}
            >
              <StatusButtons book={book} />
            </div>
          </div>
          <div css={css({marginTop: 10, height: 46})}>
            {listItem ? (
              <React.Fragment>
                <Rating listItem={listItem} />
                <Tooltip
                  label={
                    listItem.finishDate ? 'Start and finish date' : 'Start date'
                  }
                >
                  <div css={css({marginTop: 6})}>
                    <FaRegCalendarAlt
                      css={css({marginTop: -2, marginRight: 5})}
                    />
                    <span>
                      {formatDate(listItem.startDate)}{' '}
                      {listItem.finishDate
                        ? `— ${formatDate(listItem.finishDate)}`
                        : null}
                    </span>
                  </div>
                </Tooltip>
              </React.Fragment>
            ) : null}
          </div>
          <br />
          <p>{synopsis}</p>
        </div>
      </div>
      {listItem ? <NotesTextarea listItem={listItem} /> : null}
    </div>
  )
}

function updateNotes(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [notes]: any[],
  {
    dispatch,
    listItem,
  }: {dispatch?: React.Dispatch<ListItemAction>; listItem?: ListItem},
) {
  if (notes && dispatch && listItem)
    return updateListItem(dispatch, listItem.id, {notes})
  else return Promise.reject('Missing props!')
}

interface NotesTextareaProps {
  listItem: ListItem
}

function NotesTextarea({listItem}: NotesTextareaProps) {
  const dispatch = useListItemDispatch()
  const {isPending, isRejected, error, run} = useAsync({
    deferFn: updateNotes,
    dispatch,
    listItem,
  })
  const debouncedRun = React.useCallback(debounceFn(run, {wait: 300}), [])
  function handleNotesChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    debouncedRun(e.target.value)
  }

  return (
    <React.Fragment>
      <div>
        <label
          htmlFor="notes"
          css={css({
            display: 'inline-block',
            marginRight: 10,
            marginTop: '0',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
          })}
        >
          Notes
        </label>
        {isRejected ? (
          <span css={css({color: 'red', fontSize: '0.7em'})}>
            <span>There was an error:</span>{' '}
            <pre
              css={css({
                display: 'inline-block',
                overflow: 'scroll',
                margin: '0',
                marginBottom: -5,
              })}
            >
              {error && error.message}
            </pre>
          </span>
        ) : null}
        {isPending ? <Spinner /> : null}
      </div>
      <textarea
        id="notes"
        defaultValue={listItem.notes}
        onChange={handleNotesChange}
        css={css({width: '100%', minHeight: 300})}
      />
    </React.Fragment>
  )
}

export {BookScreen}
