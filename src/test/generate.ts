import faker from 'faker'
import {
  User,
  UserPartial,
  BookPartial,
  Book,
  ListItem,
  ListItemPartial,
} from '../../types/custom-types'

function buildUser(overrides: UserPartial = {}): User {
  const email = faker.internet.email()
  return {
    id: faker.random.uuid(),
    username: email,
    email,
    emailVerified: true,
    phoneNumber: faker.phone.phoneNumber(),
    phoneNumberVerified: true,
    ...overrides,
  }
}

function buildBook(overrides: BookPartial = {}): Book {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.words(),
    author: faker.name.findName(),
    coverImageUrl: faker.image.imageUrl(),
    pageCount: faker.random.number(400),
    publisher: faker.company.companyName(),
    synopsis: faker.lorem.paragraph(),
    ...overrides,
  }
}

function buildListItem(
  overrides: ListItemPartial & {owner?: User} = {},
): ListItem {
  const {
    bookId = overrides.book ? overrides.book.id : faker.random.uuid(),
    startDate = faker.date.past(2),
    //@ts-ignore
    finishDate = faker.date.between(startDate, new Date()),
    owner = {id: faker.random.uuid()},
    ...rest
  } = overrides
  return {
    id: faker.random.uuid(),
    bookId,
    ownerId: owner.id,
    rating: faker.random.number(5),
    notes: faker.random.boolean() ? '' : faker.lorem.paragraph(),
    finishDate,
    startDate,
    book: buildBook({id: bookId}),
    ...rest,
  }
}

export {buildUser, buildListItem, buildBook}
