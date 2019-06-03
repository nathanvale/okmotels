import React from 'react'
import debounceFn from 'debounce-fn'
import {useAsync} from 'react-async'
import {FaStar} from 'react-icons/fa'
import {css, DefaultTheme} from 'styled-components'
import {
  useListItemDispatch,
  updateListItem,
  ListItemAction,
} from '../context/list-item-context'
import {ListItem} from '../../types/custom-types'

interface RatingProps {
  listItem: ListItem
  theme?: DefaultTheme
}

function updateRating(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [rating]: any[],
  {
    dispatch,
    listItem,
  }: {dispatch?: React.Dispatch<ListItemAction>; listItem?: ListItem},
) {
  if (rating && dispatch && listItem)
    return updateListItem(dispatch, listItem.id, {rating})
  else return Promise.reject('Missing props!')
}

function Rating({listItem, theme}: RatingProps) {
  const [isTabbing, setIsTabbing] = React.useState(false)

  const dispatch = useListItemDispatch()
  const {isRejected, error, run} = useAsync({
    deferFn: updateRating,
    dispatch,
    listItem,
  })

  const debouncedRun = React.useCallback(debounceFn(run, {wait: 300}), [])

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Tab') {
        setIsTabbing(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown, {once: true})
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const rootClassName = `list-item-${listItem.id}`

  const stars = Array.from({length: 5}).map((x, i) => {
    const ratingId = `rating-${listItem.id}-${i}`
    const ratingValue = i + 1
    return (
      <React.Fragment key={i}>
        <input
          name={rootClassName}
          type="radio"
          id={ratingId}
          value={ratingValue}
          defaultChecked={ratingValue === listItem.rating}
          onChange={() => debouncedRun(ratingValue)}
          className="visually-hidden"
          css={css({
            [`.${rootClassName} &:checked ~ label`]: {
              color: theme && theme.colors.gray20,
            },
            [`.${rootClassName} &:checked + label`]: {color: 'orange'},
            [`.${rootClassName} &:hover ~ label`]: {
              color: `${theme && theme.colors.gray20} !important`,
            },
            [`.${rootClassName} &:hover + label`]: {color: 'orange !important'},
            [`.${rootClassName} &:focus + label svg`]: {
              outline: isTabbing ? '1px solid orange' : 'initial',
            },
          })}
        />
        <label
          htmlFor={ratingId}
          css={css({
            cursor: 'pointer',
            color:
              listItem.rating < 0 ? theme && theme.colors.gray20 : 'orange',
            margin: 0,
          })}
        >
          <span className="visually-hidden">
            {ratingValue} {ratingValue === 1 ? 'star' : 'stars'}
          </span>
          <FaStar
            css={css({
              width: '16px',
              margin: '0 2px',
            })}
          />
        </label>
      </React.Fragment>
    )
  })
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      css={css({display: 'inline-block'})}
      onClick={e => e.stopPropagation()}
    >
      <div
        className={rootClassName}
        css={css({
          display: 'flex',
          alignItems: 'center',
          [`&.${rootClassName}:hover input + label`]: {
            color: 'orange',
          },
        })}
      >
        <span
          css={css({
            '& span:not(:last-child)': {
              marginRight: '5px',
            },
          })}
        >
          {stars}
        </span>
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
      </div>
    </div>
  )
}

export {Rating}
