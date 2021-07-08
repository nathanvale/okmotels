import {AuthContentData} from '../../types/custom-types'
import {getUser} from './auth-client'

async function bootstrapAppData(): Promise<AuthContentData> {
  const user = await getUser()
  if (!user) {
    return {user: null, listItems: []}
  }
  //const {listItems} = await readForUser(user.id)
  return {
    user,
    listItems: [],
  }
}

export {bootstrapAppData}
