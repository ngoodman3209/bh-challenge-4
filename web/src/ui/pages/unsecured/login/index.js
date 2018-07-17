// TODO Challenge 4 - DIANNE added the loading false, error, and handleClick if '@' and timeout.
// Add a loading spinner for when waiting on the API to give the green light
// Show an error message when the user enters bad data.
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import { Button, Icon, Input } from 'semantic-ui-react'

import css from './index.css'
import PageTemplate from '../'
import { loginProcess } from 'Process/users/auth'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: false
    }
  }

  handleInputEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleInputPassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleClick = () => {
    const { email, password } = this.state

    if (email.indexOf('@') === -1) {
      this.setState({ error: true })
      return
    }

    if (email.indexOf('.com') === -1) {
      this.setState({ error: true })
      return
    }

    this.setState({ loading: true })
    setTimeout(() => this.props.loginProcess(email, password), 6000)
  }

  render() {
    return (
      <PageTemplate>
        <div styleName="title">Welcome to Helio Challenges</div>
        <div styleName="description"> Sign in with your information below</div>
        {this.state.loading ? <img src="sadFace.png" styleName="loading" /> : null}
        {this.state.error ? <div>Please provide a correct email</div> : null}
        <form styleName="form">
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Your Email" type="text"
            value={this.state.email} onChange={this.handleInputEmail} />
          <Input icon="user circle" iconPosition="left" size="big" placeholder="Enter Password" type="password"
            value={this.state.password} onChange={this.handleInputPassword} />
          <Button type="button" animated color="green" onClick={this.handleClick}>
            <Button.Content visible>Login</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </form>
        <Link to="/forgotten-password">Forgot Password?</Link>
      </PageTemplate>
    )
  }
}

export default loginProcess(CSSModules(Login, css))
