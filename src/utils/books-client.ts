import {Book} from '../../types/custom-types'
import {client} from './api-client'

function search(query: string) {
  return client<{books: Book[]}>(`book?query=${encodeURIComponent(query)}`)
}

function read(bookId: string) {
  return client<{book: Book}>(`book/${bookId}`)
}

export {search, read}
