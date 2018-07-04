import React from 'react'
import { Redirect } from 'react-router-dom'

import * as actions from './actions'
import * as slothActions from './slothActions'
import connected from 'State/connect'
import { selector as UsersState } from 'Process/users/reducer'
import { selector as Sloths } from 'Process/users/reducerSloths'

const loginProcess = WrappedComponent => {
  class Login extends React.Component {
    handleClick = (email, password) => {
      this.props.slothActions.fetchSloth('melissa')
      // this.props.userAuthActions.fetch(email, password)
    }

    render() {
      const { active } = this.props.UserState
      console.log('active', active)
      if (active)
        return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />

      return <WrappedComponent loginProcess={this.handleClick} {...this.props} />
    }
  }

  return connected([UsersState, Sloths], [actions, slothActions])(Login)
}

export default loginProcess
