import React from 'react'
import {navigate} from 'gatsby'
import {RouteComponentProps} from '@reach/router'
import Helmet from 'react-helmet'
import {handleLogin, isLoggedIn} from '../services/auth'
import {Form, Submit, Input} from '../components/FormElements'
import {PageTitle} from '../components/PageTitle'
import {Container} from '../components/Container'

class Login extends React.Component<RouteComponentProps> {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render(): JSX.Element {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <Helmet>
          <title>{`Login`}</title>
        </Helmet>
        <Container data-testid="login">
          <PageTitle>Login</PageTitle>
          <Form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
              navigate(`/app/profile`)
            }}
          >
            <label hidden htmlFor="username">
              Username
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={this.handleUpdate}
            />
            <label hidden htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={this.handleUpdate}
            />
            <Submit type="submit" value="Log In" />
          </Form>
        </Container>
      </>
    )
  }
}

export {Login}
