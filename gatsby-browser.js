import '@reach/dialog/styles.css'
import '@reach/tooltip/styles.css'
import './src/bootstrap'
import Amplify, {Auth} from 'aws-amplify'
import React from 'react'
import awsmobile from './src/aws-exports'
import {AppProviders} from './src/context'

Amplify.configure(awsmobile)

export const wrapRootElement = ({element}) => (
  <AppProviders>{element}</AppProviders>
)
