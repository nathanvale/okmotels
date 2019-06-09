import React from 'react'
import {Link, navigate} from 'gatsby'
import styled from 'styled-components'
import {getUser, isLoggedIn, logout} from '../services/auth'
import {Modal} from './Modal'

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

const Menu: React.FC = (): JSX.Element => {
  const content = {message: '', login: true}
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = 'You are not logged in'
  }
  return (
    <Header>
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
          {isLoggedIn() ? (
            <li>
              <a
                href="/"
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/app/login`))
                }}
              >
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Modal trigger={<a href="/">Login!</a>}>Fuck</Modal>
            </li>
          )}
        </ul>
      </Nav>
    </Header>
  )
}

export {Menu}
