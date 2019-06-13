import React from 'react'

import {Router, Link, Redirect, RouteComponentProps} from '@reach/router'
import styled, {css, DefaultTheme} from 'styled-components'
import {ListItemProvider} from '../context/list-item-context'
import {useAuth} from '../context/auth-context'
import {useUser} from '../context/user-context'
import {ListScreen} from '../screens/list'
import {FinishedScreen as FinishedBooksScreen} from '../screens/finished'
import {DiscoverBooksScreen} from '../screens/discover'
import {BookScreen} from '../screens/book'
import {NotFound} from '../screens/not-found'
import {media} from '../styles/media-queries'
import {Layout} from '../components/Layout'

function AuthenticatedApp() {
  const user = useUser()
  if (!user) throw new Error(`User not logged in!`)
  const {logout} = useAuth()
  return (
    <Layout>
      <div
        css={css({
          margin: '0 auto',
          padding: '2em 0',
          maxWidth: '840px',
          width: '100%',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '3fr 9fr',
          [media.sm]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            width: '100%',
            padding: '2em 1em',
          },
        })}
      >
        <div>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
            })}
          >
            {user.username}
            <button
              onClick={logout}
              css={css({
                marginLeft: '10px',
              })}
            >
              Logout
            </button>
          </div>
          <Nav />
        </div>
        <main css={css({width: '100%'})}>
          <Routes />
        </main>
        <footer />
      </div>
    </Layout>
  )
}

const NavLink = Link
// const NavLink = styled(Link)`
//   display: block;
//   padding: 8px 15px 8px 10px;
//   margin: 5px 0;
//   width: 100%;
//   height: 100%;
//   color: ${({theme}) => theme.colors.text};
//   border-radius: 2px;
//   border-left: 5px solid transparent;
//   :hover: {
//     color: ${({theme}) => theme.colors.indigo};
//     textdecoration: none;
//     background: ${({theme}) => theme.colors.gray10};
//   }
// `

interface NavProps {
  theme?: DefaultTheme
}

function Nav({theme}: NavProps) {
  return (
    <nav
      css={css({
        position: 'sticky',
        top: '2em',
        padding: '3em 1.5em',
        border: `1px solid ${theme && theme.colors.gray10}`,
        borderRadius: '3px',
        [media.sm]: {
          padding: '0.5em 1em',
          position: 'static',
        },
      })}
    >
      <ul
        css={css({
          listStyle: 'none',
          padding: '0',
          '& [aria-current="page"]': {
            borderLeft: `5px solid ${theme && theme.colors.indigo}`,
            background: theme && theme.colors.gray10,
            ':hover': {
              background: theme && theme.colors.gray10,
            },
          },
        })}
      >
        <li>
          <NavLink to="/app/list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/app/finished">Finished Books</NavLink>
        </li>
        <li>
          <NavLink to="/app/discover">Discover</NavLink>
        </li>
      </ul>
    </nav>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RedirectHome(props: RouteComponentProps) {
  return <Redirect to="/app/list" />
}

function Routes() {
  return (
    <ListItemProvider>
      <Router>
        <RedirectHome path="/app" />
        <ListScreen path="/app/list" />
        <FinishedBooksScreen path="/app/finished" />
        <DiscoverBooksScreen path="/app/discover" />
        <BookScreen path="/app/book/:bookId" />
        <NotFound default />
      </Router>
    </ListItemProvider>
  )
}

// eslint-disable-next-line import/no-default-export
export default AuthenticatedApp
