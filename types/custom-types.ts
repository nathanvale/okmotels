/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Fluid {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64?: string
  tracedSVG?: string
  srcWebp?: string
  srcSetWebp?: string
}
export interface AuthContentData {
  user: User | null
  listItems: ListItem[]
}
export interface SignupFormPayload {
  username: string
  password: string
}
export interface User {
  id: string
  username: string
}
export type UserPartial = Partial<{[key in keyof User]: User[key]}>
export interface LoginFormPayload {
  username: string
  password: string
}

export interface Book {
  id: string
  title: string
  author: string
  coverImageUrl: string
  pageCount: number
  publisher: string
  synopsis: string
}

export type BookPartial = Partial<{[key in keyof Book]: Book[key]}>

export interface ListItem {
  id: string
  bookId: string
  ownerId: string
  rating: number
  notes: string
  finishDate: Date | number | null
  startDate: Date | number | null
  book: Book
}

export type ListItemPartial = Partial<{[key in keyof ListItem]: ListItem[key]}>

export type Maybe<T> = T | undefined
