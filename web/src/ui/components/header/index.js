// TODO Challenge 4 replace the logo with your own
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import connected from 'State/connect'
import { selector as UsersState } from 'Process/users/reducer'
import css from './index.css'
// import Logo from './stuff.png'
import UserLinks from './user-dropdown'
import DefaultLinks from './nav-links'

class Header extends Component {
  render() {
    const { active } = this.props.UserState
    const rightSide = active ? <UserLinks /> : <DefaultLinks />

    return (
      <div styleName="container">
        <h1>Team three</h1>
        <Link to="/login">
          <img styleName="Stuff1" src={require('./stuff.png')} />
        </Link>
        <div styleName="active-links">
          {rightSide}
        </div>
      </div>
    )
  }
}

export default connected([UsersState], [])(CSSModules(Header, css))
