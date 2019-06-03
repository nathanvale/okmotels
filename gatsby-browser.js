import '@reach/dialog/styles.css'
import './src/bootstrap'
import Amplify, {Auth} from 'aws-amplify'
import React from 'react'
import awsConfig from './src/aws-exports'
import {AppProviders} from './src/context'

Amplify.configure(awsConfig)

export const wrapRootElement = ({element}) => (
  <AppProviders>{element}</AppProviders>
)
