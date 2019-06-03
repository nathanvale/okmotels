import {AuthContentData} from '../../types/custom-types'
import {getUser} from './auth-client'
import {readForUser} from './list-items-client'

async function bootstrapAppData(): Promise<AuthContentData> {
  const data = await getUser()
  if (!data) {
    return {user: null, listItems: []}
  }
  const {user} = data
  const {listItems} = await readForUser(user.id)
  return {
    user,
    listItems,
  }
}

export {bootstrapAppData}
