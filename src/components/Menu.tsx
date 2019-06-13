import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {useUser} from '../context/user-context'
import {LoginModal, RegisterModal} from './authentication'
import {Logout} from './logout'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  span {
    color: white;
    white-space: nowrap;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    white-space: nowrap;
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

function AuthenticatedNav() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/" activeStyle={activeLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/app/list/" activeStyle={activeLinkStyle}>
            App
          </Link>
        </li>
        <li>
          <Link to="/about/" activeStyle={activeLinkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeStyle={activeLinkStyle}>
            Contact
          </Link>
        </li>
        <li>
          <Logout trigger={<a href="/">Logout</a>} />
        </li>
      </ul>
    </Nav>
  )
}

function UnAuthenticatedNav() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/" activeStyle={activeLinkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about/" activeStyle={activeLinkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeStyle={activeLinkStyle}>
            Contact
          </Link>
        </li>
        <li>
          <RegisterModal trigger={<a href="/">Sign in</a>} />
        </li>
        <li>
          <LoginModal trigger={<a href="/">Log in</a>} />
        </li>
      </ul>
    </Nav>
  )
}

export function Menu() {
  const user = useUser()
  return <Header>{user ? <AuthenticatedNav /> : <UnAuthenticatedNav />}</Header>
}
