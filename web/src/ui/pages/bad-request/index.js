import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
// import ER1 from './404Error.jpg'
// import * as process from './process'
import css from './index.css'
import connected from 'State/connect'

class BadRequest extends Component {
  // TODO Challenge 4 create an error page.
  // You must use an image, have text on the screen, a link to your login/sign up pages
  // and something that is using animation
  render() {
    return (
      <div>
        <h1>The page you are looking for does not exist.</h1>
        {/* <img src={require('./404Error.jpg')} styleName="c404" alt="bad-404" /> */}
        <img styleName="test12" src={require('./404Error.jpg')} alt="H" />
        <Link to="/login">Go-To-Log-in-Page</Link>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(BadRequest, css)))
