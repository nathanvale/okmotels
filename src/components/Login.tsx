import React from 'react'
import {navigate} from 'gatsby'
import {RouteComponentProps} from '@reach/router'
import Helmet from 'react-helmet'
import {handleLogin, isLoggedIn} from '../services/auth'
import {Form, Submit, Input} from '../components/FormElements'
import {PageTitle} from '../components/PageTitle'

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

        <PageTitle>Login</PageTitle>
        <Form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleUpdate}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleUpdate}
          />
          <Submit type="submit" value="Log In" />
        </Form>
      </>
    )
  }
}

export {Login}
