import React from 'react'

module.exports = {
  // eslint-disable-next-line react/display-name
  Dialog: ({children, isOpen}) =>
    isOpen ? <div aria-modal="true">{children}</div> : null,
}
