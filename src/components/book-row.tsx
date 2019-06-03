import React from 'react'
import {Link} from '@reach/router'
import {DefaultTheme, css} from 'styled-components'
import {useSingleListItemState} from '../context/list-item-context'
import {Book} from '../../types/custom-types'
import {media} from '../styles/media-queries'
import {StatusButtons} from './status-buttons'
import {Rating} from './rating'

interface BookRowProps {
  book: Book
  theme?: DefaultTheme
}

function BookRow({book, theme}: BookRowProps) {
  const {title, author, coverImageUrl} = book
  const listItem = useSingleListItemState(book.id)
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
      })}
    >
      <Link
        to={`/app/book/${book.id}`}
        css={css({
          flexGrow: 2,
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gridGap: 20,
          border: `1px solid ${theme && theme.colors.gray20}`,
          color: theme && theme.colors.text,
          padding: '1.25em',
          borderRadius: '3px',
          ':hover,:focus': {
            textDecoration: 'none',
            boxShadow: '0 5px 15px -5px rgba(0,0,0,.08)',
            color: 'inherit',
          },
        })}
      >
        <div
          css={css({
            width: 140,
            [media.sm]: {
              width: 100,
            },
          })}
        >
          <img
            src={coverImageUrl}
            alt={`${title} book cover`}
            css={css({maxHeight: '100%', maxWidth: '100%'})}
          />
        </div>
        <div css={css({flex: 1})}>
          <div css={css({display: 'flex', justifyContent: 'space-between'})}>
            <div css={css({flex: 1})}>
              <h2
                css={css({
                  fontSize: '1.25em',
                  margin: '0',
                  color: theme && theme.colors.indigo,
                })}
              >
                {title}
              </h2>
              {listItem ? <Rating listItem={listItem} /> : null}
            </div>
            <div css={css({marginLeft: 10})}>
              <div
                css={css({
                  marginTop: '0.4em',
                  fontStyle: 'italic',
                  fontSize: '0.85em',
                })}
              >
                {author}
              </div>
              <small>{book.publisher}</small>
            </div>
          </div>
          <small>{book.synopsis.substring(0, 500)}...</small>
        </div>
      </Link>
      <div
        css={css({
          marginLeft: '20px',
          position: 'absolute',
          color: theme && theme.colors.gray80,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
        })}
      >
        <StatusButtons book={book} />
      </div>
    </div>
  )
}

export {BookRow}
