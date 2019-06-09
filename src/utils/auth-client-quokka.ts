/* eslint-disable no-console */
import Amplify from 'aws-amplify'
import {CognitoUser} from '@aws-amplify/auth'
import fetch from 'node-fetch'

import awsmobile from '../aws-exports'
import {User} from '../../types/custom-types'
import {getUser, login, logout} from './auth-client'

// @ts-ignore
global.fetch = fetch
Amplify.configure(awsmobile)

async function testLogin() {
  await logout()
  // const cognitoUser: CognitoUser | null = await login({
  //   username: 'hi@nathanvale.com',
  //   password: 'Passw0rd1873!',
  // })
  // console.log(cognitoUser)
  // let user: User | null = await getUser()
  // console.log(user)
  // await logout()
  // user = await getUser()
  // console.log(user)
}

;(async () => {
  try {
    await testLogin()
  } catch (error) {
    console.log(error)
  }
})()
