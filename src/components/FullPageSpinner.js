import React from 'react'
import {Cube} from 'styled-loaders-react'
import useTimeout from 'react-use/lib/useTimeout'

export function FullPageSpinner() {
  const ready = useTimeout(0)
  return (
    <div css={{marginTop: '3em', fontSize: '4em'}}>
      {ready ? <Cube /> : null}
    </div>
  )
}
