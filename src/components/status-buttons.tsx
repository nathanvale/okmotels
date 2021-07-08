import React from 'react'
import {
  FaCheckCircle,
  FaPlusCircle,
  FaMinusCircle,
  FaBook,
  FaTimesCircle,
} from 'react-icons/fa'

import Tooltip from '@reach/tooltip'
import {css, DefaultTheme} from 'styled-components'
import {useUser} from '../context/user-context'
import {
  useListItemDispatch,
  useSingleListItemState,
  removeListItem,
  updateListItem,
  addListItem,
} from '../context/list-item-context'
import {useCallbackStatus} from '../utils/use-callback-status'
import {Book} from '../../types/custom-types'
import {CircleButton, Spinner} from './lib'

interface TooltipButtonProps {
  label: string
  highlight?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: () => Promise<any>
  icon: React.ReactNode
  theme?: DefaultTheme
}
function TooltipButton({
  label,
  highlight,
  onClick,
  icon,
  theme,
  ...rest
}: TooltipButtonProps) {
  const {isPending, isRejected, error, run} = useCallbackStatus() //?

  function handleClick() {
    run(onClick())
  }

  return (
    <Tooltip label={isRejected ? error.message : label}>
      <CircleButton
        css={css({
          ':hover,:focus': {
            color: isPending ? theme && theme.colors.gray80 : highlight,
          },
        })}
        disabled={isPending}
        onClick={handleClick}
        {...rest}
      >
        {isPending ? <Spinner /> : isRejected ? <FaTimesCircle /> : icon}
      </CircleButton>
    </Tooltip>
  )
}

interface StatusButtonsProps {
  book: Book
  theme?: DefaultTheme
}
function StatusButtons({book, theme}: StatusButtonsProps) {
  const user = useUser()
  const dispatch = useListItemDispatch()
  const listItem = useSingleListItemState(book.id)

  function handleRemoveClick() {
    if (listItem) return removeListItem(dispatch, listItem.id)
    return Promise.reject()
  }

  function handleMarkAsReadClick() {
    if (listItem)
      return updateListItem(dispatch, listItem.id, {finishDate: Date.now()})
    return Promise.reject()
  }

  function handleAddClick() {
    if (!user) throw new Error(`User not logged in!`)

    return addListItem(dispatch, {ownerId: user.id, bookId: book.id})
  }

  function handleMarkAsUnreadClick() {
    if (listItem)
      return updateListItem(dispatch, listItem.id, {finishDate: undefined})
    return Promise.reject()
  }

  return (
    <React.Fragment>
      {listItem ? (
        Boolean(listItem.finishDate) ? (
          <TooltipButton
            label="Unmark as read"
            highlight={theme && theme.colors.yellow}
            onClick={handleMarkAsUnreadClick}
            icon={<FaBook />}
          />
        ) : (
          <TooltipButton
            label="Mark as read"
            highlight={theme && theme.colors.green}
            onClick={handleMarkAsReadClick}
            icon={<FaCheckCircle />}
          />
        )
      ) : null}
      {listItem ? (
        <TooltipButton
          label="Remove from list"
          highlight={theme && theme.colors.danger}
          onClick={handleRemoveClick}
          icon={<FaMinusCircle />}
        />
      ) : (
        <TooltipButton
          label="Add to list"
          highlight={theme && theme.colors.indigo}
          onClick={handleAddClick}
          icon={<FaPlusCircle />}
        />
      )}
    </React.Fragment>
  )
}

export {StatusButtons}
